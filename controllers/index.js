const router = require('express').Router();

const loginRoutes = require('./login.js');
const createAccountRoutes = require ('./createAccount.js');
const stellarEventpageRoutes = require('./stellarEventpageRoutes');

router.use('/create-account', createAccountRoutes);
router.use('/login', loginRoutes);
router.use('/', stellarEventpageRoutes);

module.exports = router;