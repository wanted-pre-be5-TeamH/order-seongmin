const { order } = require("../models/");

const selectOrders = async () => {
  return await order.findAll();
};

module.exports = {
  selectOrders,
};
