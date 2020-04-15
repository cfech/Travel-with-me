const router = require("express").Router();
const tripController = require("../../controllers/tripController")
const itemController = require ("../../controllers/itemController")
router.route("/")
    .post(tripController.create)
    .get(tripController.findById)
    .delete(tripController.remove);

router
    .route("/:id")
    .get(tripController.findById)
    .put(tripController.update)
    .delete(tripController.remove);

    router
.route("/items/:id")
.get(itemController.findByUserId)

    module.exports = router;
