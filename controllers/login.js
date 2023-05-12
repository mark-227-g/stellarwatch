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
        // Compare the password using bcrypt
        bcrypt.compare(password, user.password)
          .then(match => {
            if (match) {
              // Set the user object in the session
              req.session.user = user;
              req.session.currentUserId = user.id; // Set the currentUserId in the session

              // Redirect to the dashboard page
              res.redirect('/event');
            } else {
              // Return an error message if authentication fails
              res.send('<script>alert("Invalid username or password"); window.location="/login";</script>'); // show a browser alert and redirect to the login page
            }
          })
          .catch(error => {
            console.error('Error:', error);

            // Return an error message if there's a server error
            res.status(500).json({ message: 'Internal server error' });
          });
      } else {
        // Return an error message if authentication fails
        res.send('<script>alert("Invalid username or password"); window.location="/login";</script>'); // show a browser alert and redirect to the login page
      }
    })
    .catch(error => {
      console.error('Error:', error);

      // Return an error message if there's a server error
      res.status(500).json({ message: 'Internal server error' });
    });
});

module.exports = router;
