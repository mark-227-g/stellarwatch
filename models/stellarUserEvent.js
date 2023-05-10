const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class stellarUserEvent extends Model {}

  stellarUserEvent.init(
  {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  event: {
    type: DataTypes.INTEGER,
  }
  ,
  created_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  updated_at: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'stellarUserEvent',
  }
);

module.exports = stellarUserEvent;
