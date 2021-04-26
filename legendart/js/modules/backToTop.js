////////////// back to top //////////////
export default function backToTop() {
    var pos = 0;
    var time;
    var backBtn = document.querySelector(".backToTop");
    backBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
        });
    });
    window.addEventListener("scroll", function () {
        if (window.scrollY > pos) {
            backBtn.classList.remove("active");
            pos = window.scrollY;
        } else {
            clearTimeout(time);
            backBtn.classList.add("active");
            pos = window.scrollY;
            time = setTimeout(function () {
                backBtn.classList.remove("active");
            }, 5000);
        }
    });
}
