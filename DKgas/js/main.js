// ////////////// lang control //////////////
var langList = document.querySelector(".langList");
var langBtn = document.querySelectorAll(".langBtn");
var langSet = document.querySelector(".langSet");

langList.addEventListener("click", langAct);
function langAct(){
    langList.classList.toggle("active");
}
langSet.textContent = langBtn[0].textContent;

for(let i = 0; i < langBtn.length; i++){
    langBtn[i].addEventListener("click", changeLang);
    function changeLang() {
        langSet.textContent = langBtn[i].textContent;
    }
}

////////////// menu control //////////////
var menuBtn = document.querySelector(".menuBtn");
var menu = document.querySelector(".menuList");
var menuBg = document.querySelector(".menuBg");


menuBtn.addEventListener("click", menuAct);
menuBg.addEventListener("click", menuAct);
function menuAct(){
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active"); 
    menuBg.classList.toggle("active");   
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
    var toTop = document.querySelector(".backToTop");
    if(window.scrollY > 400) toTop.classList.add("active");
    else toTop.classList.remove("active");

});



  


