// write js code if required
// Get the image element by its ID
const image = document.getElementById('flip');

// Define the original and hover images
const initialImage = 'https://images.pexels.com/photos/6785279/pexels-photo-6785279.jpeg';
const hoverImage = 'https://live.staticflickr.com/8138/29099429912_0659caf55b_b.jpg';

// Set the initial image src
image.src = initialImage;

// Change the image when the user hovers over it
image.addEventListener('mouseover', () => {
  image.src = hoverImage;
});

// Change the image back when the user stops hovering
image.addEventListener('mouseout', () => {
  image.src = initialImage;
});
