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

module.exports = {
    adminRouter : adminRouter
}