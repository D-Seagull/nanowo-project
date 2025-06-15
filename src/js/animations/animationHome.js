import { gsap, ScrollTrigger } from 'gsap/all';
gsap.registerPlugin(ScrollTrigger);

function animationNumbers(tl) {
  let delay = 0.20;
  document.querySelectorAll('.exp-iteam').forEach(item => {
    tl.from(item, {
      opacity: 0,
      duration: 1,
      ease: 'power3.out',
    }, delay);
    delay += 0.20;
  });

  gsap.utils.toArray(".exp-head").forEach((el) => {
    const targetNumber = parseInt(el.textContent.replace(/\D/g, ""));
    const hasPlus = el.textContent.includes("+");
    const obj = { val: 0 };

    ScrollTrigger.create({
      trigger: ".exp-list",
      start: "top 75%",
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: targetNumber,
          duration: 2,
          ease: "power1.out",
          onUpdate: () => {
            el.textContent = Math.floor(obj.val) + (hasPlus ? "+" : "");
          },
        });
      },
    });
  });
}

// Tablet (768px - 1199px)
gsap.matchMedia().add('(min-width: 768px) and (max-width: 1199px)', () => {
  const tl = gsap.timeline();

  gsap.from('.hero-undrer-text', {
    opacity: 0,
    duration: 2,
    ease: 'power3.out',
  });

  tl.from('.hero-headline', {
    opacity: 0,
    duration: 4,
    delay: 0.7,
    ease: 'power3.out',
  }, '-=0')
    .from('.hero-gs1', {
      x: -100,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
    }, '-=4')
    .from('.hero-gs3', {
      x: 100,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
    }, '-=4')
    .from('.hero-gs2', {
      y: 100,
      opacity: 0,
      duration: 2,
      ease: 'power3.out',
    }, '-=4');

  const tlTurnKey = gsap.timeline({
    scrollTrigger: {
      trigger: '.turnkey-section',
      start: 'top 65%',
      end: 'bottom 5%',
      toggleActions: 'play reverse play reverse',
      markers: true,
    },
  });

  tlTurnKey
    .from('.turnkey-img-wrap', {
      scale: 0,
      opacity: 0,
      duration: 1.8,
      ease: 'back.out(1.7)',
    })
    .from('.turnkey-header', {
      x: -100,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
    }, '-=1.8');

  let itemDelay = 1;
  document.querySelectorAll('.turnkey-iteam').forEach(item => {
    itemDelay -= 0.1;
    tlTurnKey.from(item, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
    }, `-=${itemDelay.toString()}`);
  });

  animationNumbers(tlTurnKey);
  ScrollTrigger.refresh();
});

// Desktop (1200px and up)
gsap.matchMedia().add('(min-width: 1200px)', () => {
  const tl = gsap.timeline();

  gsap.from('.hero-undrer-text', {
    opacity: 0,
    duration: 2,
    ease: 'power3.out',
  });

  tl.from('.hero-headline', {
    opacity: 0,
    duration: 4,
    delay: 0.7,
    ease: 'power3.out',
  }, '-=0')
    .from('.hero-gs1', {
      x: -100,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
    }, '-=4')
    .from('.hero-gs3', {
      x: 100,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
    }, '-=4')
    .from('.hero-gs2', {
      y: 100,
      opacity: 0,
      duration: 2,
      ease: 'power3.out',
    }, '-=4');

  const tlTurnKey = gsap.timeline({
    scrollTrigger: {
      trigger: '.turnkey-section',
      start: 'top 65%',
      end: 'bottom 15%',
      toggleActions: 'play reverse play reverse',
      markers: true,
    },
  });

  tlTurnKey
    .from('.turnkey-img-wrap', {
      scale: 0,
      opacity: 0,
      duration: 1.8,
      ease: 'back.out(1.7)',
    })
    .from('.turnkey-header', {
      x: -100,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
    }, '-=1.8');

  let itemDelay = 1;
  document.querySelectorAll('.turnkey-iteam').forEach(item => {
    itemDelay -= 0.1;
    tlTurnKey.from(item, {
      x: -100,
      opacity: 0,
      duration: 1,
      ease: 'power4.out',
    }, `-=${itemDelay.toString()}`);
  });

  animationNumbers(tlTurnKey);
  ScrollTrigger.refresh();
});
