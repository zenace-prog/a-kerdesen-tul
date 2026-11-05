const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#primary-navigation');

if (menuToggle && navigation) {
  const setMenuOpen = (isOpen) => {
    menuToggle.setAttribute('aria-expanded', String(isOpen));
    menuToggle.setAttribute(
      'aria-label',
      isOpen ? 'Navigáció bezárása' : 'Navigáció megnyitása',
    );
    navigation.classList.toggle('is-open', isOpen);
  };

  menuToggle.addEventListener('click', () => {
    const isOpen = menuToggle.getAttribute('aria-expanded') === 'true';
    setMenuOpen(!isOpen);
  });

  navigation.addEventListener('click', (event) => {
    if (event.target instanceof HTMLAnchorElement) {
      setMenuOpen(false);
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setMenuOpen(false);
      // Az Escape után a fókusz a menügombra kerül, így billentyűzettel folytatható a navigáció.
      menuToggle.focus();
    }
  });
}
