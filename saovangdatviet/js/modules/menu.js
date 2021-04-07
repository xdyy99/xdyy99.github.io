  
  export default function menu() {
////////////// menu control //////////////
      var menuBtn = document.querySelector(".menuBtn");
      var menu = document.querySelector(".header__menu");
      var menuBg = document.querySelector(".menu__bg");
      
      menuBtn.addEventListener("click", menuAct);
      menuBg.addEventListener("click", menuAct);
      function menuAct(){
          menuBtn.classList.toggle("active");
          menu.classList.toggle("active"); 
          menuBg.classList.toggle("active");  
      }
      
      ////////////// submenu control //////////////
      var subBtn = document.querySelectorAll(".submenu__btn");
      var subMenu = document.querySelectorAll(".submenu");
      
    for(let i = 0; i < subBtn.length; i++){
        subBtn[i].addEventListener("click", subAct);
        function subAct() {
            for(let a = 0; a < subBtn.length; a++){
    
              if( window.innerWidth < 900){
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
    ///////  menu small  ////////
    window.addEventListener("scroll", function () {
        var header = document.querySelector(".header");
        if(window.scrollY > 50) {
            header.classList.add("small")
        } 
        else header.classList.remove("small");
     })
  }