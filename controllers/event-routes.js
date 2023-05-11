const router = require('express').Router();
const { SavedEvent, StellarEvent } = require('../models');

router.get('/savedevents', async (req, res) => {
  try {
    // Get saved events for the current user and include the associated event data
    const savedEventData = await SavedEvent.findAll({
      where: { user_id: req.session.currentUserId },
      include: [{ model: StellarEvent, as: 'stellarEvent' }],
      order: [['created_at', 'DESC']],
    });

    // Serialize saved event data so templates can read it
    const savedEvents = savedEventData.map((event) => event.get({ plain: true }));

    console.log('savedEvents:', savedEvents);

    const stellarEvents = savedEvents.map((event) => event.stellarEvent);

    console.log('stellarEvents:', stellarEvents);

    // Pass serialized data into Handlebars.js template
    res.render('savedevents', { savedEvents, stellarEvents });
  } catch (err) {
    console.error('Error:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/savedevents', async (req, res) => {
  try {
    const eventData = await SavedEvent.create({
      user_id: req.session.currentUserId,
      event_id: req.body.event_id,
      name: req.body.name,
      description: req.body.description,
      date: req.body.date,
      start_time: req.body.start_time,
      end_time: req.body.end_time,
      location: req.body.location,
    });

    console.log('eventData:', eventData); // add this line

    res.status(200).json(eventData);
  } catch (err) {
    console.log('Error in /savedevents route:', err); // add this line
    res.status(400).json(err);
  }
});

router.delete('/savedevents/:eventId', async (req, res) => {
  try {
    const eventId = req.params.eventId;

    // Logic to delete the saved event from the database
    await SavedEvent.destroy({ where: { id: eventId } });

    res.sendStatus(204); // Send a 204 No Content response indicating successful deletion
  } catch (err) {
    console.error('Failed to delete the saved event:', err);
    res.status(500).json({ message: 'Internal server error' });
  }
});

module.exports = router;
