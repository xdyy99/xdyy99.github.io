export default function breadcrumb() {
    let bc = document.querySelectorAll(".breadcrumb");
    if (bc) {
        for (let t = 0; t < bc.length; t++) {
            setTimeout(function () {
                bc[t].classList.add("animate__animated");
                bc[t].classList.add("animate__fadeInLeft");
            }, 150 * t);
        }
    }
}
