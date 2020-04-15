const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.promise = Promise;

//Schema for trip item
const itemSchema = new Schema({
    name: String,
    score: Number,
    snippet: String, 
    tripId: String,
    userId: String,

}, {
    timestamps: true
});

//Create an Item Table with the item schema
const item = mongoose.model("Item", itemSchema);

module.exports = item;
