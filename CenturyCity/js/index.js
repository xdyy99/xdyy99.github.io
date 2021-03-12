
////////////// wow js //////////////
wow = new WOW(
    {
    boxClass:     'wow',      // default
    animateClass: 'animate__animated', // default
    offset:       0,          // default
    mobile:       true,       // default
    live:         true        // default
  }
  )
  wow.init();

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
////////////// scroll //////////////
window.addEventListener("scroll", function () {
    var intPos = document.querySelector(".intro").offsetTop - 600;
    if(window.scrollY > intPos && intro == 1) {
        timer = setInterval(intType, 5);
        intro = 0;
    }
    var infPos1 = document.querySelector(".infoPos1").offsetTop - 350;
    if(window.scrollY > infPos1 && typeCount1 == 1) {
        timer1 = setInterval(typingTxt1, 5);
        typeCount1 = 0;
    }
    var infPos2 = document.querySelector(".infoPos2").offsetTop - 350;
    if(window.scrollY > infPos2 && typeCount2 == 1) {
        timer2 = setInterval(typingTxt3, 5);
        typeCount2 = 0;
    }
    var infPos3 = document.querySelector(".infoPos3").offsetTop - 350;
    if(window.scrollY > infPos3 && typeCount3 == 1) {
        timer3 = setInterval(typingTxt5, 5);
        typeCount3 = 0;
    }
    var infPos4 = document.querySelector(".infoPos4").offsetTop - 350;
    if(window.scrollY > infPos4 && typeCount4 == 1) {
        timer4 = setInterval(typingTxt7, 5);
        typeCount4 = 0;
    }
    var infPos5 = document.querySelector(".infoPos5").offsetTop - 350;
    if(window.scrollY > infPos5 && typeCount5 == 1) {
        timer5 = setInterval(typingTxt9, 5);
        typeCount5 = 0;
    }
    var infPos6 = document.querySelector(".infoPos6").offsetTop - 350;
    if(window.scrollY > infPos6 && typeCount6 == 1) {
        timer6 = setInterval(typingTxt13, 5);
        typeCount6 = 0;
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
    infinite: true,
    speed: 300,
    slidesToShow: 1,
    autoplaySpeed: 3000,
    autoplay: true,
    arrows: false,
    variableWidth: true,
    centerMode: true,
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
$('.update__slide').slick({
    infinite: true,
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

////////////// txt typing //////////////
var intTxt = document.querySelector(".intro__txt");
var intStr = intTxt.textContent;
var intSplit = intStr.split("");
intTxt.textContent ="";
for(let i = 0; i < intSplit.length; i++){
    intTxt.innerHTML += "<span class=\"spanTxt\ intTxt\">"+ intSplit[i] +"</span>";
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
var typeSplit1 = typeStr1.split("");
typeTxt1.textContent ="";
for(let i = 0; i < typeSplit1.length; i++){
    typeTxt1.innerHTML += "<span class=\"spanTxt\ typeTxt1\">"+ typeSplit1[i] +"</span>";
}
let char1 = 0;
function typingTxt1(){
    let spanTxt = document.querySelectorAll(".typeTxt1")[char1];
    spanTxt.classList.add("fade");
    char1++;
    if(char1 === typeSplit1.length){
        clearInterval(timer1);
        timer1 = setInterval(typingTxt2, 5);
        return;
    }
}
////////////// txt typing 2 //////////////
var typeTxt2 = document.querySelector(".type__txt2");
var typeStr2 = typeTxt2.textContent;
var typeSplit2 = typeStr2.split("");
typeTxt2.textContent ="";
for(let i = 0; i < typeSplit2.length; i++){
    typeTxt2.innerHTML += "<span class=\"spanTxt\ typeTxt2\">"+ typeSplit2[i] +"</span>";
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
var typeSplit3 = typeStr3.split("");
typeTxt3.textContent ="";
for(let i = 0; i < typeSplit3.length; i++){
    typeTxt3.innerHTML += "<span class=\"spanTxt\ typeTxt3\">"+ typeSplit3[i] +"</span>";
}
let char3 = 0;
function typingTxt3(){
    let spanTxt = document.querySelectorAll(".typeTxt3")[char3];
    spanTxt.classList.add("fade");
    char3++;
    if(char3 === typeSplit3.length){
        clearInterval(timer2);
        timer2 = setInterval(typingTxt4, 5);
        return;
    }
}
////////////// txt typing 4 //////////////
var typeTxt4 = document.querySelector(".type__txt4");
var typeStr4 = typeTxt4.textContent;
var typeSplit4 = typeStr4.split("");
typeTxt4.textContent ="";
for(let i = 0; i < typeSplit4.length; i++){
    typeTxt4.innerHTML += "<span class=\"spanTxt\ typeTxt4\">"+ typeSplit4[i] +"</span>";
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
var typeSplit5 = typeStr5.split("");
typeTxt5.textContent ="";
for(let i = 0; i < typeSplit5.length; i++){
    typeTxt5.innerHTML += "<span class=\"spanTxt\ typeTxt5\">"+ typeSplit5[i] +"</span>";
}
let char5 = 0;
function typingTxt5(){
    let spanTxt = document.querySelectorAll(".typeTxt5")[char5];
    spanTxt.classList.add("fade");
    char5++;
    if(char5 === typeSplit5.length){
        clearInterval(timer3);
        timer3 = setInterval(typingTxt6, 5);
        return;
    }
}
////////////// txt typing 6 //////////////
var typeTxt6 = document.querySelector(".type__txt6");
var typeStr6 = typeTxt6.textContent;
var typeSplit6 = typeStr6.split("");
typeTxt6.textContent ="";
for(let i = 0; i < typeSplit6.length; i++){
    typeTxt6.innerHTML += "<span class=\"spanTxt\ typeTxt6\">"+ typeSplit6[i] +"</span>";
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
var typeSplit7 = typeStr7.split("");
typeTxt7.textContent ="";
for(let i = 0; i < typeSplit7.length; i++){
    typeTxt7.innerHTML += "<span class=\"spanTxt\ typeTxt7\">"+ typeSplit7[i] +"</span>";
}
let char7 = 0;
function typingTxt7(){
    let spanTxt = document.querySelectorAll(".typeTxt7")[char7];
    spanTxt.classList.add("fade");
    char7++;
    if(char7 === typeSplit7.length){
        clearInterval(timer4);
        timer4 = setInterval(typingTxt8, 5);
        return;
    }
}
////////////// txt typing 8 //////////////
var typeTxt8 = document.querySelector(".type__txt8");
var typeStr8 = typeTxt8.textContent;
var typeSplit8 = typeStr8.split("");
typeTxt8.textContent ="";
for(let i = 0; i < typeSplit8.length; i++){
    typeTxt8.innerHTML += "<span class=\"spanTxt\ typeTxt8\">"+ typeSplit8[i] +"</span>";
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
var typeSplit9 = typeStr9.split("");
typeTxt9.textContent ="";
for(let i = 0; i < typeSplit9.length; i++){
    typeTxt9.innerHTML += "<span class=\"spanTxt\ typeTxt9\">"+ typeSplit9[i] +"</span>";
}
let char9 = 0;
function typingTxt9(){
    let spanTxt = document.querySelectorAll(".typeTxt9")[char9];
    spanTxt.classList.add("fade");
    char9++;
    if(char9 === typeSplit9.length){
        clearInterval(timer5);
        timer5 = setInterval(typingTxt10, 5);
        return;
    }
}
////////////// txt typing 10 //////////////
var typeTxt10 = document.querySelector(".type__txt10");
var typeStr10 = typeTxt10.textContent;
var typeSplit10 = typeStr10.split("");
typeTxt10.textContent ="";
for(let i = 0; i < typeSplit10.length; i++){
    typeTxt10.innerHTML += "<span class=\"spanTxt\ typeTxt10\">"+ typeSplit10[i] +"</span>";
}
let char10 = 0;
function typingTxt10(){
    let spanTxt = document.querySelectorAll(".typeTxt10")[char10];
    spanTxt.classList.add("fade");
    char10++;
    if(char10 === typeSplit10.length){
        clearInterval(timer5);
        timer5 = setInterval(typingTxt11, 5);;
        return;
    }
}
////////////// txt typing 11 //////////////
var typeTxt11 = document.querySelector(".type__txt11");
var typeStr11 = typeTxt11.textContent;
var typeSplit11 = typeStr11.split("");
typeTxt11.textContent ="";
for(let i = 0; i < typeSplit11.length; i++){
    typeTxt11.innerHTML += "<span class=\"spanTxt\ typeTxt11\">"+ typeSplit11[i] +"</span>";
}
let char11 = 0;
function typingTxt11(){
    let spanTxt = document.querySelectorAll(".typeTxt11")[char11];
    spanTxt.classList.add("fade");
    char11++;
    if(char11 === typeSplit11.length){
        clearInterval(timer5);
        timer5 = setInterval(typingTxt12, 5);
        return;
    }
}
////////////// txt typing 12 //////////////
var typeTxt12 = document.querySelector(".type__txt12");
var typeStr12 = typeTxt12.textContent;
var typeSplit12 = typeStr12.split("");
typeTxt12.textContent ="";
for(let i = 0; i < typeSplit12.length; i++){
    typeTxt12.innerHTML += "<span class=\"spanTxt\ typeTxt12\">"+ typeSplit12[i] +"</span>";
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
var typeSplit13 = typeStr13.split("");
typeTxt13.textContent ="";
for(let i = 0; i < typeSplit13.length; i++){
    typeTxt13.innerHTML += "<span class=\"spanTxt\ typeTxt13\">"+ typeSplit13[i] +"</span>";
}
let char13 = 0;
function typingTxt13(){
    let spanTxt = document.querySelectorAll(".typeTxt13")[char13];
    spanTxt.classList.add("fade");
    char13++;
    if(char13 === typeSplit13.length){
        clearInterval(timer6);
        timer6 = setInterval(typingTxt14, 5);
        return;
    }
}
////////////// txt typing 14 //////////////
var typeTxt14 = document.querySelector(".type__txt14");
var typeStr14 = typeTxt14.textContent;
var typeSplit14 = typeStr14.split("");
typeTxt14.textContent ="";
for(let i = 0; i < typeSplit14.length; i++){
    typeTxt14.innerHTML += "<span class=\"spanTxt\ typeTxt14\">"+ typeSplit14[i] +"</span>";
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

