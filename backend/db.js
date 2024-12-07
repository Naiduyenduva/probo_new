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
    outcome : String,
    is_Settled : { type: Boolean, default: false },
    creatorId : ObjectId,
    createdAT : {type: Date, default: Date.now }
})

const betSchema = new Schema ({
    userId : ObjectId,
    predictionId : ObjectId,
    choice : String,
    createdAT : {type: Date, default: Date.now }
})

const userModel = mongoose.model("user", userSchema);
const adminModel = mongoose.model("admin", adminSchema);
const eventModel = mongoose.model("event", eventSchema);
const betModel = mongoose.model("bet", betSchema);

module.exports = {
    userModel : userModel,
    adminModel: adminModel,
    eventModel : eventModel,
    betModel : betModel
}