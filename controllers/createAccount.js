const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
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
        // Create new user in the database
        console.log('Before stellarUser.create');
        stellarUser.create({ username, email, password, zipcode, name })
        .then((createdUser) => {
          console.log(`User created with ID: ${createdUser.id} and password: ${createdUser.password}`);
            res.redirect('/login'); // redirect to the login page
          })
          .catch(error => {
            if (error.errors && error.errors[0].type === 'Validation error' && error.errors[0].path === 'email') {
              console.log('Invalid email');
              res.send('<script>alert("Invalid email"); window.location="/create-account";</script>'); // show a browser alert and redirect to the create account page
            } else {
              console.error(error);
              res.status(500).json({ message: 'Internal server error' });
            }
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
