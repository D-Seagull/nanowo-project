// * * * Page Loading animation

document.addEventListener('DOMContentLoaded', () => {
  const logo = document.querySelectorAll('.js-logo');
  const loader = document.querySelector('.loader');
  const loaderTitle = document.querySelector('.loader-title');

  const handleClick = event => {
    event.preventDefault();

    const target = event.target;
    let link = target;
    if (target.nodeName !== 'A') {
      link = target.closest('a');
    }
    if (!link) return;

    const href = link.href;
    const currentHref = window.location.href;

    if (currentHref === href) {
      return;
    }

    loader.classList.add('is-open');
    loaderTitle.classList.add('is-open');

    setTimeout(() => {
      loader.classList.remove('is-open');
      loaderTitle.classList.remove('is-open');
      window.location.href = href;
    }, 1500);
  };
  logo.forEach(item => {
    item.addEventListener('click', handleClick);
  });
});
