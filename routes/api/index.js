//building backend query string 

const router = require("express").Router();
const userRoutes = require("./users");

// backend routes
router.use("/users", userRoutes);

module.exports = router;
