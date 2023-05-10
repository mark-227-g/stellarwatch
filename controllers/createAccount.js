const express = require('express');
const router = express.Router();
const { sequelize } = require('../models/index');
const { Op, Sequelize } = require('sequelize');
const stellarUser = require('../models/stellarUser');

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
  stellarUser.findOne({ where: { [Op.or]: [{ username }, { email }] } })
  .then(user => {
    console.log(`User: ${JSON.stringify(user)}`);

    if (user) {
      if (user.username === username) {
        console.log('Username already taken');
        res.send('<script>alert("Username already taken"); window.location="/create-account";</script>'); // show a browser alert and redirect to the create account page
      } else {
        console.log('Email already registered');
        res.send('<script>alert("Email already registered"); window.location="/create-account";</script>'); // show a browser alert and redirect to the create account page
      }
    } else {
      // Create new user in database
      console.log('Before stellarUser.create');
      stellarUser.create({ username, email, password, zipcode, name })
        .then(() => {
          console.log('User created');
          res.redirect('/login'); // redirect to the login page
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
