const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const StellarEvent = require('./stellarEvent');

class SavedEvent extends Model {}

SavedEvent.init(
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'stellarUser',
        key: 'id',
      },
    },
    event_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'StellarEvent',
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    created_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
    updated_at: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP'),
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'savedEvents',
    tableName: 'savedEvents', // Update the table name to match the actual table name
  }
);

SavedEvent.belongsTo(StellarEvent, {
  foreignKey: 'event_id',
  as: 'stellarEvent',
});

module.exports = SavedEvent;
