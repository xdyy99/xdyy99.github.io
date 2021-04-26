import SSwiper from "./swiper.js";
export default function tab() {
    var tab = document.querySelectorAll(".tab");

    for (let t = 0; t < tab.length; t++) {
        let bgL = tab[t].querySelector(".bg__left");
        let bgR = tab[t].querySelector(".bg__right");
        let tabBtn = tab[t].querySelectorAll(".tabBtn");
        let tabPanel = tab[t].querySelectorAll(".tabPan");

        if (tabBtn.length !== 0 && tabPanel.length === tabBtn.length) {
            tabBtn[0].classList.add("active");
            tabPanel[0].classList.add("active");

            for (let i = 0; i < tabBtn.length; i++) {
                tabBtn[i].addEventListener("click", showPanel);
                function showPanel() {
                    for (let a = 0; a < tabBtn.length; a++) {
                        tabBtn[a].classList.remove("active");
                        tabPanel[a].classList.remove("active");
                    }
                    tabBtn[i].classList.add("active");
                    tabPanel[i].classList.add("active");
                    if (bgL && bgR) {
                        bgL.style.left = tabBtn[i].offsetLeft + "px";
                        bgR.style.left =
                            tabBtn[i].offsetLeft +
                            tabBtn[i].offsetWidth -
                            1 +
                            "px";
                    }
                    SSwiper();
                }
            }
        }
    }
}
