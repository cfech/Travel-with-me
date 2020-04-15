const router = require("express").Router();
const tripController = require("../../controllers/tripController")

router.route("/")
    .post(tripController.create)
    .get(tripController.findById)
    .delete(tripController.remove);

router
    .route("/:id")
    .get(tripController.findById)
    .put(tripController.update)
    .delete(tripController.remove);

    module.exports = router;
