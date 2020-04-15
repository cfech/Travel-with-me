//building backend query string 
const router = require("express").Router();
const userRoutes = require("./users");
const tripRoutes = require("./trips")
const itemRoutes = require("./items")

// backend routes
router.use("/users", userRoutes);
router.use("/trips", tripRoutes)
router.use("/items", itemRoutes)

module.exports = router;
