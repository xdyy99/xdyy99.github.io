export default function colBtn() {
    var colBtn = document.querySelector(".col__control");
    var col = document.querySelector(".aside__col");
    
    if(colBtn){
        window.addEventListener("scroll", function () {
        if(window.scrollY > 100) {
            colBtn.classList.add("show");
        } 
        else colBtn.classList.remove("show");
        })
        colBtn.addEventListener("click", colAct);
        function colAct(){
            colBtn.classList.toggle("active");
            col.classList.toggle("active");  
        }
    }
}