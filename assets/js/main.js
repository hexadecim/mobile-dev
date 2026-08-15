(function () {
  var navToggle = document.querySelector('.nav-toggle');
  if (navToggle) {
    navToggle.addEventListener('click', function () {
      var isOpen = document.body.classList.toggle('nav-open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  var dropdown = document.querySelector('.nav-dropdown');
  if (dropdown) {
    var dropdownToggle = dropdown.querySelector('.nav-dropdown-toggle');
    dropdownToggle.addEventListener('click', function (event) {
      event.stopPropagation();
      var isOpen = dropdown.classList.toggle('open');
      dropdownToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    document.addEventListener('click', function (event) {
      if (!dropdown.contains(event.target)) {
        dropdown.classList.remove('open');
        dropdownToggle.setAttribute('aria-expanded', 'false');
      }
    });
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape') {
        dropdown.classList.remove('open');
        dropdownToggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  var contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (event) {
      event.preventDefault();
      var status = document.querySelector('#form-status');
      if (status) {
        status.textContent = 'Thanks! Your message has been recorded. Our team will reply within one business day.';
        status.hidden = false;
      }
      contactForm.reset();
    });
  }

  var yearEl = document.querySelector('#year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
})();
