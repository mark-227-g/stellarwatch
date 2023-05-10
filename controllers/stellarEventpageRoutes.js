const router = require('express').Router();
const {stellarEvent}  = require('../models');
const {stellarUserEvent}  = require('../models');

router.get('/event', async (req, res) => {
  try {
    // Get all events sorted by id
    const stellarEventData = await stellarEvent.findAll({
      order: [['id', 'ASC']],
    });

    // Serialize eventpage data so templates can read it
    const stellarEvents = stellarEventData.map((project) => project.get({ plain: true }));

    // Pass serialized data into Handlebars.js template
    res.render('eventpage', { stellarEvents });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/event/addevent', async(req,res) => 
{
    const {stellarUserId,stellarEventId}=req.body;
    console.log(stellarUserId + "  " + stellarEventId);
    const newdate=new Date();
    console.log(stellarUserId+" : "+stellarEventId);
    console.log(req.body);
    try {
      const [user_id, event_id,created_at,updated_at]= await stellarUserEvent.findOrCreate({
        where: {user_id:stellarUserId,
                event_id:stellarEventId ,
                created_at:newdate,
              updated_at:newdate 
            },
               
        defaults:{}
      }
      
      );

        res.json({success:true});
    } catch (err) {
    console.log("error " + err)
    res.status(500).json("500 error "+ err);
  }
});




module.exports = router;
