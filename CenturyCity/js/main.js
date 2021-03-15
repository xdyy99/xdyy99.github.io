////////////// menu control //////////////
var menuBtn = document.querySelector(".menuBtn");
var menu = document.querySelector(".header__bottom");
var menuBg = document.querySelector(".menuBg");

menuBtn.addEventListener("click", menuAct);
menuBg.addEventListener("click", menuAct);
function menuAct(){
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");   
}

////////////// submenu control //////////////
var subCtrl = document.querySelector(".submenu__control");
var subMenu = document.querySelector(".header__submenu");
subCtrl.addEventListener("click", subAct);
function subAct(){
    subCtrl.classList.toggle("active");
    subMenu.classList.toggle("active");   
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

    //header
    var header = document.querySelector(".header");
    if(window.scrollY > 100) header.classList.add("header__small");
    else header.classList.remove("header__small");

});

////////////// footer form //////////////
var formInp = document.querySelectorAll(".formInput");
var formLine = document.querySelectorAll(".formLine");

for(let i = 0; i < formInp.length; i++){
    formInp[i].addEventListener("click", showLine);
    function showLine() {
        for(let a = 0; a < formInp.length; a++){
            formInp[a].classList.remove("active");
            formLine[a].classList.remove("active");
        }
        formInp[i].classList.add("active");
        formLine[i].classList.add("active");
    }
}

