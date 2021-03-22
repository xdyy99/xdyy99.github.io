expAnimate = 1;
window.addEventListener("scroll", function () {

    // exp num
    var expPos = document.querySelector(".expPos").offsetTop + 200; 
    if(window.scrollY > expPos && expAnimate == 1){
    Num();
    expAnimate = 0;
    }
});

////////////// exp num //////////////
var expNum = document.querySelectorAll(".expNum");
function Num(){
    for(let i = 0; i < expNum.length; i++){
        let expMax = parseInt(expNum[i].textContent);
        let delayCount = 0;
        
        for(let x = 0; x <= expMax; x++){

            let delay = setInterval(function (){
                expNum[i].textContent = x.toString();
                stopDelay();
                return;
            }, x * 2000 / expMax);

            function stopDelay(){
                clearInterval(delay);
                delay = null;
            }
            delayCount++;   
            
        }
            
        }

}