document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }

  // Fade-in animation
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
    faders.forEach(fader => fader.classList.add('visible'));
  }
});
