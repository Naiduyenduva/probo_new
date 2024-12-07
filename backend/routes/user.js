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

userRouter.post("/bet/buy", (req,res)=>{
    res.json({
        message: "order placed successfully"
    })
})

userRouter.get("/bets/all", (req,res) => {
    res.json({
        message : "all my bet history"
    })
})

userRouter.get("/prediction/all", (req, res)=> {
    res.json({
        message : "all the predictions"
    })
})

module.exports = {
    userRouter: userRouter
}