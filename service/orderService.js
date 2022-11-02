const { Op } = require("sequelize");
const CustomError = require("../middleware/CustomError");
const { order, status } = require("../models/");

const selectOrders = async () => {
  return await order.findAll();
};

const selectOrder = async (orderId) => {
  const orderInfo = await order.findOne({ where: { order_id: orderId } });
  if (!orderInfo) throw new CustomError(400);

  return orderInfo;
};

const selectKeyword = async (key) => {
  return await order.findAll({
    where: {
      [Op.or]: [
        { pay_state: { [Op.like]: "%" + key + "%" } },
        { buyr_country: { [Op.like]: "%" + key + "%" } },
        { buyr_city: { [Op.like]: "%" + key + "%" } },
        { buyr_zipx: { [Op.like]: "%" + key + "%" } },
        { vccode: { [Op.like]: "%" + key + "%" } },
      ],
    },
  });
};

const updateOrderStatus = async (orderId, statusWord) => {
  const { status_id } = await status.findOne({
    where: {
      status: statusWord,
    },
  });

  return await order.update(
    { status_id },
    {
      where: {
        order_id: orderId,
      },
    }
  );
};

module.exports = {
  selectOrders,
  selectOrder,
  selectKeyword,
  updateOrderStatus,
};
