export default function animate() {
    let aFade = document.querySelectorAll(".fadeItem");
    if (aFade) {
        for (let t = 0; t < aFade.length; t++) {
            setTimeout(function () {
                aFade[t].classList.add("active");
            }, 200 + 200 * t);
        }
    }
    let aUp = document.querySelectorAll(".upItem");
    if (aUp) {
        for (let t = 0; t < aUp.length; t++) {
            setTimeout(function () {
                aUp[t].classList.add("active");
            }, 200 + 100 * t);
        }
    }
}
