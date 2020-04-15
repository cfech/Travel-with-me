const router = require("express").Router();
const itemController = require("../../controllers/itemController")

router.route("/")
    .post(itemController.create)
    .get(itemController.findById)
    .delete(itemController.remove);

router
    .route("/:id")
    .get(itemController.findById)
    .put(itemController.update)
    .delete(itemController.remove);

    module.exports = router;
