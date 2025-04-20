document.addEventListener('DOMContentLoaded', () => {
  // Handle hamburger menu
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  // Handle fade-in animations
  const faders = document.querySelectorAll('.fade-in');

  if ('IntersectionObserver' in window) {
    const appearOnScroll = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, {
      threshold: 0.1
    });

    faders.forEach(fader => {
      appearOnScroll.observe(fader);
    });
  } else {
    // fallback for older browsers
    faders.forEach(fader => fader.classList.add('visible'));
  }
});
