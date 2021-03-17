

////////////// banner justify //////////////
var ban = document.querySelectorAll(".banner__content");
var scrW = screen.width; 
for(let i = 0; i < ban.length; i++){
    let counting =scrW - ban[i].offsetLeft - ban[i].offsetWidth;
    if( counting < 0){
        counting = counting - 15;
        let value = "transform:translateX("+ counting +"px)!important";
        ban[i].setAttribute('style', value);
    }
}

////////////// banner click //////////////
var banBtn = document.querySelectorAll(".banner__content");

for(let i = 0; i < banBtn.length; i++){
    banBtn[i].addEventListener("click", showBan);
    function showBan() {
        for(let a = 0; a < banBtn.length; a++){
            banBtn[a].classList.remove("active");
        }
        banBtn[i].classList.add("active");

    }
}


////////////// intro count //////////////
var introNum = document.querySelectorAll(".introCount");
function Num(){
    for(let i = 0; i < introNum.length; i++){
        let introMax = parseInt(introNum[i].textContent);
        let delayCount = 0;
        
        for(let x = 0; x <= introMax; x++){

            let delay = setInterval(function (){
                introNum[i].textContent = x.toString();
                stopDelay();
                return;
            }, x * 2000 / introMax);

            function stopDelay(){
                clearInterval(delay);
                delay = null;
            }
            delayCount++;      
        }        
    }
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
menuActBtn[1].addEventListener("click", scrollBack2);

function scrollBack(){
  setTimeout(function(){ window.scrollBy(0,-100); }, 1000);
}
function scrollBack2(){
  setTimeout(function(){ window.scrollBy(0,-175); }, 1000);
}

////////////// txt scroll //////////////
var timer = null;
var timer1 = null;
var timer2 = null;
var timer3 = null;
var timer4 = null;
var timer5 = null;
var timer6 = null;
var intro = 1;
var typeCount1 = 1;
var typeCount2 = 1;
var typeCount3 = 1;
var typeCount4 = 1;
var typeCount5 = 1;
var typeCount6 = 1;
var introCountAnimate = 1;
////////////// scroll //////////////
var scrWidth = screen.width; 
window.addEventListener("scroll", function () {

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





    if(scrWidth > 600){

        var intPos = document.querySelector(".intro").offsetTop - 600;
        if(window.scrollY > intPos && intro == 1) {
            timer = setInterval(intType, 10);
            intro = 0;
        }
        var infPos1 = document.querySelector(".infoPos1").offsetTop - 350;
        if(window.scrollY > infPos1 && typeCount1 == 1) {
            timer1 = setInterval(typingTxt1, 10);
            typeCount1 = 0;
        }
        var infPos2 = document.querySelector(".infoPos2").offsetTop - 350;
        if(window.scrollY > infPos2 && typeCount2 == 1) {
            timer2 = setInterval(typingTxt3, 10);
            typeCount2 = 0;
        }
        var infPos3 = document.querySelector(".infoPos3").offsetTop - 350;
        if(window.scrollY > infPos3 && typeCount3 == 1) {
            timer3 = setInterval(typingTxt5, 10);
            typeCount3 = 0;
        }
        var infPos4 = document.querySelector(".infoPos4").offsetTop - 350;
        if(window.scrollY > infPos4 && typeCount4 == 1) {
            timer4 = setInterval(typingTxt7, 10);
            typeCount4 = 0;
        }
        var infPos5 = document.querySelector(".infoPos5").offsetTop - 350;
        if(window.scrollY > infPos5 && typeCount5 == 1) {
            timer5 = setInterval(typingTxt9, 10);
            typeCount5 = 0;
        }
        var infPos6 = document.querySelector(".infoPos6").offsetTop - 350;
        if(window.scrollY > infPos6 && typeCount6 == 1) {
            timer6 = setInterval(typingTxt13, 10);
            typeCount6 = 0;
        }

            // intro num count
        var introPos = document.querySelector(".intro").offsetTop - 300; 
        if(window.scrollY > introPos && introCountAnimate == 1){
        Num();
        introCountAnimate = 0;
    }
    }
});



////////////// img tab //////////////
var imgBtn = document.querySelectorAll(".imgBtn");
var imgTab = document.querySelectorAll(".imgTab");
imgBtn[1].classList.add("active");
imgTab[1].classList.add("active");
for(let i = 0; i < imgBtn.length; i++){
    imgBtn[i].addEventListener("click", showLine);
    function showLine() {
        for(let a = 0; a < imgBtn.length; a++){
            imgBtn[a].classList.remove("active");
            imgTab[a].classList.remove("active");
        }
        imgBtn[i].classList.add("active");
        imgTab[i].classList.add("active");
    }
}
////////////// slick demo //////////////
$('.demo__slide').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    arrows: false,
  });
////////////// demo galery //////////////
$(document).ready(function() {
    $('.demo__slide').lightGallery({
        selector: '.demo__sizing',
    }); 
});
////////////// slick news //////////////
$('.news__slide').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    responsive: [
		{
		  breakpoint: 800,
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
////////////// slick update //////////////
// top
$('.update__slide').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    autoplay: true,
    responsive: [
        {
            breakpoint: 1750,
            settings: {
              slidesToShow: 3,
            }
          },
		{
		  breakpoint: 800,
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


//bottom
$(document).ready(function() {
if(scrWidth < 800) {
    $('.update__bottom__img').slick({
        infinite: false,
        slidesPerRow: 3,
        rows: 2,
        arrows: false,
        autoplay: true,

        responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesPerRow: 2,
            rows: 2,
          }
        }
      ]
    });
}
});


////////////// update galery //////////////
// top
$(document).ready(function() {
    $('.uptGalTop').lightGallery({
        selector: '.uptItemTop',
    }); 
});


// bottom
$(document).ready(function() {
    $('.uptGalBot').lightGallery({
        selector: '.uptItemBot',
    }); 
});



////////////// txt typing //////////////
if(scrWidth > 600){

    ////////////// txt typing 0 //////////////
    var intTxt = document.querySelector(".intro__txt");
    var intStr = intTxt.textContent;
    var intSplit = intStr.split("\ ");
    intTxt.textContent ="";
    for(let i = 0; i < intSplit.length; i++){
        intTxt.innerHTML += "<span class=\"spanTxt\ intTxt\">"+ intSplit[i] +"\ </span>";
    }
    let char = 0;
    function intType(){
        let spanTxt = document.querySelectorAll(".intTxt")[char];
        spanTxt.classList.add("fade");
        char++;
        if(char === intSplit.length){
            stopTxt();
            return;
        }
    }
    function stopTxt(){
        clearInterval(timer);
        timer = null;
    }
    ////////////// txt typing 1 //////////////
    var typeTxt1 = document.querySelector(".type__txt1");
    var typeStr1 = typeTxt1.textContent;
    var typeSplit1 = typeStr1.split("\ ");
    typeTxt1.textContent ="";
    for(let i = 0; i < typeSplit1.length; i++){
        typeTxt1.innerHTML += "<span class=\"spanTxt\ typeTxt1\">"+ typeSplit1[i] +"\ </span>";
    }
    let char1 = 0;
    function typingTxt1(){
        let spanTxt = document.querySelectorAll(".typeTxt1")[char1];
        spanTxt.classList.add("fade");
        char1++;
        if(char1 === typeSplit1.length){
            clearInterval(timer1);
            timer1 = setInterval(typingTxt2, 10);
            return;
        }
    }
    ////////////// txt typing 2 //////////////
    var typeTxt2 = document.querySelector(".type__txt2");
    var typeStr2 = typeTxt2.textContent;
    var typeSplit2 = typeStr2.split(" ");
    typeTxt2.textContent ="";
    for(let i = 0; i < typeSplit2.length; i++){
        typeTxt2.innerHTML += "<span class=\"spanTxt\ typeTxt2\">"+ typeSplit2[i] +" </span>";
    }
    let char2 = 0;
    function typingTxt2(){
        let spanTxt = document.querySelectorAll(".typeTxt2")[char2];
        spanTxt.classList.add("fade");
        char2++;
        if(char2 === typeSplit2.length){
            clearInterval(timer1);
            timer1 = null;
            return;
        }
    }
    ////////////// txt typing 3 //////////////
    var typeTxt3 = document.querySelector(".type__txt3");
    var typeStr3 = typeTxt3.textContent;
    var typeSplit3 = typeStr3.split("\ ");
    typeTxt3.textContent ="";
    for(let i = 0; i < typeSplit3.length; i++){
        typeTxt3.innerHTML += "<span class=\"spanTxt\ typeTxt3\">"+ typeSplit3[i] +"\ </span>";
    }
    let char3 = 0;
    function typingTxt3(){
        let spanTxt = document.querySelectorAll(".typeTxt3")[char3];
        spanTxt.classList.add("fade");
        char3++;
        if(char3 === typeSplit3.length){
            clearInterval(timer2);
            timer2 = setInterval(typingTxt4, 10);
            return;
        }
    }
    ////////////// txt typing 4 //////////////
    var typeTxt4 = document.querySelector(".type__txt4");
    var typeStr4 = typeTxt4.textContent;
    var typeSplit4 = typeStr4.split("\ ");
    typeTxt4.textContent ="";
    for(let i = 0; i < typeSplit4.length; i++){
        typeTxt4.innerHTML += "<span class=\"spanTxt\ typeTxt4\">"+ typeSplit4[i] +"\ </span>";
    }
    let char4 = 0;
    function typingTxt4(){
        let spanTxt = document.querySelectorAll(".typeTxt4")[char4];
        spanTxt.classList.add("fade");
        char4++;
        if(char4 === typeSplit4.length){
            clearInterval(timer2);
            timer2 = null;
        }
    }
    ////////////// txt typing 5 //////////////
    var typeTxt5 = document.querySelector(".type__txt5");
    var typeStr5 = typeTxt5.textContent;
    var typeSplit5 = typeStr5.split("\ ");
    typeTxt5.textContent ="";
    for(let i = 0; i < typeSplit5.length; i++){
        typeTxt5.innerHTML += "<span class=\"spanTxt\ typeTxt5\">"+ typeSplit5[i] +"\ </span>";
    }
    let char5 = 0;
    function typingTxt5(){
        let spanTxt = document.querySelectorAll(".typeTxt5")[char5];
        spanTxt.classList.add("fade");
        char5++;
        if(char5 === typeSplit5.length){
            clearInterval(timer3);
            timer3 = setInterval(typingTxt6, 10);
            return;
        }
    }
    ////////////// txt typing 6 //////////////
    var typeTxt6 = document.querySelector(".type__txt6");
    var typeStr6 = typeTxt6.textContent;
    var typeSplit6 = typeStr6.split("\ ");
    typeTxt6.textContent ="";
    for(let i = 0; i < typeSplit6.length; i++){
        typeTxt6.innerHTML += "<span class=\"spanTxt\ typeTxt6\">"+ typeSplit6[i] +"\ </span>";
    }
    let char6 = 0;
    function typingTxt6(){
        let spanTxt = document.querySelectorAll(".typeTxt6")[char6];
        spanTxt.classList.add("fade");
        char6++;
        if(char6 === typeSplit6.length){
            clearInterval(timer3);
            timer3 = null;
            return;
        }
    }
    ////////////// txt typing 7 //////////////
    var typeTxt7 = document.querySelector(".type__txt7");
    var typeStr7 = typeTxt7.textContent;
    var typeSplit7 = typeStr7.split("\ ");
    typeTxt7.textContent ="";
    for(let i = 0; i < typeSplit7.length; i++){
        typeTxt7.innerHTML += "<span class=\"spanTxt\ typeTxt7\">"+ typeSplit7[i] +"\ </span>";
    }
    let char7 = 0;
    function typingTxt7(){
        let spanTxt = document.querySelectorAll(".typeTxt7")[char7];
        spanTxt.classList.add("fade");
        char7++;
        if(char7 === typeSplit7.length){
            clearInterval(timer4);
            timer4 = setInterval(typingTxt8, 10);
            return;
        }
    }
    ////////////// txt typing 8 //////////////
    var typeTxt8 = document.querySelector(".type__txt8");
    var typeStr8 = typeTxt8.textContent;
    var typeSplit8 = typeStr8.split("\ ");
    typeTxt8.textContent ="";
    for(let i = 0; i < typeSplit8.length; i++){
        typeTxt8.innerHTML += "<span class=\"spanTxt\ typeTxt8\">"+ typeSplit8[i] +"\ </span>";
    }
    let char8 = 0;
    function typingTxt8(){
        let spanTxt = document.querySelectorAll(".typeTxt8")[char8];
        spanTxt.classList.add("fade");
        char8++;
        if(char8 === typeSplit8.length){
            clearInterval(timer4);
            timer4 = null;
            return;
        }
    }
    ////////////// txt typing 9 //////////////
    var typeTxt9 = document.querySelector(".type__txt9");
    var typeStr9 = typeTxt9.textContent;
    var typeSplit9 = typeStr9.split("\ ");
    typeTxt9.textContent ="";
    for(let i = 0; i < typeSplit9.length; i++){
        typeTxt9.innerHTML += "<span class=\"spanTxt\ typeTxt9\">"+ typeSplit9[i] +"\ </span>";
    }
    let char9 = 0;
    function typingTxt9(){
        let spanTxt = document.querySelectorAll(".typeTxt9")[char9];
        spanTxt.classList.add("fade");
        char9++;
        if(char9 === typeSplit9.length){
            clearInterval(timer5);
            timer5 = setInterval(typingTxt10, 10);
            return;
        }
    }
    ////////////// txt typing 10 //////////////
    var typeTxt10 = document.querySelector(".type__txt10");
    var typeStr10 = typeTxt10.textContent;
    var typeSplit10 = typeStr10.split("\ ");
    typeTxt10.textContent ="";
    for(let i = 0; i < typeSplit10.length; i++){
        typeTxt10.innerHTML += "<span class=\"spanTxt\ typeTxt10\">"+ typeSplit10[i] +"\ </span>";
    }
    let char10 = 0;
    function typingTxt10(){
        let spanTxt = document.querySelectorAll(".typeTxt10")[char10];
        spanTxt.classList.add("fade");
        char10++;
        if(char10 === typeSplit10.length){
            clearInterval(timer5);
            timer5 = setInterval(typingTxt11, 10);
            return;
        }
    }
    ////////////// txt typing 11 //////////////
    var typeTxt11 = document.querySelector(".type__txt11");
    var typeStr11 = typeTxt11.textContent;
    var typeSplit11 = typeStr11.split("\ ");
    typeTxt11.textContent ="";
    for(let i = 0; i < typeSplit11.length; i++){
        typeTxt11.innerHTML += "<span class=\"spanTxt\ typeTxt11\">"+ typeSplit11[i] +"\ </span>";
    }
    let char11 = 0;
    function typingTxt11(){
        let spanTxt = document.querySelectorAll(".typeTxt11")[char11];
        spanTxt.classList.add("fade");
        char11++;
        if(char11 === typeSplit11.length){
            clearInterval(timer5);
            timer5 = setInterval(typingTxt12, 10);
            return;
        }
    }
    ////////////// txt typing 12 //////////////
    var typeTxt12 = document.querySelector(".type__txt12");
    var typeStr12 = typeTxt12.textContent;
    var typeSplit12 = typeStr12.split("\ ");
    typeTxt12.textContent ="";
    for(let i = 0; i < typeSplit12.length; i++){
        typeTxt12.innerHTML += "<span class=\"spanTxt\ typeTxt12\">"+ typeSplit12[i] +"\ </span>";
    }
    let char12 = 0;
    function typingTxt12(){
        let spanTxt = document.querySelectorAll(".typeTxt12")[char12];
        spanTxt.classList.add("fade");
        char12++;
        if(char12 === typeSplit12.length){
            clearInterval(timer5);
            timer5 = null;
            return;
        }
    }
    ////////////// txt typing 13 //////////////
    var typeTxt13 = document.querySelector(".type__txt13");
    var typeStr13 = typeTxt13.textContent;
    var typeSplit13 = typeStr13.split("\ ");
    typeTxt13.textContent ="";
    for(let i = 0; i < typeSplit13.length; i++){
        typeTxt13.innerHTML += "<span class=\"spanTxt\ typeTxt13\">"+ typeSplit13[i] +"\ </span>";
    }
    let char13 = 0;
    function typingTxt13(){
        let spanTxt = document.querySelectorAll(".typeTxt13")[char13];
        spanTxt.classList.add("fade");
        char13++;
        if(char13 === typeSplit13.length){
            clearInterval(timer6);
            timer6 = setInterval(typingTxt14, 10);
            return;
        }
    }
    ////////////// txt typing 14 //////////////
    var typeTxt14 = document.querySelector(".type__txt14");
    var typeStr14 = typeTxt14.textContent;
    var typeSplit14 = typeStr14.split("\ ");
    typeTxt14.textContent ="";
    for(let i = 0; i < typeSplit14.length; i++){
        typeTxt14.innerHTML += "<span class=\"spanTxt\ typeTxt14\">"+ typeSplit14[i] +"\ </span>";
    }
    let char14 = 0;
    function typingTxt14(){
        let spanTxt = document.querySelectorAll(".typeTxt14")[char14];
        spanTxt.classList.add("fade");
        char14++;
        if(char14 === typeSplit14.length){
            clearInterval(timer6);
            timer6 = null;
            return;
        }
    }

    ///////////////////////////////////
}





