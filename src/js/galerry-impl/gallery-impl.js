import galleriesList from './gallery-db.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const galleryList = document.querySelector('.gallery');
const implLinkBtn = document.querySelectorAll('.js-impl-gallery');
const impProjectsPage = document.querySelector('.hidden-wrap');
const impGalleryPage = document.querySelector('#implementation-gallery');
const impBackBtn = document.querySelector('#imp-gallery-back');
const loadMoreBtn = document.querySelector('#load-more');
const LoadPageObserver = document.querySelector('.load-more');

const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        renderNextImages();
      }
    });
  },
  {
    root: null,
    rootMargin: '200px',
    threshold: 0,
  }
);


let currentGallery = [];
let loadedCount = 0;

const ITEMS_PER_PAGE = 12;

function toScrollProject(id) {
  const target = document.querySelector(`#${id}`);
  if (target) {
    const headerOffset = window.innerWidth <= 1024 ? 100 : 80;

    // Вимкнення observer перед scroll
    if (LoadPageObserver) observer.unobserve(LoadPageObserver);

    // Дочекайся повного рендеру елемента
    setTimeout(() => {
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });

      // Після scroll знову активуємо observer (опційно)
      setTimeout(() => {
        if (LoadPageObserver) observer.observe(LoadPageObserver);
      }, 1000); // даємо час scroll'у завершитися
    }, 300); // даємо час контенту завантажитися
  }
}
function backToProjects() {
  impProjectsPage.classList.remove('hidden');
  impGalleryPage.classList.add('hidden');
  galleryList.innerHTML = '';
  currentGallery = [];
  loadedCount = 0;
  // loadMoreBtn.classList.add('hidden');
}

if (impBackBtn) {
  impBackBtn.addEventListener('click', () => {
    history.back(); // Тригеримо popstate — і спрацює scroll
  });
}

implLinkBtn.forEach(btn => {
  btn.addEventListener('click', handleCreateGallery);
});

function handleCreateGallery(evt) {
  evt.preventDefault();
  // Зберігаємо scrollY перед переходом
const scrollY = window.scrollY;
history.replaceState({ section: 'imp-projects', scrollY }, '', location.href);

impProjectsPage.classList.add('hidden');
impGalleryPage.classList.remove('hidden');

const buttonData = evt.currentTarget.dataset.implgallery;
const gallery = galleriesList[buttonData];
  galleryList.innerHTML = '';

  if (gallery && gallery.length > 0) {
    currentGallery = gallery;
    loadedCount = 0;

    renderNextImages();
    lightbox.refresh();
    // loadMoreBtn.classList.remove('hidden');
  if (LoadPageObserver) {
  observer.observe(LoadPageObserver);
  setTimeout(() => {
    checkIfNeedMore();
  }, 300); // Перевіряємо, чи треба ще підвантажити
}
  } else {
    galleryList.innerHTML = '<p> 🏗️ Zdjęcia tej realizacji już wkrótce!</p>';
    loadMoreBtn.classList.add('hidden');
  }
  setTimeout(() => {
    toScrollProject('implementation-gallery');
  }, 100);

  if (history.state?.section !== 'gallery') {
    history.pushState(
      { section: 'imp-projects', scrollTo: 'imp-projects' },
      '',
      '?gallery'
    );
  }
}
window.addEventListener('popstate', event => {
  if (event.state?.section === 'imp-projects') {
    backToProjects();
    lightbox.close();
    setTimeout(() => {
      if (event.state.scrollY !== undefined) {
        window.scrollTo({
          top: event.state.scrollY,
          behavior: 'smooth',
        });
      } else {
        toScrollProject('imp-projects');
      }
    }, 400);
  }
});
function createHtmlEl(arr) {
  return arr
    .map(
      item => `
        <li class="gallery-item">
          <a class="gallery-link" href="${item['1x']}">
            <img
              class="gallery-image"
              src="${item['1x']}"
               srcset="${item['1x']} 1x, ${item['2x']} 2x"
              alt="img"

            />
          </a>
        </li>
      `
    )
    .join('');
}

function renderNextImages() {
  const nextItems = currentGallery.slice(
    loadedCount,
    loadedCount + ITEMS_PER_PAGE
  );
  galleryList.insertAdjacentHTML('beforeend', createHtmlEl(nextItems));
  loadedCount += ITEMS_PER_PAGE;

  lightbox.refresh();
  if (loadedCount >= currentGallery.length) {
    // loadMoreBtn.classList.add('hidden');
    if (LoadPageObserver) {
      observer.unobserve(LoadPageObserver);
    }
  }
}
function checkIfNeedMore() {
  const rect = LoadPageObserver.getBoundingClientRect();
  if (rect.top < window.innerHeight) {
    renderNextImages();
  }
}

window.addEventListener('load', () => {
  setTimeout(checkIfNeedMore, 300); // трохи почекати після рендеру
});
// if (loadMoreBtn) {
//   loadMoreBtn.addEventListener('click', renderNextImages);
// }

let lightbox = new SimpleLightbox('.gallery a', {
  history: false,
});
