////////////// xdyy //////////////
export default function Scrollling() {
    const maxH = document.querySelector(".maxHeight").offsetHeight; // max content scroll
    const conH = document.querySelector(".scrollContent").offsetHeight; // = 100vh
    const Amax = (maxH - conH) / 2; // max scroll

    let con = document.querySelector(".scrollContent");
    let bar = document.querySelector(".scrollBar");
    let thu = document.querySelector(".scrollThumb");
    let sec = document.querySelectorAll(".section");

    let secPer = [];
    let secScroll = [];
    let pos = 0;
    let per = 0;
    let actPos = 0;
    let hide;

    // for scrolling next and back to top //
    for (let i = 0; i < sec.length; i++) {
        secPer[i] = (sec[i].offsetTop / (maxH - conH)) * 100;
        secScroll[i] = (secPer[i] * Amax) / 100;
        if (secScroll[i] > Amax) {
            secScroll[i] = Amax;
        }
    }
    secPer[sec.length] = maxH;
    secScroll[sec.length] = Amax;

    let btn = document.querySelector(".scrollArrow");
    btn.addEventListener("click", function () {
        let backBtn = document.querySelector(".back");
        if (backBtn) {
            con.style.transform = "translate3d(0, 0, 0)";
            con.scrollTo(0, 0);
            pos = 0;
            thumb();
        } else
            for (let x = 1; x < sec.length + 1; x++) {
                let d = secScroll[x] + 1;
                if (actPos >= secPer[x - 1] && actPos < secPer[x]) {
                    con.scrollTo(0, d);
                }
                if (x == sec.length - 1) {
                    thumb(1);
                }
            }
    });

    con.addEventListener("scroll", function () {
        showbar();
        smoothScroll();
        trigger();
    });
    // for scroll trigger //
    function trigger() {
        for (let i = 0; i < sec.length; i++) {
            if (actPos >= secPer[i] - 5) {
                sec[i].classList.add("active");
            }
        }
    }

    // for scrollbar hidden //
    function showbar() {
        clearTimeout(hide);
        bar.classList.add("active");
        hide = setTimeout(() => {
            bar.classList.remove("active");
        }, 2000);
    }
    // for scrollbar click //
    bar.addEventListener("click", function (e) {
        let posE = e.offsetY;
        let eH = bar.offsetHeight - 120;
        let p = (posE / eH) * Amax;
        if (p < 0.97 * Amax) {
            con.scrollTo(0, p);
        } else {
            con.scrollTo(0, Amax);
        }
    });

    // for scrolling effect //
    function smoothScroll() {
        if (con.scrollTop > pos) {
            pos = con.scrollTop;
            con.style.transform = "translate3d(0, -" + con.scrollTop + "px, 0)";
            con.style.height = "calc(100vh + " + con.scrollTop + "px)";
            thumb(1);
        } else if (con.scrollTop < pos) {
            pos = con.scrollTop;
            con.style.transform = "translate3d(0, -" + con.scrollTop + "px, 0)";
            thumb(0);
        }
    }

    // thumb animation //
    function thumb(a) {
        per = (con.scrollTop / Amax) * 100;

        if (per > 97 && a == 1) {
            actPos = 100;
            per = "100%";
            con.style.height = "calc(100vh + " + Amax + "px)";
            con.scrollTo(0, Amax);
            btn.classList.add("back");
        } else {
            actPos = per;
            per = per + "%";
            btn.classList.remove("back");
        }
        thu.style.top = per;
    }

    // text parallax //
}
