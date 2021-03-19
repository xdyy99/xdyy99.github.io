
var srcW = screen.width;
if(srcW < 1200){
  ////////////// menu control //////////////
  var menuBtn = document.querySelector(".menuBtn");
  var menu = document.querySelector(".header__menu");
  var menuBg = document.querySelector(".menuBg");
  
  menuBtn.addEventListener("click", menuAct);
  menuBg.addEventListener("click", menuAct);
  function menuAct(){
      menuBtn.classList.toggle("active");
      menu.classList.toggle("active");   
  }
  
  ////////////// submenu control //////////////
  var subBtn = document.querySelector(".submenu__btn");
  var subMenu = document.querySelector(".submenu");
  
  subBtn.addEventListener("click", subAct);
  function subAct(){
      subBtn.classList.toggle("active");
      subMenu.classList.toggle("active");   
  }
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
    var chat = document.querySelector(".chat");
    var link = document.querySelector(".link");
    if(window.scrollY > 400) {
      chat.classList.add("active");
      link.classList.add("active");
    }
    else {
      chat.classList.remove("active");
      link.classList.remove("active");
    }

    //header
    var header = document.querySelector(".header");
    if(window.scrollY > 50) header.classList.add("header__small");
    else header.classList.remove("header__small");
});



    ////////////// txt typing //////////////
    let timer = setInterval(typingTxt, 70);
    var typeTxt = document.querySelector(".typeTxt");
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

//////////// wow js //////////////
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