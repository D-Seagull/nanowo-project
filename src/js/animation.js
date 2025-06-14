import { gsap, ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({ ease: "power3.out" });

tl.from('.hero-undrer-text', {
  y: -100,
  opacity: 0,
  duration: 1.5,
  delay: 1 // початковий затримка перед запуском усієї анімації
})
.from('.hero-headline', {
  opacity: 0,
  duration: 1.5,
}, "-=0.5") // злегка перекриває попередній крок

// група з .hero-gs1, .hero-gs2, .hero-gs3 одночасно
.from('.hero-gs1', {
  x: -100,
  opacity: 0,
  duration: 1.5
})
.from('.hero-gs3', {
  x: 100,
  opacity: 0,
  duration: 1.5
}, "-=1.5") // одночасно з попереднім
.from('.hero-gs2', {
  y: 100,
  opacity: 0,
  duration: 1.5
}, "-=1.5"); // одночасно з попередніми