const {
  selectOrders,
  selectOrder,
  selectKeyword,
  updateOrderStatus,
} = require("../service/orderService");

const getOrders = async (req, res) => {
  const orders = await selectOrders();
  return res.status(200).json(orders);
};

const getOrder = async (req, res) => {
  const { orderId } = req.params;
  const order = await selectOrder(orderId);
  return res.status(200).json(order);
};

const getSearch = async (req, res) => {
  const { key } = req.query;
  const results = await selectKeyword(key);
  return res.status(200).json(results);
};

const pathOrderStatus = async (req, res) => {
  const { statusWord } = req.body;
  const { orderId } = req.params;
  await updateOrderStatus(orderId, statusWord);
  return res.status(200).json({ message: "ORDER_STATUS_UPDATE" });
};

module.exports = { getOrders, getOrder, getSearch, pathOrderStatus };
