import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';
import {
  initAboutAnimation,
  initBenefitsAnimation,
  initHeroAnimation,
  initNewsAnimation,
  initReviewsAnimation,
  initSlider,
  initTurnkeyAnimation,
} from './animationHome';
import { initAttitudeAnimation, initContactAboutAnimation, initServisesAnimation, initTeamAnimation } from './animationAbout';
gsap.registerPlugin(ScrollTrigger,ScrollToPlugin);
document.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash;

  if (hash) {
    const targetEl = document.querySelector(hash);

    if (targetEl) {
      // Маленький таймаут, щоб елемент точно був у DOM
      setTimeout(() => {
        gsap.to(window, {
          duration: 5,
          scrollTo: {
            y: targetEl,
            offsetY: 80, // якщо є фіксований хедер
          },
          ease: 'power2.out',
        });
      }, 100);
    }
  }
});

gsap.matchMedia().add('(min-width: 769px) ', () => {
  // =============HOME==============//
  initHeroAnimation();
  initTurnkeyAnimation();
  initSlider();
  initAboutAnimation();
  initBenefitsAnimation();
  initReviewsAnimation();
  initNewsAnimation();

  // =============ABOUT==============//
  initAttitudeAnimation();
  initTeamAnimation();
  initServisesAnimation()
  initContactAboutAnimation()
});
