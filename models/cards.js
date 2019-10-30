"use strict";
module.exports = (sequelize, DataTypes) => {
  const Cards = sequelize.define(
    "Cards",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      card_question: {
        type: DataTypes.STRING,
        isAlphanumeric: true,
        required: true,
        allowNull: true
      },
      card_answer: {
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
  Cards.associate = function(models) {
    Cards.belongsTo(models.Sets, {
      foreignKey: { allowNull: false },
      onDelete: "CASCADE"
    });
  };
  return Cards;
};
