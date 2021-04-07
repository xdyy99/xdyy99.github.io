export default function duanSlider() {
    let tabBtn = document.querySelectorAll(".duan__tab__btn");
    let tabPanel = document.querySelectorAll(".duan__tab__content");
    if(tabBtn && tabPanel){
        tabBtn[0].classList.add("active");
        tabPanel[0].classList.add("active");

        for(let i = 0; i < tabBtn.length; i++){
            tabBtn[i].addEventListener("click", showPanel);
            function showPanel() {
                for(let a = 0; a < tabBtn.length; a++){
                    tabBtn[a].classList.remove("active");
                    tabPanel[a].classList.remove("active");
                }
                tabBtn[i].classList.add("active");
                tabPanel[i].classList.add("active");
                $('.duan__slide').slick('refresh');
            }
        }
    }
}