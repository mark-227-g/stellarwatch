const router = require('express').Router();
const astroUserRoutes = require('./astroUserRoutes');
const astroHomepageRoutes = require('./astroHomepageRoutes');

router.use('/', astroUserRoutes);
router.use('/', astroHomepageRoutes);

module.exports = router;
