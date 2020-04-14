const db = require("../models");
const passport = require("../passport");

module.exports = {
    findAll: function (req, res) {
        db.Item.find(req.query)
            .then((ItemModel) => res.json(ItemModel))
            .catch((err) => res.status(422).json(err));
    },
    findById: function (req, res) {
        db.Item.findById(req.params.id)
            .then((ItemModel) => res.json(ItemModel))
            .catch((err) => res.status(422).json(err));
    },
    create: function (req, res) {
        db.Item.create(req.body)
            .then((ItemModel) => res.json(ItemModel))
            .catch((err) => res.status(422).json(err));
    },
    update: function (req, res) {
        db.Item.findOneAndUpdate({ _id: req.params.id }, req.body)
            .then((ItemModel) => res.json(ItemModel))
            .catch((err) => res.status(422).json(err));
    },
    remove: function (req, res) {
        db.Item.findById({ _id: req.params.id })
            .then((ItemModel) => ItemModel.remove())
            .then((ItemModel) => res.json(ItemModel))
            .catch((err) => res.status(422).json(err));
    },

};