import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initAttitudeAnimation() {

   gsap.fromTo(
  '.attitude-container-wrapper',
  {
    x: 100,
    opacity: 0,
  },
  {
    scrollTrigger: {
      trigger: '.attitude-container',
      start: 'top 80%',
      toggleActions: 'play none none none', // Заміна "once: true"
    },
    x: 0,
    opacity: 1,
    duration: 1.5,
    ease: 'power3.out',
  }
);
    gsap.fromTo(
      '.attitude-video-wrapper',
      {
        x: -100,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '.attitude-container',
          start: 'top 80%',
          toggleActions: 'play none none none',
        },
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
      }
    );

}

export function initTeamAnimation() {

    gsap.from('.team-title', {
      scrollTrigger: {
        trigger: '.team-container',
        start: 'top 80%',
        once: true,
      },
      x: -100,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
    });
    gsap.to('.team-list-item', {
      scrollTrigger: {
        trigger: '.team-container',
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: 'power3.out',
    });

}

export function initServisesAnimation() {

    const tlServises = gsap.timeline({
      scrollTrigger: {
        trigger: '.services-container',
        start: 'top 70%',

      },
    });

let itemDelay =0;
    document.querySelectorAll('.services-list-item').forEach(item => {
      tlServises.from(
        item,
        {
          x: -100,
          opacity: 0,
          duration: 0.8,
            ease: 'power3.out',
        },
        itemDelay
      );

      itemDelay += 0.2; // Поступове нарощування затримки
    });

}

export function initContactAboutAnimation() {

  const tlContact = gsap.timeline({
  scrollTrigger: {
    trigger: '.contact-us',
    start: 'top 70%',
    toggleActions: 'play none none none',

  },
});


tlContact.from('.about-form-animation', {
  x: -100,
  opacity: 0,
  duration: 1.5,
  ease: 'power3.out',
}); //



tlContact.from('.about-contact-header-text', {
  y: 100,
  opacity: 0,
  duration: 1.5,
  ease: 'power3.out',
},'<');


document.querySelectorAll('.contacts-list-item').forEach(item => {
  tlContact.from(item, {
    x: 100,
    opacity: 0,
    duration: 0.8,
       ease: 'power3.out',
  }, '<');
});


};
