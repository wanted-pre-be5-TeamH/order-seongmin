var DataTypes = require("sequelize").DataTypes;
var _country = require("./country");
var _coupon = require("./coupon");
var _coupontype = require("./coupontype");
var _delivery = require("./delivery");
var _order = require("./order");
var _status = require("./status");
var _user = require("./user");
var _userOrder = require("./userOrder");

function initModels(sequelize) {
  var country = _country(sequelize, DataTypes);
  var coupon = _coupon(sequelize, DataTypes);
  var coupontype = _coupontype(sequelize, DataTypes);
  var delivery = _delivery(sequelize, DataTypes);
  var order = _order(sequelize, DataTypes);
  var status = _status(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);
  var userOrder = _userOrder(sequelize, DataTypes);

  order.belongsTo(coupon, { as: "coupon", foreignKey: "coupon_id"});
  coupon.hasMany(order, { as: "orders", foreignKey: "coupon_id"});
  coupon.belongsTo(coupontype, { as: "type", foreignKey: "type_id"});
  coupontype.hasMany(coupon, { as: "coupons", foreignKey: "type_id"});
  userOrder.belongsTo(order, { as: "order", foreignKey: "order_id"});
  order.hasMany(userOrder, { as: "userOrders", foreignKey: "order_id"});
  order.belongsTo(status, { as: "status", foreignKey: "status_id"});
  status.hasMany(order, { as: "orders", foreignKey: "status_id"});
  userOrder.belongsTo(user, { as: "user", foreignKey: "user_id"});
  user.hasMany(userOrder, { as: "userOrders", foreignKey: "user_id"});

  return {
    country,
    coupon,
    coupontype,
    delivery,
    order,
    status,
    user,
    userOrder,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
