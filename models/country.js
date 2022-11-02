const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('country', {
    country_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    country_code: {
      type: DataTypes.STRING(4),
      allowNull: false
    },
    country_dcode: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    country_name: {
      type: DataTypes.STRING(100),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'country',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "country_id" },
        ]
      },
    ]
  });
};
