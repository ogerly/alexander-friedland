// components/hero.js
import { $ } from '../utils/dom.js';

export function initHero() {
  const dot = $('#cursorDot');

  // Cursor dot (desktop only)
  if (window.matchMedia('(pointer: fine)').matches) {
    let mouseX = 0, mouseY = 0;
    let isQueued = false;

    const updateCursor = () => {
      dot.style.left = mouseX + 'px';
      dot.style.top = mouseY + 'px';
      isQueued = false;
    };

    document.addEventListener('mousemove', e => {
      dot.style.opacity = '1';
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (!isQueued) {
        isQueued = true;
        requestAnimationFrame(updateCursor);
      }
    });

    document.addEventListener('mouseleave', () => {
      dot.style.opacity = '0';
    });
  } else {
    dot.style.display = 'none';
  }

  // Scroll line animation
  const scrollLine = $('.hero-scroll');
  if (scrollLine) {
    scrollLine.classList.add('animate-scroll-line');
  }
}
