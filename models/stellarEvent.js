const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class StellarEvent extends Model {}

StellarEvent.init(
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
      field: 'eventdatetime',
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
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'StellarEvent',
  }
);

module.exports = StellarEvent;
