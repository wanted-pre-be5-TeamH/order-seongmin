const Sequelize = require('sequelize');
module.exports = function(sequelize, DataTypes) {
  return sequelize.define('status', {
    status_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    status: {
      type: DataTypes.STRING(36),
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'status',
    timestamps: false,
    indexes: [
      {
        name: "PRIMARY",
        unique: true,
        using: "BTREE",
        fields: [
          { name: "status_id" },
        ]
      },
    ]
  });
};
