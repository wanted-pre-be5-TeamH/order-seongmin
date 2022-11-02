const router = require("express").Router();

const {
  getOrders,
  getOrder,
  getSearch,
} = require("../controller/orderController");
const { catchAsync } = require("../middleware/ErrorHandler");

router.route("/").get(getOrders);
router.route("/search").get(catchAsync(getSearch));
router.route("/:orderId").get(catchAsync(getOrder));

module.exports = router;
