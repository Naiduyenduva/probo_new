const { Router } = require("express");
const { userModel, betModel, eventModel } = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const {JWT_USER_SECRET} = require("../config");
const {userMiddleware} = require("../middlewares/user")
const userRouter = Router();

userRouter.post('/signup',async (req,res)=> {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password.toLowerCase(),5)
    console.log(hashedPassword);
    await userModel.create({
        username : username,
        password: hashedPassword
    })
    res.json({
        message: "signup"
    })
})

userRouter.post('/signin',async (req,res)=> {
    const {username, password} = req.body;

    const user = await userModel.findOne({
        username: username,
    });

    if(!user) {
        return res.status(404).json({ message: "User not found" });
    }
    const checkedPassword = await bcrypt.compare(password.toLowerCase(),user.password)
    if(user && checkedPassword ) {
        const token = jwt.sign({
            id:user._id
        },JWT_USER_SECRET)
        res.json({
            message : "successfully login",
            token: token
        })
    } else {
        res.status(403).json({
            message : "invalid credentials"
        })
    }

})

userRouter.post("/bet/buy",userMiddleware, async (req,res)=>{
    const userId = req.userId;
    const { eventId, choice } = req.body;
    await betModel.create({
        userId,
        eventId,
        choice
    })
    res.json({
        message: "bet order placed successfully",
    })
})

userRouter.get("/bets/all",userMiddleware, async (req,res) => {
    const userId = req.userId;
    const betmine = await betModel.find({userId})
    res.json({
        message : "all my bet history",
        betmine,
    })
})

userRouter.get("/prediction/all",async (req, res)=> {
    const allPredictions = await eventModel.find({})
    res.json({
        message : "all the predictions",
        allPredictions
    })
})

module.exports = {
    userRouter: userRouter
}