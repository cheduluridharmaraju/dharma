// script.js — small reusable helpers
// Features included (activate automatically when corresponding elements exist):
// - Mobile nav toggle (.nav-toggle toggles .nav-menu)
// - Sticky header (adds .sticky to <header> when scrolling)
// - Back-to-top button (#toTop)
// - Cookie consent banner (auto-insert unless consent exists)
// - Simple form validation (forms with .validate class)
// - Lazy-load images using data-src

document.addEventListener('DOMContentLoaded', () => {
  // Mobile nav toggle
  const navToggle = document.querySelector('.nav-toggle');
  const navMenu = document.querySelector('.nav-menu');
  if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
      const expanded = navToggle.getAttribute('aria-expanded') === 'true';
      navToggle.setAttribute('aria-expanded', String(!expanded));
      navMenu.classList.toggle('is-open');
    });
  }

  // Sticky header
  const header = document.querySelector('header');
  if (header) {
    const onScroll = () => header.classList.toggle('sticky', window.scrollY > 50);
    window.addEventListener('scroll', onScroll);
    onScroll();
  }

  // Back-to-top button
  const up = document.getElementById('toTop');
  if (up) {
    const show = () => up.classList.toggle('visible', window.scrollY > 300);
    window.addEventListener('scroll', show);
    show();
    up.addEventListener('click', (e) => {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // Cookie consent banner
  if (!localStorage.getItem('cookies_ok')) {
    if (!document.querySelector('.cookie-banner')) {
      const el = document.createElement('div');
      el.className = 'cookie-banner';
      el.innerHTML = `We use cookies to improve your experience. <button class="cookie-accept">Accept</button>`;
      document.body.appendChild(el);
      el.querySelector('.cookie-accept').addEventListener('click', () => {
        localStorage.setItem('cookies_ok', '1');
        el.remove();
      });
    }
  }

  // Simple form validation for forms with .validate
  document.addEventListener('submit', (e) => {
    const form = e.target;
    if (!form || !form.matches || !form.matches('.validate')) return;
    const email = form.querySelector('input[type="email"]');
    if (email && !/^\S+@\S+\.\S+$/.test(email.value)) {
      e.preventDefault();
      email.focus();
      alert('Please enter a valid email address.');
    }
  });

  // Lazy-load images (data-src)
  const imgs = document.querySelectorAll('img[data-src]');
  if (imgs.length) {
    if ('IntersectionObserver' in window) {
      const io = new IntersectionObserver((entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.removeAttribute('data-src');
            obs.unobserve(img);
          }
        });
      });
      imgs.forEach(i => io.observe(i));
    } else {
      imgs.forEach(i => { i.src = i.dataset.src; i.removeAttribute('data-src'); });
    }
  }
});
