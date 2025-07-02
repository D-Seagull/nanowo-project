import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initImplHeaderAnimation() {
  gsap.fromTo(
    '.implementation-container',
    {
      x: -200,
    },
    {
      scrollTrigger: {
        trigger: '.implementation',
        start: 'top 80%',
        once: true,
      },
      x: 0,
      opacity: 1,
      duration: 1.5,
      ease: 'power3.out',
    }
  );
  gsap.fromTo(
    '.implementation-wrapper',
    {
      x: 300,
    },
    {
      scrollTrigger: {
        trigger: '.implementation',
        start: 'top 80%',
        once: true,
      },
      x: 0,
      opacity: 1,
      duration: 1.5,
      ease: 'power3.out',
    }
  );
}

export function initImplGalleryAnimation() {
  gsap.fromTo(
    '.imp-projects-header',
    {
      x: -100,
    },
    {
      scrollTrigger: {
        trigger: '.imp-project-list',
        start: 'top 80%',
        once: true,
      },
      x: 0,
      opacity: 1,
      duration: 1.5,
      ease: 'power3.out',
    }
  );
  gsap.to('.imp-project-main-item', {
    scrollTrigger: {
      trigger: '.imp-project-list',
      start: 'top 75%',
      toggleActions: 'play none none none',

    },
    scale: 1,
    opacity: 1,
    duration: 1.5,
    ease: 'power3.out',
  });
}

export function initImplContactAnimation() {
  gsap.from('.implementation-contact-text', {
    scrollTrigger: {
      trigger: '.implementation-contact-container',
      start: 'top 90%',
      toggleActions: 'play none none none',

    },
    y: -100,
    opacity: 0,
    duration: 1.5,
    ease: 'power3.out',
  });
  gsap.from('.impl-animation-btn', {
    scrollTrigger: {
      trigger: '.implementation-contact-container',
      start: 'top 80%',
      toggleActions: 'play none none none',
    },
    y: 100,
    opacity: 0,
    duration: 1,
    ease: 'power3.out',
  });
}
