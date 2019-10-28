'use strict';
module.exports = (sequelize, DataTypes) => {
  const Sets = sequelize.define("Sets", {
    set_id: {
        type: DataTypes.UUID,
        primaryKey: true,
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
  }, {
    underscored:true,
    paranoid: true
  });
  Sets.associate = function(models) {
    // associations can be defined here
    Sets.belongsTo(models.Users, {foreignKey: "library_id", as: "library"});
    Sets.hasMany(models.Cards, { foreignKey: "card_id" });
  };
  return Sets;
};