const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class AstroUserEvent extends Model {}

AstroUserEvent.init(
  {
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
