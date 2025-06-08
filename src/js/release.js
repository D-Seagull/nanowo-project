import SimpleLightbox from 'simplelightbox';
  const releasesPage = document.querySelector("#release-content");
  const release1 = document.querySelector("#release-page1");
  const releasesLink = document.querySelectorAll(".js-release-link");
  const releaseBackBtn = document.querySelector("#release-gallery-back");

function showMainReleases() {
    releasesPage.classList.remove("hidden");
    release1.classList.add("hidden");
  }

  function showReleasePage() {
    releasesPage.classList.add("hidden");
    release1.classList.remove("hidden");
  }

  releasesLink.forEach((release) =>
    release.addEventListener("click", (evt) => {
        evt.preventDefault();

      const dataReleaseLink = release.dataset.release;
      if (dataReleaseLink === "1") {
       showReleasePage()
        history.pushState({ section: "release-page" }, "", "#release1");
      }
    })
  );

  if (releaseBackBtn) {
    releaseBackBtn.addEventListener("click", showMainReleases);
  }





    window.addEventListener("popstate", (event) => {

    if (event.state) {

   if (event.state.section === "main-updates") {
        showMainReleases();
      }
    } else {

      if (window.location.hash === "#release1") {
        showReleasePage();
      } else {
        showMainReleases();
      }
    }
  });

  const releaseLightbox = new SimpleLightbox('.release-gallery a');