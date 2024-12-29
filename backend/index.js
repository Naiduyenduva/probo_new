require('dotenv').config()
const express = require("express")
const mongoose = require("mongoose");
const app = express();
const { MongoURL } = require("./config")
const cors = require("cors")

const { userRouter } = require("./routes/user");
const { adminRouter } = require ("./routes/admin")
const {orderRouter} = require("./routes/order")
app.use(express.json());
app.use(cors())

app.use("/api/v1/user", userRouter);
app.use("/api/v1/order", orderRouter);
app.use("/api/v1/admin", adminRouter);

async function main () {
    await mongoose.connect(MongoURL)
    console.log("Databse connected")
}
main();

app.get('/', (req, res) => {
    res.send('Welcome to Probo')
  })

const PORT = process.env.PORT || 3000

console.log("running")

app.listen(PORT)
