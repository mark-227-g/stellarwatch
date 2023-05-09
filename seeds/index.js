const sequelize = require('../config/connection');
const AstroUser = require('../models/AstroUser');
const AstroEvent = require('../models/AstroEvent');
const AstroUserEvent = require('../models/AstroUserEvent');
const astroUserData = require('./astroUser-seeds.json');
const astroEventData = require('./astroEvent-seeds.json');
const astroUserEventData = require('./astroUserEvent-seeds.json');
const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  await AstroUser.bulkCreate(astroUserData, {
    individualHooks: true,
    returning: true,
  });
  await AstroEvent.bulkCreate(astroEventData, {
    individualHooks: true,
    returning: true,
  });
  await AstroUserEvent.bulkCreate(astroUserEventData, {
    individualHooks: true,
    returning: true,
  });

  process.exit(0);
};

seedDatabase();
