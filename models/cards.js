'use strict';
module.exports = (sequelize, DataTypes) => {
  const Cards = sequelize.define("Cards", {
    card_id: {
      type: DataTypes.UUID,
      primaryKey: true,
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
  }, {
    underscored:true,
    paranoid: true
  });
  Cards.associate = function(models) {
    // associations can be defined here
    Cards.belongsTo(models.Sets, {foreignKey: "set_id", as: "set"});
  };
  return Cards;
};