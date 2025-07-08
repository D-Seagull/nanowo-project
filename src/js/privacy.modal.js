document.addEventListener('DOMContentLoaded', () => {
  const body = document.querySelector('body');
  const privacyModal = document.querySelector('.privacy-modal');
  const privacyModalOverlay = document.querySelector('.privacy-modal__overlay');
  const closePrivacyModalBtn = document.querySelector('[data-close-privacy-modal]');
  const openPrivacyModalBtns = document.querySelectorAll('[data-open-privacy-modal]');

  if (!privacyModal) return;

  openPrivacyModalBtns.forEach(btn => {
    btn.addEventListener('click', event => {
      event.preventDefault();
      privacyModal.classList.add('is-open');
      body?.classList.add('no-scroll');
    });
  });

  closePrivacyModalBtn?.addEventListener('click', () => {
    closePrivacyModal(privacyModal, body);
  });

  privacyModalOverlay?.addEventListener('click', evt => {
    if (evt.target === privacyModalOverlay) {
      closePrivacyModal(privacyModal, body);
    }
  });

  document.addEventListener('keydown', evt => {
    if (evt.key === 'Escape' && privacyModal.classList.contains('is-open')) {
      closePrivacyModal(privacyModal, body);
    }
  });
});

function closePrivacyModal(modal, bodyEl) {
  modal?.classList.remove('is-open');
  bodyEl?.classList.remove('no-scroll');
}
