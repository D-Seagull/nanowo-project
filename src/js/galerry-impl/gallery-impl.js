import galleriesList from "./gallery-db";

const galleryList = document.querySelector(".gallery");
const implLinkBtn = document.querySelectorAll(".js-impl-gallery");

implLinkBtn.forEach((btn) => {
  btn.addEventListener("click", handleCreateGallery);
});

function createHtmlEl(arr) {
  return arr
    .map(
      (item) => `
        <li class="gallery-item">
          <a class="gallery-link" href="${item}">
            <img class="gallery-image" src="${item}" alt="img" width="360" />
          </a>
        </li>
      `
    )
    .join("");
}

function handleCreateGallery(e) {
  const btn = e.currentTarget;
  const galleryIndex = btn.dataset.gallery; // наприклад data-gallery="1"

  const gallery = galleriesList[galleryIndex];
  if (!gallery) {
    console.error(`Gallery with index ${galleryIndex} not found.`);
    return;
  }

  // Очищення перед вставкою нової галереї (опціонально)
  galleryList.innerHTML = "";

  // Вставка
  galleryList.insertAdjacentHTML("beforeend", createHtmlEl(gallery));
}
