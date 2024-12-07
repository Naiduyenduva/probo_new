require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose");
const app = express();
const { MongoURL } = require("./config")

const { userRouter } = require("./routes/user");
const { adminRouter } = require ("./routes/admin")

app.use(express.json())

app.use("/api/v1/user", userRouter);
app.use("/api/v1/admin", adminRouter);

async function main () {
    await mongoose.connect(MongoURL)
    console.log("Databse connected")
}
main();

const PORT = process.env.PORT || 3000

console.log("running")

app.listen(PORT)
