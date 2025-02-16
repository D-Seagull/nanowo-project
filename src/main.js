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
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
/*============================================================*/

// * * * Page Loading animation

const navMenu = document.querySelector('.nav-menu');
const aboutLink = document.querySelector('.nav-menu-item');
const loader = document.querySelector('.loader');
const loaderTitle = document.querySelector('.loader-title');

const handleClick = event => {
  event.preventDefault();

  const target = event.target;

  if (target.nodeName !== 'A') {
    return;
  }

  loader.classList.add('is-open');
  loaderTitle.classList.add('is-open');

  const href = target.href;
  setTimeout(() => {
    loader.classList.remove('is-open');
    loaderTitle.classList.remove('is-open');
    window.location.href = href;
  }, 2000);
};

navMenu.addEventListener('click', handleClick);
