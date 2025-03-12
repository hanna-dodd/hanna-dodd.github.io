  // assets/js/script.js

document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.3}s`;
      el.classList.add('visible');
    });
  });
  