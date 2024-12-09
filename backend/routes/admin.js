const {Router} = require("express");
const  bcrypt = require("bcrypt");
const { adminModel, eventModel } = require("../db");
const {JWT_ADMIN_SECRET} = require("../config")
const {adminMiddleware} = require("../middlewares/admin")
const jwt = require("jsonwebtoken");

const adminRouter = Router();

adminRouter.post("/signup", async (req, res) => {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password.toLowerCase(),5)
    await adminModel.create({
        username : username,
        password: hashedPassword
    })
    res.json({
        message : "admin signup"
    })
})

adminRouter.post("/signin", async (req, res)=> {
    const {username, password} = req.body;

    const admin = await adminModel.findOne({
        username: username,
    });

    if(!admin) {
        return res.status(404).json({ message: "User not found" });
    }
    const checkedPassword = await bcrypt.compare(password.toLowerCase(),admin.password)
    if(admin && checkedPassword ) {
        const token = jwt.sign({
            id:admin._id
        },JWT_ADMIN_SECRET)
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

adminRouter.post("/events/create",adminMiddleware, async (req,res) => {
    const creatorId = req.adminId;
    const { title, description, catogery } = req.body;

    const eventdetails = await eventModel.create({
        title: title,
        description: description,
        catogery: catogery,
        creatorId: creatorId
    })

    res.json({
        message : "prediction created successfully",
        eventdetails: eventdetails
    })
})

adminRouter.get("/events/all",async (req, res)=> {
    const events = await eventModel.find({});

    res.json({
        events: events,
        message: "all my events that i uploaded"
    })
})

module.exports = {
    adminRouter : adminRouter
}