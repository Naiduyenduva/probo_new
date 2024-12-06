require('dotenv').config()
const express = require("express")
const app = express();

const { userRouter } = require("./routes/user");
const { adminRouter } = require ("./routes/admin")

app.use(express.json())

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);

const PORT = process.env.PORT || 3000

console.log("running")

app.listen(PORT)
