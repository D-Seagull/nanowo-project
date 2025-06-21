import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

function animationNumbers(tl) {
  let delay = 0.2;
  document.querySelectorAll('.exp-iteam').forEach(item => {
    tl.from(
      item,
      {
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
      },
      delay
    );
    delay += 0.2;
  });

  gsap.utils.toArray('.exp-head').forEach(el => {
    const targetNumber = parseInt(el.textContent.replace(/\D/g, ''));
    const hasPlus = el.textContent.includes('+');
    const obj = { val: 0 };

    ScrollTrigger.create({
      trigger: '.exp-list',
      start: 'top 75%',
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: targetNumber,
          duration: 2,
          ease: 'power1.out',
          onUpdate: () => {
            el.textContent = Math.floor(obj.val) + (hasPlus ? '+' : '%');
          },
        });
      },
    });
  });
}

gsap.matchMedia().add('(min-width: 769px) ', () => {
  const tl = gsap.timeline();

  gsap.fromTo(
    '.hero-undrer-text',
    { opacity: 0 },
    {
      opacity: 1,
      duration: 2,
      ease: 'power3.out',
    }
  );

  tl.fromTo(
    '.hero-headline',
    { opacity: 0 },
    {
      opacity: 1,
      duration: 4,
      delay: 0.7,
      ease: 'power3.out',
    },
    '-=0'
  )
    .fromTo(
      '.hero-gs1',
      { x: -100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
      },
      '-=4'
    )
    .fromTo(
      '.hero-gs3',
      { x: 100, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 1.5,
        ease: 'power3.out',
      },
      '-=4'
    )
    .fromTo(
      '.hero-gs2',
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 2,
        ease: 'power3.out',
      },
      '-=4'
    );

  initTurnkeyAnimation();
  initSlider();
  initAboutAnimation();
  initBenefitsAnimation();
  initReviewsAnimation();
  initNewsAnimation()
});

function initTurnkeyAnimation() {
  setTimeout(() => {
    const tlTurnKey = gsap.timeline({
      scrollTrigger: {
        trigger: '.turnkey-section',
        start: 'top 83%',
        once: true,
        // toggleActions: 'play reverse play reverse',
      },
    });

    tlTurnKey
      .from('.turnkey-img-wrap', {
        scale: 0,
        opacity: 0,
        duration: 1.8,
        ease: 'power4.out',
      })
      .from(
        '.turnkey-header',
        {
          x: -100,
          opacity: 0,
          duration: 1.5,
          ease: 'power3.out',
        },
        '-=1.8'
      );

    let itemDelay = 1;
    document.querySelectorAll('.turnkey-iteam').forEach(item => {
      itemDelay -= 0.1;
      tlTurnKey.from(
        item,
        {
          x: -100,
          opacity: 0,
          duration: 1,
          ease: 'power4.out',
        },
        `-=${itemDelay}`
      );
    });

    animationNumbers(tlTurnKey);
    ScrollTrigger.refresh();
  }, 1000);
}

function initSlider() {
  setTimeout(() => {
    const tlSlider = gsap.timeline({
      scrollTrigger: {
        trigger: '.projects',
        start: 'top 80%',
        once: true,
      },
    });

    tlSlider
      .from('.img-slide', {
        scale: 0,
        opacity: 0,
        duration: 1.8,
        ease: 'power4.out',
      })
      .from(
        '.project-header',
        {
          x: -100,
          opacity: 0,
          duration: 1.5,
          ease: 'power3.out',
        },
        '-=1.5'
      )
      .from(
        '.investor-slide',
        {
          x: -100,
          opacity: 0,
          duration: 1.5,
          ease: 'power3.out',
        },
        '-=1'
      )
      .from(
        '.slide-text',
        {
          x: -100,
          opacity: 0,
          duration: 1.5,
          ease: 'power3.out',
        },
        '-=1.4'
      )
      .from(
        '.animation-btn',
        {
          x: -100,
          opacity: 0,
          duration: 1.5,
          ease: 'power3.out',
        },
        '-=1.4'
      );
    ScrollTrigger.refresh();
  }, 1000);
}

function initAboutAnimation() {
  setTimeout(() => {
    gsap.from('.about-text', {
      scrollTrigger: {
        trigger: '.about-us-home',
        start: 'top 83%',
        once: true,
      },
      x: 200,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
    });
  }, 1000);
}
function initBenefitsAnimation() {
  setTimeout(() => {
    const tlBenefits = gsap.timeline({
      scrollTrigger: {
        trigger: '.benefits',
        start: 'top 90%',
        once: true,
      },
    });

    tlBenefits
      .from('.benefits-head ', {
        x: -100,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
      })
      .from(
        ' .benefits-item-head',
        {
          x: -100,
          opacity: 0,
          duration: 1.5,
          ease: 'power3.out',
        },
        '0'
      )
      .from(
        '.icon-benefits',
        {
          scale: 0,
          opacity: 0,
          duration: 1.8,
          ease: 'power4.out',
        },
        '-=1.5'
      )
      .from(
        '.benefits-text',
        {
          y: 100,
          opacity: 0,
          duration: 1.5,
          ease: 'power3.out',
        },
        '-=1.5'
      )
      .from(
        '.benefits-btn-animation',
        {
          y: 100,
          opacity: 0,
          duration: 1.5,
          ease: 'power3.out',
        },
        '0'
      );
  }, 1000);
}

function initReviewsAnimation() {
  setTimeout(() => {
    const tlReviews = gsap.timeline({
      scrollTrigger: {
        trigger: '.review',
        start: 'top 80%',
        once: true,
      },
    });

    tlReviews
      .from('.review-header', {
        y: 100,
        opacity: 0,
        duration: 1.5,
        ease: 'power3.out',
      })
      .from(
        '.review-header-name',
        {
          y: 100,
          opacity: 0,
          duration: 1.5,
          ease: 'power3.out',
        },
        '0.2'
      );
  }, 1000);
}




function initNewsAnimation() {
  setTimeout(() => {
    const tlNews = gsap.timeline({
  scrollTrigger: {
    trigger: '.whats-new',
    start: 'top 80%',
    once: true,
    markers: true,
  },
});
tlNews.from('.news-btn-animation', {
  y: 100,
  opacity: 0,
  duration: 1.5,
  ease: 'power3.out',
});
tlNews
  .from(
    '.news-header-container',
    {
      x: -100,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
    },
    '0.2'
  )
  .from(
    '.updates-reliase-img',
    {
      scale: 0,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
    },
    '0.2'
  )
  .from(
    '.news-iteam-header',
    {
      x: 100,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
    },
    '0.2'
  )
  .from(
    '.news-iteam-text',
    {
      x: 100,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
    },
    '-=1.3'
  )
  .from(
    '.more-link-news-animation',
    {
      x: 100,
      opacity: 0,
      duration: 1.5,
      ease: 'power3.out',
    },
    '-=1.3'
  );
  },1000)};

