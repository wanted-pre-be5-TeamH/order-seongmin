const { selectOrders, selectOrder } = require("../service/orderService");

const getOrders = async (req, res) => {
  const orders = await selectOrders();
  return res.status(200).json(orders);
};

const getOrder = async (req, res) => {
  const { orderId } = req.params;
  const order = await selectOrder(orderId);
  return res.status(200).json(order);
};

module.exports = { getOrders, getOrder };
