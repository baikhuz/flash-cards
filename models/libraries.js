'use strict';
module.exports = (sequelize, DataTypes) => {
  const Libraries = sequelize.define("Libraries", {
    library_id: {
        type: DataTypes.UUID,
        primaryKey: true,
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
  }, {
    underscored:true,
    paranoid: true
  });
  Libraries.associate = function(models) {
    // associations can be defined here
    Libraries.belongsTo(models.Users, {foreignKey: "user_id", as: "user"});
    Libraries.hasMany(models.Sets, { foreignKey: "set_id" });
  };
  return Libraries;
};