// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(btn => {
  btn.addEventListener('click', () => {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    document.querySelectorAll('.faq-question').forEach(b => {
      b.setAttribute('aria-expanded', 'false');
      b.nextElementSibling.classList.remove('open');
    });
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
  document.querySelector('.nav').style.boxShadow =
    window.scrollY > 10 ? '0 4px 32px rgba(0,0,0,0.4)' : 'none';
});

// Smooth anchor scroll
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', e => {
    const target = document.querySelector(a.getAttribute('href'));
    if (target) { e.preventDefault(); target.scrollIntoView({ behavior: 'smooth', block: 'start' }); }
  });
});

// Mobile menu toggle (simple show/hide)
const menuToggle = document.getElementById('menuToggle');
if (menuToggle) {
  menuToggle.addEventListener('click', () => {
    const links = document.querySelector('.nav-links');
    const isOpen = links.style.display === 'flex';
    links.style.cssText = isOpen ? '' : 'display:flex;flex-direction:column;position:absolute;top:68px;left:0;right:0;background:rgba(5,5,8,0.98);padding:24px;gap:16px;border-bottom:1px solid rgba(255,255,255,0.08);z-index:99';
  });
}
