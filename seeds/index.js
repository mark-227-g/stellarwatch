const sequelize = require('../config/connection');
const stellarUser = require('../models/stellarUser');
const stellarEvent = require('../models/stellarEvent');
const stellarUserEvent = require('../models/stellarUserEvent');
const stellarUserData = require('./stellarUser-seeds.json');
const stellarEventData = require('./stellarEvent-seeds.json');
const stellarUserEventData = require('./stellarUserEvent-seeds.json');
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await stellarUser.bulkCreate(stellarUserData, {
    individualHooks: true,
    returning: true,
  });
  await stellarEvent.bulkCreate(stellarEventData, {
    individualHooks: true,
    returning: true,
  });
  await stellarUserEvent.bulkCreate(stellarUserEventData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
