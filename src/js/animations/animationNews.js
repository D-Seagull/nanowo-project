import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

export function initNewsHeaderAnimation() {
  gsap.fromTo(
    '.news-header-animation',
    {
      x: -100,
    },
    {
      x: 0,
      opacity: 1,
      duration: 1.5,
      ease: 'power3.out',
    }
  );
  gsap.fromTo(
    '.news-text-animation',
    {
      y: 100,
    },
    {
      y: 0,
      opacity: 1,
      duration: 1.5,
      ease: 'power3.out',
    }
  );
}

export function initReliaseeAnimation() {
  const tlNewsItems = gsap.timeline({});
  document.querySelectorAll('.reliase-animation').forEach((item, index) => {
    tlNewsItems.fromTo(item,{
       x: -100,
    }, {
      x: 0,
      opacity: 1,
      duration: 1,
      ease: 'power4.out',
    }, `<=0.1`);
  });
}
