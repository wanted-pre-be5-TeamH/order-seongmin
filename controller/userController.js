const { selelctUserOrder } = require("../service/userService");

const getUserOrders = async (req, res) => {
  const { userId } = req.params;
  const userOrders = await selelctUserOrder(userId);
  return res.status(200).json(userOrders);
};

module.exports = {
  getUserOrders,
};
