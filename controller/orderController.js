const { selectOrders } = require("../service/orderService");

const getOrders = async (req, res) => {
  const orders = await selectOrders();
  return res.status(200).json(orders);
};

module.exports = { getOrders };
