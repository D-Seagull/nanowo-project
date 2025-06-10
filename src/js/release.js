import Swiper from 'swiper';
import SimpleLightbox from 'simplelightbox';

const releasesPage = document.querySelector('#release-content');
const releasesLink = document.querySelectorAll('.js-release-link');

let selectedRelease = null;
let lightboxInstance = null;

function showMainReleases() {
  if (selectedRelease) {
    selectedRelease.classList.add('hidden');
    selectedRelease = null;
  }

  releasesPage.classList.remove('hidden');

  // Знищення Lightbox
  if (lightboxInstance) {
    lightboxInstance.destroy();
    lightboxInstance = null;
  }
}

function showReleasePage(releaseElement) {
  releasesPage.classList.add('hidden');
  releaseElement.classList.remove('hidden');
  selectedRelease = releaseElement;

  window.scrollTo({ top: 0, behavior: 'smooth' });
  // Прописуємо правильні href тільки після показу
  releaseElement.querySelectorAll('.gallery-item-release').forEach(item => {
    const link = item.querySelector('a.gallery-link');
    const img = item.querySelector('img.gallery-image-release');
    if (link && img) {
      link.href = img.src;
    }
  });

  // Знищення старого інстансу Lightbox
  if (lightboxInstance) {
    lightboxInstance.destroy();
  }

  // Ініціалізація Lightbox
  lightboxInstance = new SimpleLightbox(
    `#${releaseElement.id} .release-gallery a`,
    {
      history: false,
    }
  );

  // Ініціалізація Swiper
  new Swiper(`#${releaseElement.id} .releaseSwiper`, {
    slidesPerView: 1,
    spaceBetween: 12,
    autoHeight: true,
    navigation: {
      nextEl: `#${releaseElement.id} .swiper-button-next`,
      prevEl: `#${releaseElement.id} .swiper-button-prev`,
    },
    pagination: {
      el: `#${releaseElement.id} .project-pagination.swiper-pagination`,
      clickable: true,
    },
    keyboard: {
      enabled: true,
      onlyInViewport: false,
    },
    breakpoints: {
      768: {
        spaceBetween: 10,
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 4,
      },
    },
  });
}

// Обробка кліків по лінках до release
releasesLink.forEach(link =>
  link.addEventListener('click', evt => {
    evt.preventDefault();
    const dataReleaseLink = link.dataset.release;
    const target = document.querySelector(`#release-page${dataReleaseLink}`);
    if (!target) return;

    showReleasePage(target);
    history.pushState(
      { section: 'release', id: target.id },
      '',
      `#${target.id}`
    );
  })
);

// Кнопки "назад" у release-сторінках
document.querySelectorAll('.release-gallery-back').forEach(btn => {
  btn.addEventListener('click', () => {
    showMainReleases();
    history.pushState({ section: 'main' }, '', '#');
  });
});

// Обробка кнопки "назад" браузера
window.addEventListener('popstate', event => {
  if (event.state && event.state.section === 'release' && event.state.id) {
    const target = document.getElementById(event.state.id);
    if (target) {
      showReleasePage(target);
    }
  } else {
    showMainReleases();
  }
});
