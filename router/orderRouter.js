const router = require("express").Router();

const { getOrders } = require("../controller/orderController");

router.route("/").get(getOrders);

module.exports = router;
