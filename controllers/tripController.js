const db = require("../models");
const passport = require("../passport");

//Controllers for Trips, references the models and is referenced by the routes 
module.exports = {
    findAll: function (req, res) {
        db.Trip.find(req.query)
            .then((TripModel) => res.json(TripModel))
            .catch((err) => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Trip.findById(req.params.id)
            .then((TripModel) => res.json(TripModel))
            .catch((err) => res.status(422).json(err));
    },
    create: function (req, res) {
        console.log(req.body)
        db.Trip.create(req.body)
            .then((TripModel) => res.json(TripModel))
            .catch((err) => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Trip.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then((TripModel) => res.json(TripModel))
            .catch((err) => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Trip.findById({ _id: req.params.id })
            .then((TripModel) => TripModel.remove())
            .then((TripModel) => res.json(TripModel))
            .catch((err) => res.status(422).json(err));
    },
    findByUserId: function(req, res){
        db.Trip.find({ userId: req.params.id })
        .sort({createdAt: -1})
        .then((TripModel) => res.json(TripModel))
        .catch((err) => res.status(422).json(err));
    }
};