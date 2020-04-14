// models for database
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.promise = Promise;

const tripSchema = new Schema({
    name: String,
    state: String,
    country: String,
    snippet: String, 
    userID: String
}, {
    timestamps: true
});


const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
