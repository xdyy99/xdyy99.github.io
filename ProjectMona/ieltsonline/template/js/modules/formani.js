export default function formani() {
    let inp = document.querySelectorAll(".form__item");
    if (inp) {
        for (let t = 0; t < inp.length; t++) {
            setTimeout(function () {
                inp[t].classList.add("active");
            }, 200 + 200 * t);
        }
    }
}
