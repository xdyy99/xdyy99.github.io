export default function menu() {
    ////////////// menu control //////////////
    var menuBtn = document.querySelector(".menuBtn");
    var menu = document.querySelector(".menu__main");
    var menuBg = document.querySelector(".menu__bg");
    let on = true;
    let timer = [];
    menuBtn.addEventListener("click", menuAct);
    function menuAct() {
        menuBtn.classList.toggle("active");
        menu.classList.toggle("active");
        menuBg.classList.toggle("active");
        let time = 0;

        console.log(timer[1]);
        console.log("clear");
        clearTimeout(timer[30]);
        if (on) {
            for (let i = 1; i < 25; i++) {
                menu.classList.remove("out");
                let a = i * 4;
                time = a * 10;
                clearTimeout(timer[i]);

                timer[i] = setTimeout(() => {
                    menuBg.style.transform = "translate3d(-" + a + "%, 0,0)";
                }, time);
            }
            timer[30] = setTimeout(() => {
                menuBg.style.backgroundColor = "rgba(24,24,24,1)";
            }, 1000);
        } else {
            menu.classList.add("out");
            menuBg.style.backgroundColor = "rgba(24,24,24,0)";
            for (let i = 1; i < 26; i++) {
                let a = i * 4;
                time = a * 7;
                let x = 100 - a;
                clearTimeout(timer[i]);

                timer[i] = setTimeout(function () {
                    menuBg.style.transform = "translate3d(-" + x + "%, 0,0)";
                }, time);
            }
        }
        on = !on;
        console.log(timer[1]);
    }

    /// menu anime ///
}
