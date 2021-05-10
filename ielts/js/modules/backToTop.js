////////////// back to top //////////////
export default function backToTop() {
    var backBtn = document.querySelector(".backToTop");
    backBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
        });
    });
    window.addEventListener("scroll", function () {
        if (window.scrollY > 100) {
            backBtn.classList.add("active");
        } else {
            backBtn.classList.remove("active");
        }
    });
}
