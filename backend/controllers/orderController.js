const { orderBookModel } = require("../db")

const matchOrder = async ( newOrder ) => {
    const { eventId, orderType, price, quantity } = newOrder;
    const oppositeType = orderType === "no" ? "yes" : "no";
    console.log("function starting")

    const matchingOrders = await orderBookModel.find({
        eventId: { $eq: newOrder.eventId },
        orderType: oppositeType,
        status: "open",
        userId: { $ne: newOrder.userId },
        price: 10-price
    }).sort({ createdAT: 1 });

    let remainingQuantity = quantity;

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