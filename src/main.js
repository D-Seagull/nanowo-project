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
  slidesPerView: 1,
  spaceBetween: 12,
  autoHeight: true,
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1440: {
      slidesPerView: 3,
    },
  },

  pagination: {
    el: '.reviews-pagination-container',
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
  speed: 5000, // Дуже плавний рух
  autoplay: {
    delay: 0, // Без затримки
    disableOnInteraction: false, // Продовжувати автоплей навіть після взаємодії
  },
  loop: true, // Безкінечне прокручування
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
  let link = target;
  if (target.nodeName !== 'A') {
    link = target.closest('a');
  }
  if (!link) return;

  const href = link.href;
  const currentHref = window.location.href;

  if (currentHref === href) {
    return;
  }

  console.log('Поточний URL:', currentHref);
  console.log('Цільовий URL:', href);

  loader.classList.add('is-open');
  loaderTitle.classList.add('is-open');

  setTimeout(() => {
    loader.classList.remove('is-open');
    loaderTitle.classList.remove('is-open');
    window.location.href = href;
  }, 1500);
};
logo.forEach(item => {
  item.addEventListener('click', handleClick);
});
