import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

gsap.from('.hero-undrer-text',{
  y:100,
  opacity: 0,
  duration: 2,
   delay: 1,
  ease: 'power3.out'
})