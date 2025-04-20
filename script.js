document.addEventListener('DOMContentLoaded', () => {
  // Fade-in on scroll
  const faders = document.querySelectorAll('.fade-in');
  const appearOnScroll = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  }, {
    threshold: 0.1,
  });
  faders.forEach(fader => appearOnScroll.observe(fader));

  // Hamburger menu toggle
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.getElementById('nav-links');

  if (hamburger && navLinks) {
    hamburger.addEventListener('click', () => {
      navLinks.classList.toggle('show');
    });
  }
});
