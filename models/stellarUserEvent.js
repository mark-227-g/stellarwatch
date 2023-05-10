const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class stellarUserEvent extends Model {}

  stellarUserEvent.init(
    {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    datetime: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    info: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    photo: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    location: {
      type: DataTypes.STRING,
      allowNull: true,
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'stellarUserEvent',
  }
);

module.exports = stellarUserEvent;
