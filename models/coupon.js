const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('coupon', {
    coupon_id: {
      type: DataTypes.STRING(36),
      allowNull: false,
      primaryKey: true
    },
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'coupontype',
        key: 'type_id'
      }
    },
    discount: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: Sequelize.Sequelize.literal('CURRENT_TIMESTAMP')
    },
    closed: {
      type: DataTypes.DATE,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'coupon',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "coupon_id" },
          { name: "type_id" },
        ]
      },
      {
        name: "FK_coupontype_TO_coupon_1",
        using: "BTREE",
        fields: [
          { name: "type_id" },
        ]
      },
    ]
  });
};
