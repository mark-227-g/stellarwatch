const router = require('express').Router();
const astroUserRoutes = require('./astroUserRoutes');

router.use('/', astroUserRoutes);

module.exports = router;
