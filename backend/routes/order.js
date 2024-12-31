const {Router} = require("express")
const {orderBookModel} = require("../db");
const { userMiddleware } = require("../middlewares/user");
const {matchOrder} = require("../controllers/orderController")

const orderRouter = Router();

orderRouter.post("/order",userMiddleware, async (req,res) => {
    const userId = req.userId;
    const {eventId,eventName,orderType, youPut, youGet, price,quantity,totalQuantity,status} = req.body;

    const newOrder = await orderBookModel.create ({
        userId:userId,
        eventId: eventId,
        eventName: eventName,
        orderType: orderType,
        youPut: youPut,
        youGet: youGet,
        price: price,
        quantity: quantity,
        totalQuantity: totalQuantity,
        status : status
    })

    await matchOrder(newOrder)
    
    res.json({
        message: "hello wrold",
        order: newOrder
    })
})

module.exports = {
    orderRouter : orderRouter
}