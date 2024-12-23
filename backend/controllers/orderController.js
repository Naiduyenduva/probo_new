const { orderBookModel } = require("../db")

const matchOrder = async ( newOrder ) => {
    const { eventId, orderType, price, quantity } = newOrder;
    const oppositeType = orderType === "buy" ? "sell" : "buy";
    console.log("function starting")

    const matchingOrders = await orderBookModel.find({
        eventId,
        orderType: oppositeType,
        status: "open",
        price: orderType === "buy" ? { $lte: price } : { $gte: price }
    }).sort({ price: orderType === "buy" ? 1 : -1, createdAT: 1 });

    let remainingQuantity = quantity;
    console.log("function before the loop")

    for (const match of matchingOrders) {
        if (remainingQuantity <= 0) break;

        const matchedQuantity = Math.min(remainingQuantity, match.quantity);

        match.quantity -= matchedQuantity;
        if (match.quantity === 0) {
            match.status = "completed";
        }
        await match.save();

        remainingQuantity -= matchedQuantity;

        console.log(`Matched ${matchedQuantity} units between orders`);
    }

    console.log("just came out of the loop")
    if (remainingQuantity > 0) {
        newOrder.quantity = remainingQuantity;
        newOrder.status = "open";
    } else {
        newOrder.status = "completed";
    }
    await newOrder.save();
};

module.exports = {
    matchOrder
}