export default function banani() {
    let cir = document.querySelectorAll(".cirAni");
    var timer = Array;
    function randomPos(ele) {
        let posL = Math.floor(Math.random() * (80 + 10 + 1) - 10);
        ele.style.left = posL + "%";
        let posT = Math.floor(Math.random() * (80 + 20 + 1) - 20);
        ele.style.top = posT + "%";
    }
    for (let i = 0; i < cir.length; i++) {
        let time = (i % 3) * 200 + 3000;
        timer[i] = setInterval(() => {
            randomPos(cir[i]);
        }, time);
    }
}
