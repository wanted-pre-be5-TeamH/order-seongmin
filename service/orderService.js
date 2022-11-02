const CustomError = require("../middleware/CustomError");
const { order } = require("../models/");

const selectOrders = async () => {
  return await order.findAll();
};

const selectOrder = async (orderId) => {
  const orderInfo = await order.findOne({ where: { order_id: orderId } });
  if (!orderInfo) throw new CustomError(400);

  return orderInfo;
};

module.exports = {
  selectOrders,
  selectOrder,
};
