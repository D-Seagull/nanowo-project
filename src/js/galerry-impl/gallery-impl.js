import galleriesList from "./gallery-db";

const galleryList = document.querySelector(".gallery");
const implLinkBtn = document.querySelectorAll(".js-impl-gallery");

implLinkBtn.forEach(btn => {
  btn.addEventListener("click", handleCreateGallery)


});
function handleCreateGallery(evt){
 const button = evt.currentTarget;
const buttonData = button.dataset.implgallery;
console.log(buttonData);
for (const key in galleriesList){
  console.log(key);
if(key === buttonData){
const gallery = galleriesList[key];
console.log(gallery);
galleryList.innerHTML = ""

galleryList.insertAdjacentHTML("beforeend", createHtmlEl(gallery));
}else {
  galleryList.innerHTML = '<p>Zdjęcia tej realizacji już wkrótce!</p>'
}
}

}

function createHtmlEl(arr) {
  return arr
    .map(
      (item) =>
        `<li class="gallery-item">
	<a class="gallery-link" href="${item}">
		<img
			class="gallery-image"
			src="${item}"
			alt="img" width="360"
			/>
	</a>
</li>
`
    )
    .join("");

}


