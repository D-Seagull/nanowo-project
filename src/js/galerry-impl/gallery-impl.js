import galleriesList from "./gallery-db";

const galleryList = document.querySelector(".gallery");
const implLinkBtn = document.querySelectorAll(".js-impl-gallery");

implLinkBtn.forEach(btn => {
  btn.addEventListener("click", handleCreateGallery)

});
function handleCreateGallery(){
for (const key in galleriesList){
const gallery = galleriesList[key];
console.log(gallery);
galleryList.insertAdjacentHTML("beforeend", createHtmlEl(gallery));
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


