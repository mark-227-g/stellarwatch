const router = require('express').Router();

const savedevents = [
      {
        astroevent: 'Test event 1',
        description: 'Description 1',
      },
      {
        astroevent: 'Test event 2',
        description: 'Description 2',
      },
      {
        astroevent: 'Test event 3',
        description: 'Description 3',
      },
      {
        astroevent: 'Test event 4',
        description: 'Description 4',
      },
      {
        astroevent: 'Test event 5',
        description: 'Description 5',
      },
      {
        astroevent: 'Test event 6',
        description: 'Description 6',
      },
      {
        astroevent: 'Test event 7',
        description: 'Description 7',
      },
    ];

router.get('/', (req, res) => {
 res.render('savedevents', { savedevents: savedevents });
});
    


module.exports = router;