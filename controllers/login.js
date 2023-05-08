const express = require('express');
const router = express.Router();
const User = require('../models/models.js');

router.get('/', (req, res) => {
	res.render('login');
});

router.post('/', (req, res) => {
	const { username, password } = req.body;
  
	User.findOne({ where: { username, password } })
	  .then(user => {
		if (user) {
		  // Set the user object in the session
		  req.session.user = user;
  
		  // Redirect to the dashboard page
		  res.redirect('/dashboard');
		} else {
		  // Return an error message if authentication fails
		  res.status(401).json({ message: 'Invalid username or password' });
		}
	  })
	  .catch(error => {
		console.error('Error:', error);
  
		// Return an error message if there's a server error
		res.status(500).json({ message: 'Internal server error' });
	  });
  });
  

module.exports = router;
