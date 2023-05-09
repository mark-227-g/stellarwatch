const router = require('express').Router();

const savedevents = [
      {
        stellarevent: 'Test event 1',
        description: 'Description 1',
      },
      {
        stellarevent: 'Test event 2',
        description: 'Description 2',
      },
      {
        stellarevent: 'Test event 3',
        description: 'Description 3',
      },
      {
        stellarevent: 'Test event 4',
        description: 'Description 4',
      },
      {
        stellarevent: 'Test event 5',
        description: 'Description 5',
      },
      {
        stellarevent: 'Test event 6',
        description: 'Description 6',
      },
      {
        stellarevent: 'Test event 7',
        description: 'Description 7',
      },
    ];

router.get('/', (req, res) => {
 res.render('savedevents', { savedevents: savedevents });
});
    


module.exports = router;