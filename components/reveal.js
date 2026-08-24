// components/reveal.js
export function initReveal() {
  const reveals = document.querySelectorAll('.reveal');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

  reveals.forEach(el => observer.observe(el));
}

export function initGridReveal(containerSelector, staggerDelay = 0.07) {
  const containers = document.querySelectorAll(containerSelector);

  containers.forEach(container => {
    const cards = container.querySelectorAll('.project-card, .cv-item, .blog-entry, .channel');
    cards.forEach((card, i) => {
      card.style.opacity = '0';
      card.style.transform = 'translateY(16px)';
      card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
      card.style.transitionDelay = (i * staggerDelay) + 's';
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.querySelectorAll('.project-card, .cv-item, .blog-entry, .channel').forEach(card => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          });
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });

    observer.observe(container);
  });
}
