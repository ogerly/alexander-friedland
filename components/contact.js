// components/contact.js
import { $ } from '../utils/dom.js';

const CONTACT_EMAIL = 'devmatrose@proton.me';

export function initContact() {
  const formEl = $('#contactForm');
  const statusEl = $('#formStatus');

  if (!formEl || !statusEl) return;

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();

    if (formEl.checkValidity()) {
      const name = $('#fieldName').value.trim();
      const email = $('#fieldEmail').value.trim();
      const type = $('#fieldType').value;
      const msg = $('#fieldMsg').value.trim();

      const subject = encodeURIComponent('Projektanfrage: ' + (type || 'Allgemein'));
      const body = encodeURIComponent(
        'Name: ' + name + '\n' +
        'E-Mail: ' + email + '\n' +
        'Projekttyp: ' + (type || '—') + '\n\n' +
        msg
      );

      window.location.href = 'mailto:' + CONTACT_EMAIL + '?subject=' + subject + '&body=' + body;

      statusEl.style.color = 'var(--gold)';
      statusEl.textContent = '→ E-Mail-Client wird geöffnet…';
      statusEl.style.display = 'block';
    } else {
      const firstInvalid = formEl.querySelector(':invalid');
      if (firstInvalid) firstInvalid.focus();

      statusEl.style.color = '#e05a5a';
      statusEl.textContent = '→ Bitte alle Pflichtfelder ausfüllen.';
      statusEl.style.display = 'block';
    }
  });
}
