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

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {

      renderNextImages();


    }
  });
}, {
  root: null,
  rootMargin: '40px',
  threshold: 0,
});


let currentGallery = [];
let loadedCount = 0;

const ITEMS_PER_PAGE = 6;

function toScrollProject(id) {
  const target = document.querySelector(`#${id}`);
  if (target) {
    const headerOffset = 60;
    const elementPosition = target.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
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
    backToProjects();
    toScrollProject('imp-projects');
  });
}

implLinkBtn.forEach(btn => {
  btn.addEventListener('click', handleCreateGallery);
});

function handleCreateGallery(evt) {
  evt.preventDefault();
  impProjectsPage.classList.add('hidden');
  impGalleryPage.classList.remove('hidden');

  const buttonData = evt.currentTarget.dataset.implgallery;
  const gallery = galleriesList[buttonData];
  history.pushState({ section: 'imp-projects' }, '', '?gallery');
  galleryList.innerHTML = '';

  if (gallery && gallery.length > 0) {
    currentGallery = gallery;
    loadedCount = 0;

    renderNextImages();
    lightbox.refresh();
    // loadMoreBtn.classList.remove('hidden');
    if (LoadPageObserver) {
      observer.observe(LoadPageObserver);
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
      toScrollProject('imp-projects');
    }, 100);
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
               loading="lazy"
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
// if (loadMoreBtn) {
//   loadMoreBtn.addEventListener('click', renderNextImages);
// }

let lightbox = new SimpleLightbox('.gallery a', {
  history: false,
});
