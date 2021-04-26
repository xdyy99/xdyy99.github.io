export default function menu() {
    ////////////// menu control //////////////
    var ani = false;
    var timer = Array;
    var menuBtn = document.querySelector(".menuBtn");
    var menu = document.querySelector(".menu");
    var menuBg = document.querySelector(".menu__bg");

    menuBtn.addEventListener("click", menuAct);
    menuBg.addEventListener("click", menuAct);
    function menuAct() {
        menuBtn.classList.toggle("active");
        menu.classList.toggle("active");
        menuBg.classList.toggle("active");
        $("body").toggleClass("no-scroll");

        ani = !ani;
        menuAni();
    }

    ////////////// submenu control //////////////
    var subBtn = document.querySelectorAll(".subBtn");
    var dropdown = document.querySelectorAll(".dropdown");

    for (let i = 0; i < subBtn.length; i++) {
        subBtn[i].addEventListener("click", subAct);
        function subAct() {
            for (let a = 0; a < subBtn.length; a++) {
                if (window.innerWidth < 900) {
                    if (a === i) {
                        dropdown[i].classList.toggle("show");
                    } else {
                        dropdown[a].classList.remove("show");
                    }
                }
            }
        }
    }

    ////////////// submenu overflow //////////////
    var subMenu = document.querySelectorAll(".submenu");
    for (let i = 0; i < subMenu.length; i++) {
        let subPos = subMenu[i].getBoundingClientRect();
        let subPosTotal = subPos.left + subMenu[i].offsetWidth;

        if (subPosTotal > window.innerWidth) {
            subMenu[i].style.left = "unset";
            subMenu[i].style.right = "0";
        }
    }

    ///////  menu small  ////////
    window.addEventListener("scroll", function () {
        var header = document.querySelector(".header");
        if (window.scrollY > 50) {
            header.classList.add("small");
        } else header.classList.remove("small");
    });

    ///////  menu animate  ////////
    function menuAni() {
        let item = document.querySelectorAll(".menu__item");
        if (window.innerWidth > 900) {
            for (let t = 0; t < item.length; t++) {
                setTimeout(function () {
                    item[t].classList.add("animate__animated");
                    item[t].classList.add("animate__fadeInDown");
                }, 150 * t);
            }
        } else if (ani) {
            for (let t = 0; t < item.length; t++) {
                timer[t] = setTimeout(function () {
                    item[t].classList.add("animate__animated");
                    item[t].classList.add("animate__fadeInLeft");
                }, 100 * t);
            }
        } else {
            for (let t = 0; t < item.length; t++) {
                clearTimeout(timer[t]);
                item[t].classList.remove("animate__animated");
                item[t].classList.remove("animate__fadeInLeft");
            }
        }
    }
    menuAni();
}
