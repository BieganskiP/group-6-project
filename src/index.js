import './sass/main.scss';

(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-mobile-open]'),
    closeModalBtn: document.querySelector('[data-modal-mobile-close]'),
    modal: document.querySelector('[data-modal-mobile]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden-mobile');
  }
})();

(() => {
  const refs = {
    openModalBtn2: document.querySelector('[data-modal-tablet-open]'),
    closeModalBtn2: document.querySelector('[data-modal-tablet-close]'),
    modal2: document.querySelector('[data-modal-tablet]'),
  };

  refs.openModalBtn2.addEventListener('click', toggleModal2);
  refs.closeModalBtn2.addEventListener('click', toggleModal2);

  function toggleModal2() {
    refs.modal2.classList.toggle('is-hidden-tablet');
  }
})();
