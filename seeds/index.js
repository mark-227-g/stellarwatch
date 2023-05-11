const sequelize = require('../config/connection');
const stellarEvent = require('../models/stellarEvent');
const stellarEventData = require('./stellarEvent-seeds.json');

const seedDatabase = async () => {
  try {
    // Disable foreign key checks temporarily
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 0');

    await sequelize.sync({ force: true });

    // Seed the stellarEvent table
    await stellarEvent.bulkCreate(stellarEventData, {
      individualHooks: true,
      returning: true,
    });

    // Re-enable foreign key checks
    await sequelize.query('SET FOREIGN_KEY_CHECKS = 1');

    process.exit(0);
  } catch (err) {
    console.error('Error seeding database:', err);
    process.exit(1);
  }
};

seedDatabase();
