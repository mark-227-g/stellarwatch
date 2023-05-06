const express = require('express');
const router = express.Router();
const { sequelize } = require('../models/models');
const { Op } = require('sequelize');
const User = require('../models/models');

// Route to render the create account page
router.get('/', (req, res) => {
  res.render('createaccount');
});

// Route to create a new account
router.post('/', (req, res) => {
  console.log('Request body:', req.body);
  const { username, email, password, zipcode, name } = req.body;
  console.log(`Username: ${username}, Email: ${email}, Password: ${password}, Zipcode: ${zipcode}, Name: ${name}`);

  // Check if username and email are unique
  console.log('LOGGING SQL QUERY' + User.findOne({ where: { [Op.or]: [{username: username}, {email: email}] } }).toString());
  User.findOne({ where: { [Op.or]: [{username: sequelize.escape(username)}, {email: sequelize.escape(email)}] } })
  .then(user => {
    console.log(`User: ${JSON.stringify(user)}`);

    if (user) {
      if (user.username === username) {
        console.log('Username already taken');
        res.status(409).json({ message: 'Username already taken' });
      } else {
        console.log('Email already registered');
        res.status(409).json({ message: 'Email already registered' });
      }
    } else {
      // Create new user in database
      console.log('Before User.create');
      User.create({ username, email, password, zipcode, name })
        .then(() => {
          console.log('User created');
          res.json({ success: true });
        })
        .catch(error => {
          console.error(error);
          res.status(500).json({ message: 'Internal server error' });
        });
    }
  })
  .catch(error => {
    console.error(error);
    console.log(JSON.stringify(req.body));
    res.status(500).json({ message: 'Internal server error' });
  });
});

module.exports = router;
