const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.promise = Promise;

const itemSchema = new Schema({
    location: String,
    score: Number,
    description: String, 
    image: String,
    attribute: String,
    tripID: String

}, {
    timestamps: true
});


const item = mongoose.model("Item", itemSchema);

module.exports = item;
