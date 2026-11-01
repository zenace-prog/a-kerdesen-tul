const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-navigation');
const contactForm = document.querySelector('.contact-form');

if (contactForm) {
  const submitButton = contactForm.querySelector('button[type="submit"]');
  const statusMessage = contactForm.querySelector('.form-status');

  if (submitButton && statusMessage) {
    contactForm.addEventListener('submit', async (event) => {
      event.preventDefault();
      statusMessage.textContent = '';
      statusMessage.removeAttribute('data-state');

      const originalButtonText = submitButton.textContent;
      submitButton.textContent = 'Küldés...';
      submitButton.disabled = true;

      try {
        const response = await fetch('https://api.web3forms.com/submit', {
          method: 'POST',
          body: new FormData(contactForm),
        });
        const result = await response.json();

        if (!response.ok || !result.success) {
          statusMessage.textContent =
            typeof result.message === 'string'
              ? `Hiba: ${result.message}`
              : 'Nem sikerült elküldeni az üzenetet. Kérjük, próbáld újra.';
          statusMessage.dataset.state = 'error';
          return;
        }

        window.location.assign('kapcsolat-koszonjuk.html');
      } catch (error) {
        console.error('A kapcsolatfelvételi űrlap beküldése sikertelen.', error);
        statusMessage.textContent =
          'Nem sikerült elküldeni az üzenetet. Ellenőrizd az internetkapcsolatot, majd próbáld újra.';
        statusMessage.dataset.state = 'error';
      } finally {
        submitButton.textContent = originalButtonText;
        submitButton.disabled = false;
      }
    });
  }
}

if (menuToggle && navigation) {
  const closeMenu = () => {
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Navigáció megnyitása');
    navigation.classList.remove('is-open');
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    menuToggle.setAttribute('aria-expanded', String(!isOpen));
    menuToggle.setAttribute(
      'aria-label',
      isOpen ? 'Navigáció megnyitása' : 'Navigáció bezárása',
    );
    navigation.classList.toggle('is-open', !isOpen);
  });

  navigation.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      closeMenu();
      menuToggle.focus();
    }
  });
}
