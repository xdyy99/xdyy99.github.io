////////////// back to top //////////////
export default function backToTop() {
    window.addEventListener("scroll", function () {
       var backBtn = document.querySelector(".backToTop");
       if(window.scrollY > 400) {
         backBtn.addEventListener("click", function (){
            window.scrollTo({
                top: 0,
            })
         });
         backBtn.classList.add("active");
       } 
       else backBtn.classList.remove("active");
    })
}
