const { Router } = require("express");
const { userModel, eventModel } = require("../db");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken")
const {JWT_USER_SECRET} = require("../config");
const {userMiddleware} = require("../middlewares/user")
const userRouter = Router();

userRouter.post('/signup',async (req,res)=> {
    try {
        const { username, password } = req.body;
        const hashedPassword = await bcrypt.hash(password.toLowerCase(),5)
        await userModel.create({
            username : username,
            password: hashedPassword
        })
        res.json({
            message: "signup"
        })
    }catch (err) {
        res.json({
            message: "error occured"
        })
    }
})

userRouter.post('/signin', async (req,res)=> {
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