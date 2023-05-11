const router = require('express').Router();
const { stellarUserEvent, stellarEvent } = require('../models');

router.get('/', (req, res) => {
  res.render('savedevents');
});

router.get('/savedevents', async (req, res) => {
  try {
    // Get saved events for the current user and include the associated event data
    const savedEventData = await stellarUserEvent.findAll({
      where: { user_id: currentUserId },
      include: [stellarEvent],
      order: [['created_at', 'DESC']],
    });

    console.log(savedEventData);

    // Serialize saved event data so templates can read it
    const savedEvents = savedEventData.map((event) => event.get({ plain: true }));

    console.log(savedEvents);

    // Pass serialized data into Handlebars.js template
    res.render('savedevents', { savedEvents });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
