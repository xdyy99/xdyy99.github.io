////////////// exp num //////////////
export default function counting() {
    var num = document.querySelectorAll(".number");

    if (num.length != 0) {
        let run = 1;
        window.addEventListener("scroll", function () {
            var vidPos =
                document.querySelector(".video").offsetTop -
                window.innerHeight +
                100;

            if (window.scrollY > vidPos && run === 1) {
                for (let i = 0; i < num.length; i++) {
                    let numMax = parseInt(num[i].textContent);
                    let delayCount = 0;
                    console.log("run 1");
                    for (let x = 0; x <= numMax; x++) {
                        let delay = setInterval(function () {
                            num[i].textContent = x.toString();
                            stopDelay();
                            return;
                        }, (x * 1500) / numMax);

                        function stopDelay() {
                            clearInterval(delay);
                            delay = null;
                        }
                        delayCount++;
                    }
                }
                run = 0;
            }
        });
    }
}
