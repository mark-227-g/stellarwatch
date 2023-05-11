const router = require('express').Router();

const loginRoutes = require('./login.js');
const createAccountRoutes = require ('./createAccount.js');
const stellarEventpageRoutes = require('./stellarEventpageRoutes');
const savedEventsRoutes = require('./event-routes');

router.use('/create-account', createAccountRoutes);
router.use('/login', loginRoutes);
router.use('/savedevents', savedEventsRoutes);
router.use('/', stellarEventpageRoutes);

module.exports = router;