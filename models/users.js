'use strict'
module.exports = (sequelize, DataTypes) => {
  const Users = sequelize.define(
    'Users',
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true
      },
      first_name: {
        type: DataTypes.STRING,
        isAlphanumeric: true,
        required: true,
        allowNull: true
      },
      last_name: {
        type: DataTypes.STRING,
        required: true,
        allowNull: true
      },
      username: {
        type: DataTypes.STRING,
        required: true,
        allowNull: true,
        len: [5, 20]
      },
      password: {
        type: DataTypes.STRING,
        required: true,
        allowNull: true,
        len: [5, 20]
      },
      email: {
        type: DataTypes.STRING,
        required: true,
        allowNull: true,
        len: [7, 100],
        isEmail: true
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
  )
  Users.associate = function(models) {
    Users.hasMany(models.Libraries, {
      foreignKey: { allowNull: false },
      onDelete: 'CASCADE'
    })
  }
  return Users
}
