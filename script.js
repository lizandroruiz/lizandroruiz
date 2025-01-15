let currentIndex = 0;

// Grab the slider element
const slider = document.querySelector('.slider');

// Add event listeners for touch/mouse gestures
let startX = 0;

document.addEventListener('touchstart', (e) => {
  startX = e.touches[0].clientX;
});

document.addEventListener('touchend', (e) => {
  const endX = e.changedTouches[0].clientX;
  handleSwipe(endX - startX);
});

document.addEventListener('mousedown', (e) => {
  startX = e.clientX;
});

document.addEventListener('mouseup', (e) => {
  const endX = e.clientX;
  handleSwipe(endX - startX);
});

// Handle swipe logic
function handleSwipe(distance) {
  if (distance > 50) {
    // Swipe right
    currentIndex = Math.max(currentIndex - 1, 0);
  } else if (distance < -50) {
    // Swipe left
    currentIndex = Math.min(currentIndex + 1, 2); // Maximum index is 2
  }

  slider.style.transform = `translateX(-${currentIndex * 100}vw)`;
}
