import Swiper from 'swiper/bundle';
import 'swiper/css/bundle';
import { Navigation } from 'swiper/modules';
import 'swiper/css/navigation';
/*=======================Swiper Projects======================*/
new Swiper('.projectSwiper', {
  slidesPerView: 1,
  spaceBetween: 10,
  autoHeight: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.project-pagination.swiper-pagination',
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
});

/*=======================SwiperReviews======================*/
new Swiper('.swiperReview', {
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
