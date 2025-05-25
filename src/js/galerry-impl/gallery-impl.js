import galleriesList from './gallery-db.js';
import SimpleLightbox from "simplelightbox";
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
let isLoading = false;
impBackBtn.addEventListener('click', () => {
  impProjectsPage.classList.remove('hidden');
  impGalleryPage.classList.add('hidden');
  galleryList.innerHTML = '';
  currentGallery = [];
  loadedCount = 0;
  loadMoreBtn.classList.add('hidden');
});

implLinkBtn.forEach(btn => {
  btn.addEventListener('click', handleCreateGallery);
});

function handleCreateGallery(evt) {
  impProjectsPage.classList.add('hidden');
  impGalleryPage.classList.remove('hidden');

  const buttonData = evt.currentTarget.dataset.implgallery;
  const gallery = galleriesList[buttonData];

  galleryList.innerHTML = '';

  if (gallery && gallery.length > 0) {
    currentGallery = gallery;
    loadedCount = 0;

    renderNextImages();

    loadMoreBtn.classList.remove('hidden');
  } else {
    let isLoading = false;
    galleryList.innerHTML = '<p> 🏗️ Zdjęcia tej realizacji już wkrótce!</p>';
    loadMoreBtn.classList.add('hidden');
  }
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

              alt="img"
               loading="lazy"
            />
          </a>
        </li>
      `
    )
    .join('');
}



async function renderNextImages() {
  if (isLoading) return;
  isLoading = true;

  const loader = document.querySelector('.loader-imp');
  loader.classList.remove('hidden');

  const nextItems = currentGallery.slice(
    loadedCount,
    loadedCount + ITEMS_PER_PAGE
  );

  const htmlString = createHtmlEl(nextItems);
  galleryList.insertAdjacentHTML('beforeend', htmlString); // ВСТАВКА ДО ЗАВАНТАЖЕННЯ

  const newImages = Array.from(
    galleryList.querySelectorAll('img')
  ).slice(-nextItems.length); // беремо тільки нові зображення

  await Promise.all(
    newImages.map(img =>
      new Promise(resolve => {
        if (img.complete) return resolve(); // уже кешоване
        img.onload = img.onerror = () => resolve();
      })
    )
  );

  loadedCount += ITEMS_PER_PAGE;
  lightbox.refresh();

  if (loadedCount >= currentGallery.length) {
    loadMoreBtn.classList.add('hidden');
  }

  loader.classList.add('hidden');
  isLoading = false;
}



loadMoreBtn.addEventListener('click', renderNextImages);


let lightbox = new SimpleLightbox('.gallery a');
