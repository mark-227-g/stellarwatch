const router = require('express').Router();

const loginRoutes = require('./login.js');
const createAccountRoutes = require ('./createAccount.js');
const stellarHomepageRoutes = require('./stellarHomepageRoutes');

router.use('/create-account', createAccountRoutes);
router.use('/login', loginRoutes);
router.use('/', stellarHomepageRoutes);

module.exports = router;