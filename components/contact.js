// components/contact.js
import { $ } from '../utils/dom.js';

const FORM_ENDPOINT = 'https://formspree.io/f/xqkrvpng';

export function initContact() {
  const formEl = $('#contactForm');
  const statusEl = $('#formStatus');
  const submitBtn = $('#formSubmit');

  if (!formEl || !statusEl || !submitBtn) return;

  formEl.addEventListener('submit', async (e) => {
    e.preventDefault();

    if (formEl.checkValidity()) {
      submitBtn.disabled = true;
      submitBtn.textContent = '→ Senden…';

      try {
        const formData = new FormData(formEl);
        const response = await fetch(FORM_ENDPOINT, {
          method: 'POST',
          body: formData,
          headers: { 'Accept': 'application/json' }
        });

        if (response.ok) {
          statusEl.style.color = 'var(--gold)';
          statusEl.textContent = '→ Anfrage gesendet! Ich melde mich.';
          statusEl.style.display = 'block';
          formEl.reset();
        } else {
          statusEl.style.color = '#e05a5a';
          statusEl.textContent = '→ Fehler beim Senden. Bitte versuche es später.';
          statusEl.style.display = 'block';
        }
      } catch (err) {
        statusEl.style.color = '#e05a5a';
        statusEl.textContent = '→ Netzwerkfehler. Bitte versuche es später.';
        statusEl.style.display = 'block';
      } finally {
        submitBtn.disabled = false;
        submitBtn.textContent = 'Anfrage senden →';
      }
    } else {
      const firstInvalid = formEl.querySelector(':invalid');
      if (firstInvalid) firstInvalid.focus();

      statusEl.style.color = '#e05a5a';
      statusEl.textContent = '→ Bitte alle Pflichtfelder ausfüllen.';
      statusEl.style.display = 'block';
    }
  });
}
