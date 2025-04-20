document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const navLinks = document.getElementById('nav-links');
  const sidePanel = document.getElementById('sidePanel');

  if (hamburger && sidePanel) {
    hamburger.addEventListener('click', () => {
      sidePanel.classList.toggle('open');
    });
  }

  // Close side panel when a link is clicked
  const sideLinks = sidePanel?.querySelectorAll('a');
  sideLinks?.forEach(link => {
    link.addEventListener('click', () => {
      sidePanel.classList.remove('open');
    });
  });

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
