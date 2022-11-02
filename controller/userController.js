const {
  selelctUserOrder,
  selectUserSearch,
} = require("../service/userService");

const getUserOrders = async (req, res) => {
  const { userId } = req.params;
  const userOrders = await selelctUserOrder(userId);
  return res.status(200).json(userOrders);
};

const getUserSearch = async (req, res) => {
  const { key } = req.query;
  const searchData = await selectUserSearch(key);
  return res.status(200).json(searchData);
};

module.exports = {
  getUserOrders,
  getUserSearch,
};
