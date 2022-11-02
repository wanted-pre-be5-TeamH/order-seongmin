const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('delivery', {
    delivery_cost_id: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    country: {
      type: DataTypes.STRING(100),
      allowNull: false
    },
    value: {
      type: DataTypes.JSON,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'delivery',
    timestamps: false
  });
};
