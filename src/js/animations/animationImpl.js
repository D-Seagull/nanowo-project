import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initImplGalleryAnimation() {
  setTimeout(() => {
 gsap.from('.imp-projects-header', {
      scrollTrigger: {
        trigger: '.imp-projects',
        start: 'top 80%',
        once: true,
      },
      x: -100,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
    });
    gsap.from('.imp-project-main-item', {
      scrollTrigger: {
        trigger: '.imp-project-list',
        start: 'top 80%',
        toggleActions: 'play none none none',
        matches:true
      },
      scale: 0,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
    });
  }, 1000);
}
