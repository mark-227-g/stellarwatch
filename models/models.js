const { Model, DataTypes } = require('sequelize');
const sequelize = require('./database');

class User extends Model {}

User.init({
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notNull: true,
      len: [3, 50]
    }
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      len: [3, 50]
    }
  },
  zipcode: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      len: [5, 10]
    }
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
    validate: {
      notNull: true,
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notNull: true,
      len: [8, 50]
    }
  }
}, {
  sequelize,
  modelName: 'user',
  timestamps: false
});

module.exports = User;
