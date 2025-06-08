const releasesPage = document.querySelector("#release-content")
const release1 = document.querySelector("#release-page1")
const releasesLink = document.querySelectorAll(".js-release-link")



releasesLink.forEach((release) =>
release.addEventListener("click", ()=> {
const dataReleaseLink = release.dataset.release;
if(dataReleaseLink === "1"){
releasesPage.classList.add("hidden");
release1.classList.remove("hidden");

}
}))