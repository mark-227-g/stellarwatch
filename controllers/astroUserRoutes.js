const router = require('express').Router();
const { AstroUser } = require('../models');

router.get('/', async (req, res) => {
  try {
    // Get all users, sorted by name
    const astroUserData = await AstroUser.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    // Serialize user data so templates can read it
    const astroUsers = astroUserData.map((project) => project.get({ plain: true }));

    // Pass serialized data into Handlebars.js template
    res.render('all', { astroUsers });
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
