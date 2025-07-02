import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initContactAnimation() {
  const tlBenefits = gsap.timeline({});

  tlBenefits
    .fromTo(
      '.location-title',
      {
        x: -100,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
      }
    )
    .fromTo(
      '.location-map-wrapper',
      {
        scale: 0,
        opacity: 0,
      },
      {
        scale: 1,
        opacity: 1,
        duration: 1.8,
        ease: 'power4.out',
      },
      '-=1.5'
    );
  document.querySelectorAll('.info-wrapper').forEach((item, index) => {
    tlBenefits.fromTo(
      item,
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        ease: 'power4.out',
      },
      `<=0.1`
    );
  });
}

export function initContactPageFormAnimation() {
  gsap.from('.contact-hero-text', {
    scrollTrigger: {
      trigger: '.contact-form-contact-container',
      start: 'top 80%',
      once: true,

    },
    y: -100,
    opacity: 0,
    duration: 1.5,
    ease: 'power3.out',
  });
  gsap.from('.contact-form-page-animation', {
    scrollTrigger: {
      trigger: '.contact-form-contact-container',
      start: 'top 80%',
      once: true,

    },
    scale: 0,
    opacity: 0,
    duration: 1.5,
    ease: 'power3.out',
  });
}
