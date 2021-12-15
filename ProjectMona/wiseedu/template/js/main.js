// Modules
import menu from './modules/menu.js';
import createScrollTop from './modules/scrollToTop.js';
import trim from './modules/trim.js';
import SSwiper from './modules/swiper.js';
import gallery from './modules/gallery.js';
import round from './modules/roundtxt.js';
import tab from './modules/tab.js';
import popup from './modules/popup.js';
import select2 from './modules/select2.js';
import active from './modules/active.js';
import counting from './modules/counting.js';
//

// Run
window.addEventListener('DOMContentLoaded', () => {
  menu();
  createScrollTop();
  trim();
  SSwiper();
  gallery();
  round();
  tab();
  popup();
  select2();
  active();
  counting();
});
