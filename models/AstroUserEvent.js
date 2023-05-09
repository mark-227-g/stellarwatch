
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class AstroUserEvent extends Model {}

  AstroUserEvent.init(
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
    modelName: 'AstroUserEvent',
  }
);

module.exports = AstroUserEvent;
