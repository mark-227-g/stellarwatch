const form = document.getElementById('create-account-form');
form.addEventListener('submit', event => {
	event.preventDefault();
	const data = new FormData(form);
	console.log('Received form data:');
	for (const [name, value] of data.entries()) {
		console.log(`${name}: ${value}`);
	}
	const username = data.get('username');
	const email = data.get('email');
	const password = data.get('password');
	const confirmPassword = data.get('confirm-password');
	const name = data.get('name');
	const zipcode = data.get('zipcode');

	// check if passwords match
	if (password !== confirmPassword) {
		alert('Passwords do not match. Please try again.');
		return;
	}

	// Create account if username and email are unique
	fetch('/create-account', {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({ username, email, password, name, zipcode })
	})
		.then(response => response.json())
		.then(data => {
			if (data.success) {
				alert('Account creation successful!');
				window.location.href = '/login';
			} else {
				alert('Account creation failed. Please try again.');
			}
		})
		.catch(error => console.error(error));
});
