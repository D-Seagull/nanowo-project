import galleriesList from './gallery-db.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
const galleryList = document.querySelector('.gallery');
const implLinkBtn = document.querySelectorAll('.js-impl-gallery');
const impProjectsPage = document.querySelector('.hidden-wrap');
const impGalleryPage = document.querySelector('#implementation-gallery');
const impBackBtn = document.querySelector('#imp-gallery-back');
const loadMoreBtn = document.querySelector('#load-more');

let currentGallery = [];
let loadedCount = 0;
const ITEMS_PER_PAGE = 6;

if (impBackBtn) {
  impBackBtn.addEventListener('click', () => {
    impProjectsPage.classList.remove('hidden');
    impGalleryPage.classList.add('hidden');
    galleryList.innerHTML = '';
    currentGallery = [];
    loadedCount = 0;
    loadMoreBtn.classList.add('hidden');

    const target = document.querySelector('#imp-projects');
    if (target) {
      const headerOffset = 60;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
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

  galleryList.innerHTML = '';

  if (gallery && gallery.length > 0) {
    currentGallery = gallery;
    loadedCount = 0;

    renderNextImages();
    lightbox.refresh();
    loadMoreBtn.classList.remove('hidden');
  } else {
    galleryList.innerHTML = '<p> 🏗️ Zdjęcia tej realizacji już wkrótce!</p>';
    loadMoreBtn.classList.add('hidden');
  }
  document.querySelector('#implementation-gallery').scrollIntoView({
    behavior: 'smooth',
    block: 'start',
  });
}

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
    loadMoreBtn.classList.add('hidden');
  }
}
if (loadMoreBtn) {
  loadMoreBtn.addEventListener('click', renderNextImages);
}

let lightbox = new SimpleLightbox('.gallery a');

//-------------------come back to project from gallery list-----//
if (galleryList) {
  history.pushState({ section: 'gallery' }, '', '?gallery');
  window.addEventListener('popstate', (event) => {
   impProjectsPage.classList.remove('hidden');
  impGalleryPage.classList.add('hidden');
  });

}