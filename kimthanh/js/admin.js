//mouse move paralax effect
  const qImg = document.querySelector(".pro__dots");
  var proDots = document.querySelector(".pro__dots");

// add more dot
qImg.addEventListener("click", 
function (e) {
    let _w = qImg.offsetWidth;
    let _h = qImg.offsetHeight;
    
    let _posX = (e.offsetX - 15) / _w * 100;
    let _posY = (e.offsetY - 15) / _h * 100;
    let _perX = _posX + "%";
    let _perY = _posY + "%";

    if(e.offsetX > 30 || e.offsetY > 30){
        let dot = document.querySelectorAll(".dot");
        let dotCount= dot.length + 1;
    
        proDots.innerHTML += "<div class=\"dot\"><a href=\"#\">"+ dotCount +"</a><span class=\"dot__tooltip\">name here</span></div>";
    
        let dotPos = document.querySelectorAll(".dot");
        dotPos[dot.length].style.top = _perY;
        dotPos[dot.length].style.left = _perX;
        Position[dot.length] = 
        {
            _posX : _perX,
            _posY : _perY,
            code: "",
            name: "",
            link: ""
        }
        let getName = document.querySelector(".pro__getName");
        getName.style.top =  _posY - 0.5 +"%";
        getName.style.left = _posX + 5 +"%";
        getName.style.display = "block"; 
        resetPro();
    }
});

function proData(xdyy){
    let tool = document.querySelectorAll(".dot__tooltip");
    let dot = document.querySelectorAll(".dot");
    let x = tool.length - 1;

    let n = xdyy.getAttribute("data-name");
    let c = xdyy.getAttribute("data-code");
    let l = xdyy.getAttribute("data-link");

    Position[x].name = n;
    Position[x].code = c;
    Position[x].link = l;

    tool[x].innerHTML = n;
    dot[x].classList.add(c);
    closeGetName();
    resetPro();
}
  function closeGetName(){
    let getName = document.querySelector(".pro__getName");
    getName.style.display = "none"; 
  }  




    const proDel = document.querySelector(".pro__del");
    proDel.addEventListener("click", 
    function (){
        let dot = document.querySelectorAll(".dot");
        if( dot.length > 0){
            del = dot.length - 1;
            dot[del].remove();
            Position.pop();
            resetPro;
        }
    });
        
    resetPro();
    function resetPro() {
        let max = document.querySelectorAll(".pro__item").length;
        for(t = 0; t < max; t++){
            let proItems = document.querySelectorAll(`.${Position[t].code}`);
            if(proItems){
                for(let i = 0; i < proItems.length; i++){
                    proItems[i].addEventListener("mouseover", 
                    function showItem() {
                        for(let a = 0; a < proItems.length; a++){
                            proItems[a].classList.add('active');
                        }
                    });
                    proItems[i].addEventListener("mouseout",         
                    function hideItem() { 
                        for(let b = 0; b < proItems.length; b++){
                            proItems[b].classList.remove('active');
                        }
                    });
                }
            }
        }
    } 























