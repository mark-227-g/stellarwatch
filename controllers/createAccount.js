const express = require('express');
const router = express.Router();
const User = require('../models/models');

// Route to render the create account page
router.get('/', (req, res) => {
  res.render('createaccount');
});

// Route to check if username and email are unique
router.get('/check-unique', (req, res) => {
  const { username, email } = req.query;
  
  User.findOne({ where: { $or: [{ username }, { email }] } })
    .then(user => {
      if (user) {
        if (user.username === username) {
          res.json({ username: true });
        } else {
          res.json({ email: true });
        }
      } else {
        res.json({ username: false, email: false, actualEmail: email });
      }
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    });
});

// Route to create a new account
router.post('/', (req, res) => {
  const { username, email, password } = req.body;
  console.log("REQUEST BODY" + req.body.username);
console.log("here" + req.body.email);
  // Check if username and email are unique
  User.findOne({ where:  { email: req.body.email } } )
    .then(user => {
      if (user) {
        if (user.username === username) {
          res.status(409).json({ message: 'Username already taken' });
        } else {
          res.status(409).json({ message: 'Email already registered' });
        }
      } else {
        // Create new user in database
		console.log("username:", username);
        User.create({ username, name, zipcode, email, password })
          .then(() => {
            res.json({ message: 'Account created successfully' });
          })
          .catch(error => {
            console.error(error);
            res.status(500).json({ message: 'Internal server error' });
          });
      }
    })
    .catch(error => {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    });
});

module.exports = router;
