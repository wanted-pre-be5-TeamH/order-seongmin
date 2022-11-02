const { Op } = require("sequelize");
const CustomError = require("../middleware/CustomError");
const { user, userOrder, order } = require("../models");

const selelctUserOrder = async (userId) => {
  const info = await user.findAll({
    attributes: [["user_id", "userId"], "name"],
    include: [
      {
        model: userOrder,
        as: "userOrders",
        include: [
          {
            model: order,
            as: "order",
            required: true,
            right: true,
          },
        ],
        required: true,
        right: true,
      },
    ],
    where: {
      user_id: userId,
    },
  });

  if (!info[0]) throw new CustomError(400);

  return info;
};

const selectUserSearch = async (key) => {
  return await user.findAll({
    attributes: [["user_id", "userId"], "name"],
    include: [
      {
        model: userOrder,
        as: "userOrders",
        include: [
          {
            model: order,
            as: "order",
            required: true,
            right: true,
          },
        ],
        required: true,
        right: true,
      },
    ],
    where: {
      [Op.or]: [{ name: { [Op.like]: "%" + key + "%" } }],
    },
  });
};

module.exports = {
  selelctUserOrder,
  selectUserSearch,
};
