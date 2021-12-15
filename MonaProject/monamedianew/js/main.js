import createScrollTop from './modules/scrollToTop.js';
import menu from './modules/menu.js';
import active from './modules/active.js';
import linkFormat from './modules/link.js';
import SSwiper from './modules/swiper.js';
import counting from './modules/counting.js';
import round from './modules/roundtxt.js';
import paralax from './modules/paralax.js';
import formani from './modules/formani.js';
import select2 from './modules/select2.js';
import cursor from './modules/cursor.js';
import resize from './modules/resize.js';
import road from './modules/road.js';
import realPrl from './modules/realparallax.js';
import TableOfContentModule from './modules/TableOfContentModule.js';
import ScrollToSectionModule from './modules/ScrollToSectionModule.js';
import preload from './modules/preload.js';
import monamedia from './modules/monamedia.js';
import monaScroll from './modules/mona-scroll.js';

window.addEventListener('DOMContentLoaded', () => {
  monamedia();
  createScrollTop();
  menu();
  active();
  linkFormat();
  SSwiper();
  counting();
  round();
  formani();
  select2();
  resize();
  road();
  TableOfContentModule();
  ScrollToSectionModule();
  if (window.innerWidth > 900) {
    cursor();
    paralax();
    realPrl();
  }
  monaScroll();
  preload();
});
window.addEventListener('resize', () => {
  if (window.innerWidth > 900) {
    cursor();
  }
});
