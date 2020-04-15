// models for database
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.promise = Promise;

//Schema for trip
const tripSchema = new Schema({
    name: String,
    state: String,
    country: String,
    snippet: String, 
    userId: String
}, {
    timestamps: true
});

//Create a trip table with the tripSchema
const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
