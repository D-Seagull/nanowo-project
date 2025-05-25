import galleriesList from './gallery-db';

const galleryList = document.querySelector('.gallery');
const implLinkBtn = document.querySelectorAll('.js-impl-gallery');
const impProjectsPage = document.querySelector('#imp-projects');
const impGalleryPage = document.querySelector('#implementation-gallery');
const impBackBtn = document.querySelector('#imp-gallery-back');

impBackBtn.addEventListener("click", () =>{
  impProjectsPage.classList.toggle('hidden');
  impGalleryPage.classList.toggle('hidden');
})

implLinkBtn.forEach(btn => {
  btn.addEventListener('click', handleCreateGallery);
});
function handleCreateGallery(evt) {
  impProjectsPage.classList.toggle('hidden');
  impGalleryPage.classList.toggle('hidden');
  const button = evt.currentTarget;
  const buttonData = button.dataset.implgallery;
  console.log(buttonData);
  for (const key in galleriesList) {
    console.log(key);
    if (key === buttonData) {
      const gallery = galleriesList[key];
      console.log(gallery);
      galleryList.innerHTML = '';

      galleryList.insertAdjacentHTML('beforeend', createHtmlEl(gallery));
    } else {
      galleryList.innerHTML = '<p> 🏗️ Zdjęcia tej realizacji już wkrótce!</p>';
    }
  }
}

function createHtmlEl(arr) {
  return arr
    .map(
      item =>
        ` <li class="gallery-item">
    <a class="gallery-link" href="${item["1x"]}">
      <img
        class="gallery-image"
        src="${item["1x"]}"
        srcset="${item["1x"]} 1x, ${item["2x"]} 2x"
        alt="img"
        width="360"
        loading="lazy"
      />
    </a>
  </li>
`
    )
    .join('');
}

