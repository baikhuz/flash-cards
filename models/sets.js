"use strict";
module.exports = (sequelize, DataTypes) => {
  const Sets = sequelize.define(
    "Sets",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      set_name: {
        type: DataTypes.STRING,
        isAlphanumeric: true,
        required: true,
        allowNull: true
      },
      set_description: {
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
  Sets.associate = function(models) {
    Sets.belongsTo(models.Libraries, {
      foreignKey: { allowNull: false },
      onDelete: "CASCADE"
    });
  };
  return Sets;
};
