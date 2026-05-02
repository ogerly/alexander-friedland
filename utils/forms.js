// utils/forms.js
export function setupValidation(formEl, onSuccess) {
  formEl.setAttribute('novalidate', '');

  formEl.addEventListener('submit', (e) => {
    e.preventDefault();
    if (formEl.checkValidity()) {
      onSuccess(Object.fromEntries(new FormData(formEl)));
    } else {
      formEl.querySelector(':invalid').focus();
    }
  });

  formEl.querySelectorAll('input, select, textarea').forEach(input => {
    input.addEventListener('blur', () => {
      input.classList.toggle('is-invalid', !input.checkValidity());
      const msg = input.validity.valueMissing
        ? input.dataset.errorRequired
        : input.dataset.errorInvalid;
      input.setCustomValidity(msg ?? '');
    });
  });
}
