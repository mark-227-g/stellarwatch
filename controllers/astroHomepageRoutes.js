const router = require('express').Router();
const { AstroEvent}  = require('../models');
const {AstroUserEvent}  = require('../models');

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

router.post('/home/addevent', async(req,res) => 
{
    const {astroUserId,astroEventId}=req.body;
    console.log(astroUserId + "  " + astroEventId);
    const newdate=new Date();
    console.log(astroUserId+" : "+astroEventId);
    console.log(req.body);
    try {
      const [user_id, event_id,created_at,updated_at]= await AstroUserEvent.findOrCreate({
        where: {user_id:astroUserId,
                event_id:astroEventId ,
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
