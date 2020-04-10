const db = require("../models");

module.exports = {
    findAll: function (req, res) {
        db.User
            .find(req.query)
            .then(userModel => res.json(userModel))
            .catch(err => res.status(422).json(err))
    },
    findById: function (req, res) {
        db.User
            .findById(req.params.id)
            .then(userModel => res.json(userModel))
            .catch(err => res.status(422).json(err))
    },
    create: function (req, res) {
        db.User
            .create(req.body)
            .then(userModel => res.json(userModel))
            .catch(err => res.status(422).json(err))
    },
    update: function (req, res) {
        db.User
            .findOneAndUpdate({ _id: req.params.id }, req.body)
            .then(userModel => res.json(userModel))
            .catch(err => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.User
            .findById({ _id: req.params.id })
            .then(userModel => userModel.remove())
            .then(userModel => res.json(userModel))
            .catch(err => res.status(422).json(err));
    }
}