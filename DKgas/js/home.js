expAnimate = 1;
window.addEventListener("scroll", function () {

    // home page
    var home = document.querySelector(".header");
    if(window.scrollY > 100) home.classList.remove("header__home");
    else home.classList.add("header__home");

    // exp num
    var expPos = document.querySelector(".expPos").offsetTop - 350; 
    if(window.scrollY > expPos && expAnimate == 1){
    Num();
    expAnimate = 0;
    }
});

////////////// exp num //////////////
var expNum = document.querySelectorAll(".expNum");
function Num(){
    for(let i = 0; i < expNum.length; i++){
        let expMax = parseInt(expNum[i].textContent);
        let delayCount = 0;
        
        for(let x = 0; x <= expMax; x++){

            let delay = setInterval(function (){
                expNum[i].textContent = x.toString();
                stopDelay();
                return;
            }, x * 2000 / expMax);

            function stopDelay(){
                clearInterval(delay);
                delay = null;
            }
            delayCount++;   
            
        }
            
        }

}




////////////// banner slick slide //////////////
$(document).ready(function(){
    $('.bannerSlide').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        speed: 1000,
        fade: true,
        cssEase: 'linear'
    });
  });
