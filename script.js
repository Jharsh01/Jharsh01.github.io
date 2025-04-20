document.addEventListener('DOMContentLoaded', () => {
  const hamburger = document.querySelector('.hamburger');
  const sidePanel = document.getElementById('sidePanel');
  const closeBtn = document.querySelector('.closebtn');

  if (hamburger && sidePanel) {
    hamburger.addEventListener('click', () => {
      sidePanel.classList.toggle('open');
    });
  }

  if (closeBtn && sidePanel) {
    closeBtn.addEventListener('click', () => {
      sidePanel.classList.remove('open');
    });
  }

  const faders = document.querySelectorAll('.fade-in');
  if ('IntersectionObserver' in window) {
    const appearOnScroll = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.1 });

    faders.forEach(fader => appearOnScroll.observe(fader));
  } else {
    faders.forEach(fader => fader.classList.add('visible'));
  }
});
