"use strict";
module.exports = (sequelize, DataTypes) => {
  const Libraries = sequelize.define(
    "Libraries",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      library_name: {
        type: DataTypes.STRING,
        isAlphanumeric: true,
        required: true,
        allowNull: true
      },
      library_description: {
        type: DataTypes.STRING,
        isAlphanumeric: true,
        required: true,
        allowNull: true
      },
      updated_at: {
        type: DataTypes.DATE
      },
      deleted_at: {
        type: DataTypes.DATE
      }
    },
    {
      underscored: true,
      paranoid: true
    }
  );
  Libraries.associate = function(models) {
    Libraries.belongsTo(models.Users, {
      foreignKey: { allowNull: false },
      onDelete: "CASCADE"
    });
  };
  return Libraries;
};
