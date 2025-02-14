import Swiper from 'swiper/bundle';

import 'swiper/css/bundle';
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
/*--------------------------------------*/

/*=======================Swiper Projects======================*/
const swiperProject = new Swiper('.projectSwiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  autoHeight: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
});
