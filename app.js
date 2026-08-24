// app.js — Entry Point

import { initNav } from './components/nav.js';
import { initHero } from './components/hero.js';
import { initReveal, initGridReveal } from './components/reveal.js';
import { initContact } from './components/contact.js';

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initHero();
  initReveal();
  initGridReveal('.blog-grid, .video-grid, .cv-timeline, .contact-channels');
  initContact();
});
