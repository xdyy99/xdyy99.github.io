import backToTop from "./modules/backToTop.js";
import menu from "./modules/menu.js";
import breadcrumb from "./modules/breadcrumb.js";
import SSwiper from "./modules/swiper.js";
import tab from "./modules/tab.js";
import linkFormat from "./modules/link.js";
import gallery from "./modules/gallery.js";

window.addEventListener("DOMContentLoaded", () => {
    backToTop();
    menu();
    SSwiper();
    tab();
    linkFormat();
    breadcrumb();
    gallery();
});
