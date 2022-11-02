const router = require("express").Router();

const { getOrders, getOrder } = require("../controller/orderController");
const { catchAsync } = require("../middleware/ErrorHandler");

router.route("/").get(getOrders);
router.route("/:orderId").get(catchAsync(getOrder));

module.exports = router;
