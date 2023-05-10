const router = require('express').Router();
const {stellarSavedEvents}  = require('../models');
const {stellarSavedEventsData}  = require('../models');

router.get('/event', async (req, res) => {
  try {
    // Get all events sorted by id
    const stellarSavedEventsData = await stellarEvent.findAll({
      order: [['id', 'ASC']],
    });

    // Serialize eventpage data so templates can read it
    const stellarSavedEvents = stellarSavedEventsData.map((project) => project.get({ plain: true }));

    // Pass serialized data into Handlebars.js template
    res.render('savedevents', { stellarSavedEvents });
  } catch (err) {
    res.status(500).json(err);
  }
}); 
