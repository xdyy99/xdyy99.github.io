
import backToTop from './modules/backToTop.js';
import menu from './modules/menu.js';
import bannerSlider from './modules/banner-slider.js';
import videoPopup from './modules/video-popup.js';
import videoSlider from './modules/video-slider.js';
import productSlider from './modules/product-slider.js';
import duanSlider from './modules/duan-slider.js';
import duanTab from './modules/duan-tab.js';
import doitacSlider from './modules/doitac-slider.js';
import newsSlider from './modules/news-slider.js';



window.addEventListener('DOMContentLoaded', () => {
    backToTop();
    menu();
    bannerSlider();
    videoPopup();
    videoSlider();
    productSlider();
    duanSlider();
    duanTab ();
    doitacSlider();
    newsSlider();
});













// ////////////// slide relative //////////////
// sliderlt = document.querySelector(".relative__slide");
// if(sliderlt !== null){
//   $('.relative__slide').slick({
//     infinite: true,
//     speed: 300,
//     slidesToShow: 3,
//     dots: true,
//     arrows: false,
//     responsive: [
//     	{
//     	  breakpoint: 900,
//     	  settings: {
//     		slidesToShow: 2,
//     	  }
//     	},
//     	{
//     	  breakpoint: 600,
//     	  settings: {
//     		slidesToShow: 1,
//     	  }
//     	}
//     ]
//   });
// }
// ////////////// slide doi tac //////////////
// slidedt = document.querySelector(".logodt__slide");
// if(slidedt !== null){
//   $('.logodt__slide').slick({
//     infinite: true,
//     speed: 300,
//     slidesToShow: 6,
//     autoplaySpeed: 3000,
//     autoplay: true,
//     arrows: false,
//     responsive: [
//       {
//     	  breakpoint: 1300,
//     	  settings: {
//     		slidesToShow: 4,
//     	  }
//     	},
//     	{
//     	  breakpoint: 900,
//     	  settings: {
//     		slidesToShow: 3,
//     	  }
//     	},
//     	{
//     	  breakpoint: 700,
//     	  settings: {
//     		slidesToShow: 2,
//     	  }
//     	},
//       {
//     	  breakpoint: 500,
//     	  settings: {
//     		slidesToShow: 1,
//     	  }
//     	}
//     ]
//   });
// }




//      ////////////// giai phap chi tiet tab //////////////
//   var detailTab = document.querySelectorAll(".detailTab");
//   var detailBtn = document.querySelectorAll(".detail__tab__title");

//   if(detailTab !== null){
//     for(let i = 0; i < detailBtn.length; i++){
//         detailTab[0].classList.add("active");
//         detailBtn[i].addEventListener("click", detailShow);
//         function detailShow() {
//             for(let a = 0; a < detailTab.length; a++){
//                 if( a === i ){
//                   detailTab[a].classList.toggle("active");
//                 }
//             }
//         }
//     }
//   }





// ////////////// scroll //////////////
// window.addEventListener("scroll", function () {

//      // back to top
//     var backBtn = document.querySelector(".backToTop");
//     if(window.scrollY > 400) backBtn.classList.add("active");
//     else backBtn.classList.remove("active");

//     //header
//     var header = document.querySelector(".header");
//     if(window.scrollY > 50) header.classList.add("header__small");
//     else header.classList.remove("header__small");
// });

//     ////////////// banner  typing //////////////
//     var typeTxt = document.querySelector(".banner__title");
//     if(typeTxt !== null){
//       let timer = setInterval(typingTxt, 20);
//       var typeStr = typeTxt.textContent;
//       var typeSplit = typeStr.split("");
//       typeTxt.textContent ="";
//       for(let i = 0; i < typeSplit.length; i++){
//           typeTxt.innerHTML += "<span class=\"spanTxt\">"+ typeSplit[i] +"</span>";
//       }
//       let char = 0;
//       function typingTxt(){
//           let spanTxt = document.querySelectorAll(".spanTxt")[char];
//           spanTxt.classList.add("fade");
//           char++;
//           if(char === typeSplit.length){
//               clearInterval(timer);
//               timer = null;
//               return;
//           }
//       }
//     }

// //////////// wow js //////////////
// wow = new WOW(
//   {
//   boxClass:     'wow',      // default
//   animateClass: 'animate__animated', // default
//   offset:       0,          // default
//   mobile:       false,       // default
//   live:         true        // default
// }
// )
// wow.init(); 