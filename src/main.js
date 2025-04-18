import Swiper from 'swiper/bundle';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
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
new Swiper('.projectSwiper', {
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
/*============================================================*/

// * * * Page Loading animation

document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelectorAll('.js-logo');
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
});

/*=============================================================*/
/*============== Pade changer UPDATES==================*/

const releases = document.querySelector('.js-releases');
const archive = document.querySelector('.js-arhive');
const releasesPage = document.querySelector('#updates-reliases');
const archivePage = document.querySelector('#arhive-reliases');
if (releases) {
  releases.addEventListener('click', () => handleChangePage('releases'));
}
if (archive) {
  archive.addEventListener('click', () => handleChangePage('archive'));
}

function handleChangePage(page) {
  if (page === 'releases') {
    archivePage.classList.add('hidden');
    releasesPage.classList.remove('hidden');
    releases.classList.add('active');
    archive.classList.remove('active');
  }
  if (page === 'archive') {
    releasesPage.classList.add('hidden');
    archivePage.classList.remove('hidden');
    archive.classList.add('active');
    releases.classList.remove('active');
  }
}

/*===================simplelightbox===========================*/
new SimpleLightbox('.gallery-list a', {
  captionsData: 'alt',
  captionDelay: 250,
  cuptions: true,
});

document.querySelectorAll('.gallery-item').forEach(item => {
  const img = item.querySelector('img');
  const link = item.querySelector('a');
  link.href = img.src;
});
/*=============================================================*/
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
