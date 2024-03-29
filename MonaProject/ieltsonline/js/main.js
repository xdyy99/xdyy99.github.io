import backToTop from './modules/backToTop.js';
import menu from './modules/menu.js';
import SSwiper from './modules/swiper.js';
import linkFormat from './modules/link.js';
import banani from './modules/banani.js';
import pop from './modules/popup.js';
import active from './modules/active.js';
import tab from './modules/tab.js';
import dragging from './modules/drag.js';

import formani from './modules/formani.js';
import breadcrumb from './modules/breadcrumb.js';
import animate from './modules/animation.js';

window.addEventListener('DOMContentLoaded', () => {
  backToTop();
  menu();
  linkFormat();
  SSwiper();
  banani();
  pop();
  animate();
  active();
  tab();
  dragging();
});
