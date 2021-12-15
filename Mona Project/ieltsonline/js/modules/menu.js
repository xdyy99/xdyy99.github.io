export default function menu() {
    ////////////// menu resize //////////////
    window.addEventListener("resize", () => {
        let vh = window.innerHeight * 0.01;
        document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
    ////////////// menu control //////////////
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

    ///////  menu small  ////////
    window.addEventListener("scroll", function () {
        var header = document.querySelector(".header");
        if (window.scrollY > 50) {
            header.classList.add("small");
        } else header.classList.remove("small");
    });
}
