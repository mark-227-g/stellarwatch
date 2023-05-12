const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const stellarUser = require('../models/stellarUser.js');

router.get('/', (req, res) => {
  res.render('login');
});

router.post('/', (req, res) => {
  const { username, password } = req.body;

  stellarUser.findOne({ where: { username } })
    .then(user => {
      if (user) {
        console.log(`Found user with ID: ${user.id} and hashed password: ${user.password}`);
        // Compare the password using bcrypt
        bcrypt.compare(password, user.password)
          .then(match => {
            console.log(`Passwords match: ${match}`);
            if (match) {
              // Passwords match
              req.session.user = user;
              req.session.currentUserId = user.id;
              res.redirect('/event');
            } else {
              // Passwords don't match
              res.send('<script>alert("Invalid username or password"); window.location="/login";</script>');
            }
          })
          .catch(error => {
            console.error('Error:', error);
            res.status(500).json({ message: 'Internal server error' });
          });
      } else {
        // User not found
        res.send('<script>alert("User not found"); window.location="/login";</script>');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      res.status(500).json({ message: 'Internal server error' });
    });
});

module.exports = router;
