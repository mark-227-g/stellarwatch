const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class stellarUserEvent extends Model {}

  stellarUserEvent.init(
  {
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true
  },
  event_id: {
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
