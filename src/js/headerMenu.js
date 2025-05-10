/*-------------modal script-------------*/
(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-mob-open]'),
    closeModalBtn: document.querySelector('[data-mob-close]'),
    modal: document.querySelector('[data-mob]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-sctoll');
  }
})();

/*-------------burger button------------*/
document.addEventListener('DOMContentLoaded', function () {
  const navIcon = document.getElementById('nav-icon2');

  navIcon.addEventListener('click', function () {
    navIcon.classList.toggle('open');
  });
});

/*-------------home-link------------*/
document.addEventListener('DOMContentLoaded', () => {
  const homeModalLink = document.querySelector('#home-page-link-modal');
  const aboutModalLink = document.querySelector('#about-page-link-modal');
  const implModalLink = document.querySelector('#impl-page-link-modal');
  const updatesModalLink = document.querySelector('#updates-page-link-modal');
  const contactModalLink = document.querySelector('#contact-page-link-modal');
  const aboutLink = document.querySelector('#about-page-link');
  const implLink = document.querySelector('#impl-page-link');
  const updatesLink = document.querySelector('#updates-page-link');
  const contaclLink = document.querySelector('#contact-page-link');

  const filename = window.location.pathname.split('/').pop();
  switch (filename) {
    case 'index.html':
      homeModalLink.style.display = 'none';
      break;
    case 'about.html':
      aboutModalLink.classList.add('active-page');
      aboutLink.classList.add('heading');
      break;

    case 'implementation.html':
      implModalLink.classList.add('active-page');
      implLink.classList.add('heading');
      break;

    case 'updates.html':
      updatesModalLink.classList.add('active-page');
      updatesLink.classList.add('heading');
      break;
    case 'contact.html':
      contactModalLink.classList.add('active-page');
      contaclLink.classList.add('heading');
      break;

    default:
  }
});
