////////////// slide //////////////
slide = document.querySelector(".slide__container");
if(slide !== null){
  $('.slide__container').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    autoplaySpeed: 5000,
    autoplay: true,
    dots: true,
    arrows: false,
    responsive: [
    	{
    	  breakpoint: 900,
    	  settings: {
    		slidesToShow: 2,
    	  }
    	},
    	{
    	  breakpoint: 600,
    	  settings: {
    		slidesToShow: 1,
    	  }
    	}
    ]
  });
}
////////////// slide doi tac //////////////
slidedt = document.querySelector(".logodt__slide");
if(slidedt !== null){
  $('.logodt__slide').slick({
    infinite: true,
    speed: 300,
    slidesToShow: 6,
    autoplaySpeed: 3000,
    autoplay: true,
    arrows: false,
    responsive: [
      {
    	  breakpoint: 1300,
    	  settings: {
    		slidesToShow: 4,
    	  }
    	},
    	{
    	  breakpoint: 900,
    	  settings: {
    		slidesToShow: 3,
    	  }
    	},
    	{
    	  breakpoint: 700,
    	  settings: {
    		slidesToShow: 2,
    	  }
    	}
    ]
  });
}



  ////////////// menu control //////////////
  var menuBtn = document.querySelector(".menuBtn");
  var menu = document.querySelector(".header__menu");
  var menuBg = document.querySelector(".menu__bg");
  
  menuBtn.addEventListener("click", menuAct);
  menuBg.addEventListener("click", menuAct);
  function menuAct(){
      menuBtn.classList.toggle("active");
      menu.classList.toggle("active");   
  }
  
  ////////////// submenu control //////////////
  var subBtn = document.querySelectorAll(".submenu__btn");
  var subMenu = document.querySelectorAll(".submenu");
  
for(let i = 0; i < subBtn.length; i++){
    subBtn[i].addEventListener("click", subAct);
    function subAct() {
        for(let a = 0; a < subBtn.length; a++){

          if( window.innerWidth < 1200){
            if( a === i ){
              subBtn[i].classList.toggle("active");
              subMenu[i].classList.toggle("active");
            } else{
              subBtn[a].classList.remove("active");
              subMenu[a].classList.remove("active");
            }
          }
        }
    }
}
    ////////////// search control //////////////
    var serBtn = document.querySelector(".searchBtn");
    var serBox = document.querySelector(".search__box");
    
    serBtn.addEventListener("click", serAct);
    function serAct(){    
      serBox.classList.toggle("active");   
    }
  



////////////// back to top //////////////
function  backToTop(){
    window.scrollTo({
      top: 0,
    })
  }



////////////// scroll //////////////
window.addEventListener("scroll", function () {

     // back to top
    var backBtn = document.querySelector(".backToTop");
    if(window.scrollY > 400) backBtn.classList.add("active");
    else backBtn.classList.remove("active");

    //header
    var header = document.querySelector(".header");
    if(window.scrollY > 50) header.classList.add("header__small");
    else header.classList.remove("header__small");
});



    ////////////// banner  typing //////////////
    let timer = setInterval(typingTxt, 20);
    var typeTxt = document.querySelector(".banner__title");
    var typeStr = typeTxt.textContent;
    var typeSplit = typeStr.split("");
    typeTxt.textContent ="";
    for(let i = 0; i < typeSplit.length; i++){
        typeTxt.innerHTML += "<span class=\"spanTxt\">"+ typeSplit[i] +"</span>";
    }
    let char = 0;
    function typingTxt(){
        let spanTxt = document.querySelectorAll(".spanTxt")[char];
        spanTxt.classList.add("fade");
        char++;
        if(char === typeSplit.length){
            clearInterval(timer);
            timer = null;
            return;
        }
    }

// //////////// wow js //////////////
// wow = new WOW(
//   {
//   boxClass:     'wow',      // default
//   animateClass: 'animate__animated', // default
//   offset:       0,          // default
//   mobile:       true,       // default
//   live:         true        // default
// }
// )
// wow.init(); 