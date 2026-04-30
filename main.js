// FAQ Accordion
document.querySelectorAll('.accordion-trigger').forEach(btn => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    
    // Close all other accordions
    document.querySelectorAll('.accordion-trigger').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
      b.nextElementSibling.classList.remove('open');
    });
    
    // Open the clicked one if it was closed
    if (!expanded) {
      btn.setAttribute('aria-expanded', 'true');
      btn.nextElementSibling.classList.add('open');
    }
  });
});

// AOS (scroll animations)
const observer = new IntersectionObserver((entries) => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.15 });
document.querySelectorAll('[data-aos]').forEach(el => observer.observe(el));

// Nav scroll effect
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.nav');
  if (window.scrollY > 10) {
    nav.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    nav.style.borderBottom = '1px solid var(--border)';
  } else {
    nav.style.boxShadow = 'none';
  }
});

// Smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

// Mobile menu toggle
const menuToggle = document.getElementById('menuToggle');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const links = document.querySelector('.nav-links');
    const isOpen = links.style.display === 'flex';
    if (isOpen) {
      links.style.display = '';
    } else {
      links.style.cssText = 'display:flex;flex-direction:column;position:absolute;top:4rem;left:0;right:0;background:var(--background);padding:1.5rem;gap:1rem;border-bottom:1px solid var(--border);z-index:99;box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1)';
    }
  });
}
