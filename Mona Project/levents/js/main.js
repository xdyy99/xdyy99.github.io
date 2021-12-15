// Modules
import menu from './modules/menu.js';
import active from './modules/active.js';
import cart from './modules/cart.js';
import popup from './modules/popup.js';
import createScrollTop from './modules/scrollToTop.js';
import SSwiper from './modules/swiper.js';
import banner from './modules/banner.js';
import realPrl from './modules/realparallax.js';
import gallery from './modules/gallery.js';
import qa from './modules/qa.js';
import upfile from './modules/upfile.js';
import select2 from './modules/select2.js';
import edit from './modules/edit.js';
import filter from './modules/filter.js';
import shop from './modules/shop.js';
import voucher from './modules/voucher.js';
import check from './modules/check.js';
import ScrollToSectionModule from './modules/ScrollToSectionModule.js';

// Run
window.addEventListener('DOMContentLoaded', () => {
  menu();
  active();
  cart();
  popup();
  createScrollTop();
  SSwiper();
  banner();
  realPrl();
  gallery();
  qa();
  upfile();
  select2();
  edit();
  filter();
  shop();
  voucher();
  check();
  ScrollToSectionModule();

  if (document.getElementById('select2-css')) {
    document.getElementById('select2-css').disabled = true;
  }
  $(document).ready(function () {
    $('#new-latter').trigger('click');
  });
});
