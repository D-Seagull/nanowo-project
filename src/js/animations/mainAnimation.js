import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import {
  initAboutAnimation,
  initBenefitsAnimation,
  initHeroAnimation,
  initNewsAnimation,
  initReviewsAnimation,
  initSlider,
  initTurnkeyAnimation,
} from './animationHome';
import {
  initAttitudeAnimation,
  initContactAboutAnimation,
  initServisesAnimation,
  initTeamAnimation,
} from './animationAbout';
import {
  initImplContactAnimation,
  initImplGalleryAnimation,
  initImplHeaderAnimation,
} from './animationImpl';

gsap.registerPlugin(ScrollTrigger);

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
  initServisesAnimation();
  initContactAboutAnimation();

  // =============Implementation==============//
  initImplHeaderAnimation();
  initImplGalleryAnimation();
  initImplContactAnimation();
});
