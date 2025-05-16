onload = () => {
    const c = setTimeout(() => {
      document.body.classList.remove("not-loaded");
      clearTimeout(c);
    }, 1000);
  };

  const heartsContainer = document.querySelector('.hearts-container');

function createHeart() {
  const heart = document.createElement('div');
  heart.classList.add('heart');
  heart.style.left = `${Math.random() * 100}vw`; // Random horizontal position
  heart.style.animationDuration = `${Math.random() * 3 + 2}s`; // Random animation duration
  heartsContainer.appendChild(heart);

  // Remove the heart after animation ends
  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Generate hearts at intervals
setInterval(createHeart, 300);