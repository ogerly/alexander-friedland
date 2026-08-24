// components/compass.js — subtle pointer-parallax for the hero compass
export function initCompassParallax() {
  const compass = document.querySelector('.hero-compass');
  const hero = document.querySelector('.hero');
  if (!compass || !hero) return;

  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reduceMotion) return;

  // Skip on touch/small screens — no pointer to react to, keep it static.
  if (window.matchMedia('(hover: none)').matches) return;

  let targetX = 0;
  let targetY = 0;
  let currentX = 0;
  let currentY = 0;
  let ticking = false;

  const maxShift = 18; // px

  const render = () => {
    currentX += (targetX - currentX) * 0.06;
    currentY += (targetY - currentY) * 0.06;
    compass.style.translate = `${currentX}px calc(-50% + ${currentY}px)`;

    if (Math.abs(targetX - currentX) > 0.05 || Math.abs(targetY - currentY) > 0.05) {
      requestAnimationFrame(render);
    } else {
      ticking = false;
    }
  };

  hero.addEventListener('pointermove', (e) => {
    const rect = hero.getBoundingClientRect();
    const relX = (e.clientX - rect.left) / rect.width - 0.5;
    const relY = (e.clientY - rect.top) / rect.height - 0.5;
    targetX = relX * maxShift;
    targetY = relY * maxShift;

    if (!ticking) {
      ticking = true;
      requestAnimationFrame(render);
    }
  });

  hero.addEventListener('pointerleave', () => {
    targetX = 0;
    targetY = 0;
    if (!ticking) {
      ticking = true;
      requestAnimationFrame(render);
    }
  });
}
