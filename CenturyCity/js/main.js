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

////////////// menu click //////////////
  var menuActBtn = document.querySelectorAll(".header__menu__item");

  var gioithieu = document.querySelector("#gioithieu");
  var vitri = document.querySelector("#vitri");
  var tienich = document.querySelector("#tienich");
  var sanpham = document.querySelector("#sanpham");
  var matbang = document.querySelector("#matbang");
  var thuvien = document.querySelector("#thuvien");
  var tintuc = document.querySelector("#tintuc");
  var lienhe = document.querySelector("#lienhe");

  for(let i = 0; i < menuActBtn.length - 1; i++){
      menuActBtn[i].addEventListener("click", scrollBack);
  }
  function scrollBack(){
    setTimeout(function(){ window.scrollBy(0,-100); }, 1000);
    
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



    if(window.scrollY > gioithieu.offsetTop - 200 && window.scrollY < gioithieu.offsetTop + gioithieu.offsetHeight - 200) 
    menuActBtn[0].classList.add("active")
    else menuActBtn[0].classList.remove("active");

    if(window.scrollY > vitri.offsetTop - 200 && window.scrollY < vitri.offsetTop + vitri.offsetHeight - 200) 
    menuActBtn[1].classList.add("active")
    else menuActBtn[1].classList.remove("active");

    if(window.scrollY > tienich.offsetTop - 200 && window.scrollY < tienich.offsetTop + tienich.offsetHeight - 200) 
    menuActBtn[2].classList.add("active")
    else menuActBtn[2].classList.remove("active");
    
    if(window.scrollY > sanpham.offsetTop - 200 && window.scrollY < sanpham.offsetTop + sanpham.offsetHeight - 200) 
    menuActBtn[3].classList.add("active")
    else menuActBtn[3].classList.remove("active");
    
    if(window.scrollY > matbang.offsetTop - 200 && window.scrollY < matbang.offsetTop + matbang.offsetHeight - 200) 
    menuActBtn[4].classList.add("active")
    else menuActBtn[4].classList.remove("active");
    
    if(window.scrollY > thuvien.offsetTop - 200 && window.scrollY < thuvien.offsetTop + thuvien.offsetHeight - 200) 
    menuActBtn[5].classList.add("active")
    else menuActBtn[5].classList.remove("active");

    if(window.scrollY > tintuc.offsetTop - 200 && window.scrollY < tintuc.offsetTop + tintuc.offsetHeight - 200) 
    menuActBtn[6].classList.add("active")
    else menuActBtn[6].classList.remove("active");

    if(window.scrollY > lienhe.offsetTop - 200 && window.scrollY < lienhe.offsetTop + lienhe.offsetHeight - 200) 
    menuActBtn[7].classList.add("active")
    else menuActBtn[7].classList.remove("active");

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

