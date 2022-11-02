const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('order', {
    order_id: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 1,
      references: {
        model: 'status',
        key: 'status_id'
      }
    },
    coupon_id: {
      type: DataTypes.STRING(36),
      allowNull: true,
      references: {
        model: 'coupon',
        key: 'coupon_id'
      }
    },
    quantity: {
      type: DataTypes.DECIMAL(10,0),
      allowNull: false
    },
    price: {
      type: DataTypes.FLOAT,
      allowNull: false
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    updated: {
      type: DataTypes.DATE,
      allowNull: true
    },
    buyr_zipx: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    vccode: {
      type: DataTypes.STRING(36),
      allowNull: true
    },
    pay_state: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    buyr_country: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    buyr_city: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'order',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "order_id" },
        ]
      },
      {
        name: "FK_status_TO_order_1",
        using: "BTREE",
        fields: [
          { name: "status_id" },
        ]
      },
      {
        name: "FK_coupon_TO_order_1",
        using: "BTREE",
        fields: [
          { name: "coupon_id" },
        ]
      },
    ]
  });
};
