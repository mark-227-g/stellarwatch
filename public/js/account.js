const form = document.getElementById('create-account-form');
		form.addEventListener('submit', event => {
			event.preventDefault();
			const data = new FormData(form);
			const username = data.get('username');
			const email = data.get('email');
			const password = data.get('password');
			const confirmPassword = data.get('confirm-password');

			// check if passwords match
			if (password !== confirmPassword) {
				alert('Passwords do not match. Please try again.');
				return;
			}

			// check if username and email are unique
			fetch(`/create-account/check-unique?username=${username}&email=${email}`)
				.then(response => response.json())
				.then(data => {
					
					if (!data.username && !data.email) {
						console.log("CREATING ACCOUNT " + username);
					console.log("CREATING ACCOUNT " + email);
					console.log("CREATING ACCOUNT " + password);
						// Create account if username and email are unique
						
						fetch('/create-account', {
							method: 'POST',
							headers: { 'Content-Type': 'application/json' },
							body: JSON.stringify({ username,email, password })
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
					} else if (!data.username) {
						console.log("DATA.USERNAME " + data.username);
						alert('Username is already taken. Please choose a different username.');
					} else if (!data.email) {
						alert('Email is already registered. Please use a different email address or login using that email address.');
					}
				})
				.catch(error => console.error(error));
		});