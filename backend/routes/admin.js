const {Router} = require("express");
const { adminModel } = require("../db");

const adminRouter = Router();

adminRouter.post("/signup", async (req, res) => {
    const { username, password } = req.body;
    await adminModel.create({
        username : username,
        password: password
    })
    res.json({
        message : "admin signup"
    })
})

adminRouter.post("/signin", (req, res)=> {
    res.json({
        message : "admin signin"
    })
})

adminRouter.post("/events/create", (req,res) => {
    res.json({
        message : "prediction created successfully"
    })
})

adminRouter.get("/events/all", (req, res)=> {
    res.json({
        message: "all my events that i uploaded"
    })
})

module.exports = {
    adminRouter : adminRouter
}