const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class AstroUser extends Model {}

AstroUser.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    username: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    zipcode: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: true,
      }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'AstroUser',
  }
);

module.exports = AstroUser;
