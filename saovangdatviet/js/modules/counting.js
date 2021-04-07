////////////// exp num //////////////
var expNum = document.querySelectorAll(".exp__item-num");
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