const mongoose = require("mongoose")
const Schema = mongoose.Schema;
const ObjectId = mongoose.Types.ObjectId;

const userSchema = new Schema  ({
    username : { type: String, unique: true},
    password : {type: String, required: true },
    balance : {type: Number, default: 0 },
    createdAT : {type: Date, default: Date.now }
});

const adminSchema = new Schema ({
    username : { type: String, unique: true},
    password : {type: String, required: true },
    createdAT : {type: Date, default: Date.now }
})

const eventSchema = new Schema ({
    title : String,
    description : String,
    catogery: String,
    image: String,
    yes: Number,
    no: Number,
    is_Settled : { type: Boolean, default: false },
    creatorId : ObjectId,
    createdAT : {type: Date, default: Date.now }
})

const orderBookSchema = new Schema({
    eventId: { type: ObjectId, required: true, ref: "event" },
    eventName: { type: String, required: true},
    userId: { type: ObjectId, required: true, ref: "user" }, 
    orderType: { type: String, enum: ['yes', 'no'], required: true },
    youPut: { type:Number },
    youGet: { type:Number },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    totalQuantity: { type:Number },
    status: { type: String, enum: ['open', 'completed', 'canceled'], default: 'open' },
    createdAT: { type: Date, default: Date.now }
});

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const eventModel = mongoose.model("event", eventSchema);
const orderBookModel = mongoose.model("orderBook", orderBookSchema);


module.exports = {
    userModel : userModel,
    adminModel: adminModel,
    eventModel : eventModel,
    orderBookModel: orderBookModel
}