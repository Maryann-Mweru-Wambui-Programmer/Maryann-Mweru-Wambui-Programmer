const images = document.querySelectorAll('.album img');
const container = document.querySelector('.container');

// Function to animate images towards the center
function animateImages() {
  images.forEach((img, index) => {
    img.style.transition = 'all 2s ease';
    img.style.opacity = 1;

    // Calculate the position of the center of the container
    const centerX = container.offsetWidth / 2;
    const centerY = container.offsetHeight / 2;

    // Calculate the initial position of the image
    const initialX = Math.random() * container.offsetWidth;
    const initialY = Math.random() * (container.offsetHeight - 200); // Exclude bottom right side

    // Calculate the distance between initial and final position
    const deltaX = centerX - initialX;
    const deltaY = centerY - initialY;

    // Set the initial position of the image
    img.style.left = `${initialX}px`;
    img.style.top = `${initialY}px`;

    // Set the final position of the image (center of the container)
    setTimeout(() => {
      img.style.left = `${centerX - img.offsetWidth / 2}px`;
      img.style.top = `${centerY - img.offsetHeight / 2}px`;
      img.style.transform = 'scale(2)';
    }, index * 200); // Adjust the delay between each image
  });
}

// Function to display one image at a time in full screen
function showNextImage() {
  images.forEach(img => {
    img.style.opacity = 0;
    img.style.transform = 'scale(0.5)';
  });

  images[currentImageIndex].style.opacity = 1;
  images[currentImageIndex].style.transform = 'scale(1.5)';
  images[currentImageIndex].style.left = '0';
  images[currentImageIndex].style.top = '0';
  images[currentImageIndex].style.width = '100%';
  images[currentImageIndex].style.height = '100%';

  currentImageIndex++;
  if (currentImageIndex >= images.length) {
    currentImageIndex = 0;
  }
}

let currentImageIndex = 0;
animateImages(); // Start the animation
setInterval(showNextImage, 3000); // Display one image at a time
