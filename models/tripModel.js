// models for database
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

mongoose.promise = Promise;

const tripSchema = new Schema({
    location: String,
    state: String,
    country: String,
    description: String, 
    userID: String
}, {
    timestamps: true
});


const Trip = mongoose.model("Trip", tripSchema);

module.exports = Trip;
