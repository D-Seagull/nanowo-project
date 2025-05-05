/*=============modal Contact From===========================*/
document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const modal = document.querySelector('.modal');
  const modalOverlay = document.querySelector('.modal__overlay');
  const openModalBtns = document.querySelectorAll('[data-open-modal]');
  const closeModalBtn = document.querySelector('[data-close-modal]');
  const form = document.querySelector('.contact-form');

  // Відкриття модального вікна з будь-якої кнопки
  openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modal?.classList.add('is-open');
      body?.classList.add('no-scroll');
    });
  });

  // Закриття модалки по кнопці "×"
  closeModalBtn?.addEventListener('click', () => {
    closeModal();
  });

  // Закриття при кліку на overlay (порожнє місце навколо)
  modalOverlay?.addEventListener('click', e => {
    if (e.target === modalOverlay) {
      closeModal();
    }
  });

  // Закриття при натисканні ESC
  document.addEventListener('keydown', e => {
    if (e.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });

  // Закриття після відправки форми
  form?.addEventListener('submit', e => {
    e.preventDefault();
    console.log('Form submitted');
    closeModal();
  });

  // Функція закриття
  function closeModal() {
    modal?.classList.remove('is-open');
    body?.classList.remove('no-scroll');
  }
});
