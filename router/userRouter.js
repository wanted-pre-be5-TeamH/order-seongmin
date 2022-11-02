const router = require("express").Router();
const { catchAsync } = require("../middleware/ErrorHandler");
const {
  getUserOrders,
  getUserSearch,
} = require("../controller/userController");

router.route("/:userId/order").get(catchAsync(getUserOrders));
router.route("/search").get(catchAsync(getUserSearch));

module.exports = router;
