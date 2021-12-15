import createDropdownArrow from './module/CreateDropdownArrow.js';
import createLight from './module/CreateLight.js';
import createMenu from './module/CreateMenu.js';
import createScrollHd from './module/Headroom.js';
import createSearch from './module/CreateSearch.js';
import createSwiper from './module/CreateSwiper.js';
import createScroll from './module/CreateScroll.js';
import createLoad from './module/CreateLoad.js';
import CountDownModule from './module/CreateCountDown.js';
import createQty from './module/CreateQty.js';
import createPopup from './module/CreatePopup.js';
import createCounterUp from './module/CreateCouterUp.js';
import createSlideDown from './module/CreateSlideDown.js';
import createTab from './module/CreateTab.js';
import active from './module/active.js';
import createVideo from './module/CreateVideo.js';
import menu from './module/menu.js';
import SSwiper from './module/swiper.js';
import createScrollTop from './module/scrollToTop.js';
import drag from './module/dragimg.js';
import tab from './module/tab.js';
import gallery from './module/gallery.js';
import popup from './module/popup.js';
import cartadd from './module/cartadd.js';
window.addEventListener('DOMContentLoaded', () => {
  drag();
  createScrollTop();
  SSwiper();
  active();
  menu();
  tab();
  gallery();
  popup();
  cartadd();
  createDropdownArrow();
  createSearch();
  createMenu();
  createScrollHd();
  createScroll();
  createLight();
  createLoad();
  createQty();
  CountDownModule();
  createCounterUp();
  createPopup();
  createTab();
  createSlideDown();
  createVideo();
  createSwiper();
  if ($('#video-player').length) {
    var player = fluidPlayer('video-player');
  }

  $('.trimLine1').trimLines({ maxLines: 1 });
  $('.trimLine2').trimLines({ maxLines: 2 });
  $('.trimLine3').trimLines({ maxLines: 3 });
  $('.trimLine4').trimLines({ maxLines: 4 });
});
AOS.init({
  once: true,
  mirror: true,
  anchorPlacement: 'top-bottom',
  disable: function () {
    var maxWidth = 1025;
    return window.innerWidth < maxWidth;
  },
  duration: '1000',
});

// var myElement = document.querySelector("#header");
// var value;
// if ($(window).width() < 1200) {
//   value = 200;
// }
// else {
//   value = 500;
// }
// var headroom = new Headroom(myElement, {
//   offset: value,
// });
// headroom.init();

// var wow = new WOW(
//   {
//     mobile: false,       // default
//   }
// )
// wow.init();

//
//
//
