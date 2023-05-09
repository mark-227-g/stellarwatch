const router = require('express').Router();

const loginRoutes = require('./login.js');
const createAccountRoutes = require ('./createAccount.js');
const astroHomepageRoutes = require('./astroHomepageRoutes');

router.use('/create-account', createAccountRoutes);
router.use('/login', loginRoutes);
router.use('/', astroHomepageRoutes);

module.exports = router;