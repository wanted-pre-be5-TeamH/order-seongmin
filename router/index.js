const router = require("express").Router();
const orderRouter = require("./orderRouter");

router.get("/ping", (req, res) => {
  res.status(200).json({ message: "pong" });
});

router.use("/order", orderRouter);

module.exports = router;
