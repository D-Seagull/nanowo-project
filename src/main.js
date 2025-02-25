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
    el: '.project-pagination.swiper-pagination',
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});
/*============================================================*/

/*=======================SwiperReviews======================*/
const swiperReviews = new Swiper('.swiperReview', {
  slidesPerView: 3,
  spaceBetween: 12,
  autoHeight: true,
  pagination: {
    el: ' .reviews-pagination-container',
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  // autoplay: {
  //   delay: 3000, // 3 секунди між змінами слайдів
  //   disableOnInteraction: false, // Продовжувати автоплей навіть після взаємодії
  // },
  loop: true,
});
console.log(swiperReviews);
/*============================================================*/

// * * * Page Loading animation

const navMenu = document.querySelector('.nav-menu');
const aboutLink = document.querySelector('.nav-menu-item');
const loader = document.querySelector('.loader');
const loaderTitle = document.querySelector('.loader-title');

const handleClick = event => {
  event.preventDefault();

  const target = event.target;
  const href = target.href;
  const currentHref = window.location.href;

  if (currentHref === href) {
    return;
  }

  if (target.nodeName !== 'A') {
    return;
  }

  loader.classList.add('is-open');
  loaderTitle.classList.add('is-open');

  setTimeout(() => {
    loader.classList.remove('is-open');
    loaderTitle.classList.remove('is-open');
    window.location.href = href;
  }, 1750);
};

navMenu.addEventListener('click', handleClick);
