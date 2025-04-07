import './styles/style.scss';

// Validación del formulario
document.addEventListener('DOMContentLoaded', function() {
  const emailInput = document.getElementById('email');
  const errorMessage = document.querySelector('.footer__error-message');
  const form = document.querySelector('.footer__form');

  // Función para validar el email
  function validateEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  // Evento input para validar email en tiempo real
  emailInput.addEventListener('input', function() {
    const isValid = validateEmail(this.value);
    
    if (this.value && !isValid) {
      this.classList.add('invalid');
      errorMessage.style.display = 'block';
    } else {
      this.classList.remove('invalid');
      errorMessage.style.display = 'none';
    }
  });

  // Validar al enviar el formulario
  form.addEventListener('submit', function(e) {
    if (emailInput.value && !validateEmail(emailInput.value)) {
      e.preventDefault();
      emailInput.classList.add('invalid');
      errorMessage.style.display = 'block';
      emailInput.focus();
    }
  });
});