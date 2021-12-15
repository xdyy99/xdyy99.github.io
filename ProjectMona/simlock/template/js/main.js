import realPrl from './modules/realparallax.js';
import formani from './modules/formani.js';
import youtube from './modules/youtube.js';
import linkFormat from './modules/link.js';
import SSwiper from './modules/swiper.js';
import createScrollTop from './modules/scrollToTop.js';
import ScrollToSectionModule from './modules/ScrollToSectionModule.js';
import menu from './modules/menu.js';
import active from './modules/active.js';
import phone from './modules/viphone.js';
import pop from './modules/popup.js';
import sMagic from './modules/scrollmagic.js';

window.addEventListener('DOMContentLoaded', () => {
  realPrl();
  formani();
  // youtube();
  linkFormat();
  SSwiper();
  ScrollToSectionModule();
  createScrollTop();
  menu();
  active();
  phone();
  pop();
  sMagic();
});
