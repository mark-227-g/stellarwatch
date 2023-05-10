const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class stellarEvent extends Model {}

stellarEvent.init(
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
    eventdatetime: {
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
    modelName: 'stellarEvent',
  }
);

module.exports = stellarEvent;
