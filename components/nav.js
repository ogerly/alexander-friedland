// components/nav.js
import { $, on } from '../utils/dom.js';

export function initNav() {
  const nav = $('#mainNav');
  const hamburger = $('#hamburger');
  const mobileNav = $('#mobileNav');
  const mobileNavClose = $('#mobileNavClose');

  // Scroll effect
  let lastScroll = 0;
  window.addEventListener('scroll', () => {
    const y = window.scrollY;
    if (y > 80) {
      nav.style.background = 'rgba(7,9,15,0.97)';
      nav.style.borderBottomColor = 'rgba(201,162,39,0.25)';
    } else {
      nav.style.background = 'rgba(7,9,15,0.85)';
      nav.style.borderBottomColor = 'rgba(201,162,39,0.15)';
    }
    lastScroll = y;
  }, { passive: true });

  // Mobile toggle
  on(hamburger, 'click', () => {
    mobileNav.classList.add('open');
    hamburger.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  });

  const closeNav = () => {
    mobileNav.classList.remove('open');
    hamburger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };

  on(mobileNavClose, 'click', closeNav);

  // Close mobile nav on link click
  mobileNav.querySelectorAll('a').forEach(link => {
    on(link, 'click', closeNav);
  });
}
