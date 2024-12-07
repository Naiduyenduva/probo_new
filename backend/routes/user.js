const { Router } = require("express");
const { userModel } = require("../db");
const userRouter = Router();

userRouter.post('/signup',async (req,res)=> {
    const { username, password } = req.body;
    await userModel.create({
        username : username,
        password: password
    })
    res.json({
        message: "signup"
    })
})

userRouter.post('/signin', (req,res)=> {
    res.json({
        message: "signin"
    })
})

module.exports = {
    userRouter: userRouter
}