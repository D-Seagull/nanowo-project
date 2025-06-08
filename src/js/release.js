import Swiper from "swiper";
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

document.querySelectorAll('.gallery-item-release').forEach(item => {
    const link = item.querySelector('a.gallery-link');
    const img = item.querySelector('img.gallery-image-release');
    if (link && img) {
      link.href = img.src;
    }
  });

  new Swiper('.releaseSwiper', {
  slidesPerView: 1,
  spaceBetween: 12,
  autoHeight: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  pagination: {
    el: '.project-pagination.swiper-pagination',
    clickable: true,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },
   breakpoints: {
    768: {
      spaceBetween: 10,
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});
const releaseLightBox = new SimpleLightbox('.release-gallery a', {
  history: false,
});