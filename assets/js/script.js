  // assets/js/script.js

document.addEventListener('DOMContentLoaded', () => {
    const fadeElements = document.querySelectorAll('.fade-in');
    fadeElements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.3}s`;
      el.classList.add('visible');
    });
  
    // Create floating shapes
    const numShapes = 8;
    const container = document.body;
  
    for (let i = 0; i < numShapes; i++) {
      const shape = document.createElement('div');
      shape.classList.add('floating-shape');
      shape.style.top = `${Math.random() * 100}vh`;
      shape.style.left = `${Math.random() * 100}vw`;
      container.appendChild(shape);
    }
  
    // Track mouse
    document.addEventListener('mousemove', (e) => {
      document.querySelectorAll('.floating-shape').forEach((shape, index) => {
        const speed = (index + 1) * 0.02;
        shape.style.transform = `translate(${e.clientX * speed}px, ${e.clientY * speed}px)`;
      });
    });
  });
  