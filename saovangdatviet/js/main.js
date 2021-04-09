//////////// wow js //////////////
// wow = new WOW({
//     boxClass: "wow", // default
//     animateClass: "animate__animated", // default
//     offset: 0, // default
//     mobile: false, // default
//     live: true, // default
// });
// wow.init();
//////////////////////////////////

import backToTop from "./modules/backToTop.js";
import menu from "./modules/menu.js";
import bannerSlider from "./modules/banner-slider.js";
import videoPopup from "./modules/video-popup.js";
import videoSlider from "./modules/video-slider.js";
import productSlider from "./modules/product-slider.js";
import duanSlider from "./modules/duan-slider.js";
import duanTab from "./modules/duan-tab.js";
import doitacSlider from "./modules/doitac-slider.js";
import newsSlider from "./modules/news-slider.js";
import nhansuSlider from "./modules/nhansu-slider.js";
import cosoSlider from "./modules/coso-slider.js";
import cosoGal from "./modules/gallery.js";
import colBtn from "./modules/aside-ctrl.js";
import detailSlider from "./modules/detail-slider.js";
import relaSlider from "./modules/rela-slider.js";
import insSlider from "./modules/ins-slider.js";
import visionSlider from "./modules/vision-slider.js";
import lvSlider from "./modules/linhvucslider.js";

window.addEventListener("DOMContentLoaded", () => {
    backToTop();
    menu();
    bannerSlider();
    videoPopup();
    videoSlider();
    productSlider();
    duanSlider();
    duanTab();
    doitacSlider();
    newsSlider();
    nhansuSlider();
    cosoSlider();
    cosoGal();
    colBtn();
    detailSlider();
    relaSlider();
    insSlider();
    visionSlider();
    lvSlider();
});
