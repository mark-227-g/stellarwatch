const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const SavedEvent = require('./stellarSavedEvent');

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
    modelName: 'StellarEvent',
  }
);

StellarEvent.hasMany(SavedEvent, {
  foreignKey: 'event_id',
});

module.exports = StellarEvent;
