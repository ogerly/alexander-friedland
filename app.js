// app.js — Entry Point

import { initNav } from './components/nav.js';
import { initHero } from './components/hero.js';
import { initReveal, initGridReveal } from './components/reveal.js';
import { initContact } from './components/contact.js';

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initHero();
  initReveal();
  initGridReveal('.services-grid, .projects-grid, .identity-layers, .stat-row');
  initContact();
});
