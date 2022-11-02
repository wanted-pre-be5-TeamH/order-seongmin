const router = require("express").Router();
const orderRouter = require("./orderRouter");
const userRouter = require("./userRouter");

router.get("/ping", (req, res) => {
  res.status(200).json({ message: "pong" });
});

router.use("/order", orderRouter);
router.use("/user", userRouter);

module.exports = router;
