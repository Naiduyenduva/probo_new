const {Router} = require("express")

const adminRouter = Router();

adminRouter.post("/signup", (req, res) => {
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