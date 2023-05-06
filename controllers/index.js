const router = require('express').Router();

const loginRoutes = require('./login.js');

const createAccountRoutes = require ('./createAccount.js');

router.use('/create-account', createAccountRoutes);

router.use('/login', loginRoutes);

module.exports = router;