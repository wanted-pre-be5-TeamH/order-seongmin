const {
  selectOrders,
  selectOrder,
  selectKeyword,
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

module.exports = { getOrders, getOrder, getSearch };
