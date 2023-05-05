const router = require('express').Router();
const { AstroEvent } = require('../models');

router.get('/home', async (req, res) => {
  try {
    // Get all Homepages, sorted by id
    const astroEventData = await AstroEvent.findAll({
      order: [['id', 'ASC']],
    });

    // Serialize Homepage data so templates can read it
    const astroEvents = astroEventData.map((project) => project.get({ plain: true }));

    // Pass serialized data into Handlebars.js template
    res.render('homepage', { astroEvents });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
