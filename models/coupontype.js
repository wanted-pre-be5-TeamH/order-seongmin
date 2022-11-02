const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('coupontype', {
    type_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    type: {
      type: DataTypes.STRING(36),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'coupontype',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "type_id" },
        ]
      },
    ]
  });
};
