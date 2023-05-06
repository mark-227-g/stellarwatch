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
				req.session.user = user;
				res.redirect('/dashboard');
			} else {
				res.status(401).json({ message: 'Invalid username or password' });
			}
		})
		.catch(error => {
			console.error(error);
			res.status(500).json({ message: 'Internal server error' });
		});
});

module.exports = router;
