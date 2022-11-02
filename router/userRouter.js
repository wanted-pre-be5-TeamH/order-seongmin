const router = require("express").Router();
const { catchAsync } = require("../middleware/ErrorHandler");
const { getUserOrders } = require("../controller/userController");

router.route("/:userId/order").get(catchAsync(getUserOrders));

module.exports = router;
