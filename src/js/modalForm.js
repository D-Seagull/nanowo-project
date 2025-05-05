/*=============modal Contact From===========================*/
const body = document.querySelector('body');
const modal = document.querySelector('.modal');
const modalOverlay = document.querySelector('.modal__overlay');
const openModalBtns = document.querySelectorAll('[data-open-modal]');
const closeModalBtn = document.querySelector('[data-close-modal]');
document.addEventListener('DOMContentLoaded', () => {
  openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      modal?.classList.add('is-open');
      body?.classList.add('no-scroll');
    });
  });

  closeModalBtn?.addEventListener('click', () => {
    closeModal();
  });

  modalOverlay?.addEventListener('click', evt => {
    if (evt.target === modalOverlay) {
      closeModal();
    }
  });

  document.addEventListener('keydown', evt => {
    if (evt.key === 'Escape' && modal.classList.contains('is-open')) {
      closeModal();
    }
  });
});

export const closeModal = () => {
  modal?.classList.remove('is-open');
  body?.classList.remove('no-scroll');
};
