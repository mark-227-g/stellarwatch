document.addEventListener('DOMContentLoaded', () => {
	const nasaImage = document.querySelector('#nasa-image');
	const nasaTitle = document.querySelector('.nasa-title');
  
	fetch('https://api.nasa.gov/planetary/apod?api_key=OD0qF5NTV5kD4eE0fvvCLVFCIfJ4cz8wAGE9h5aO')
	  .then(response => response.json())
	  .then(data => {
		const image = document.createElement('img');
		image.src = data.url;
		image.alt = data.title;
		nasaImage.appendChild(image);
		nasaTitle.textContent = data.title;
	  })
	  .catch(error => {
		console.error(error);
		nasaImage.textContent = 'Error loading image';
	  });
});
