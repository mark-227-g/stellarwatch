fetch('https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY')
				.then(response => response.json())
				.then(data => {
					const image = document.createElement('img');
					image.src = data.url;
					image.alt = data.title;
					document.querySelector('.nasa-image').appendChild(image);
					document.querySelector('.nasa-title').textContent = data.title;
				})
				.catch(error => {
					console.error(error);
					document.querySelector('.nasa-image').textContent = 'Error loading image';
				});