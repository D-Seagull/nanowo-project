import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function initImplGalleryAnimation() {

 gsap.fromTo('.imp-projects-header',{
x:-100,
 }, {
      scrollTrigger: {
        trigger: '.imp-projects',
        start: 'top 80%',
        once: true,
      },
x:0,
      opacity: 1,
      duration: 1.5,
      ease: 'power3.out',
    });
    gsap.to('.imp-project-main-item', {
      scrollTrigger: {
        trigger: '.imp-project-list',
        start: 'top 80%',
        toggleActions: 'play none none none',
        matches:true
      },
      scale: 1,
      opacity: 1,
      duration: 1.5,
      ease: 'power3.out',
    });
  }
