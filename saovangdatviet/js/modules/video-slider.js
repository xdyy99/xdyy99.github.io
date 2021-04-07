export default function videoSlider() {
    let slideVid = document.querySelector(".video__slider");
    if(slideVid){
        $('.video__slider').slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll:1,
            speed: 1200,
            autoplay: true,
            autoplaySpeed: 3000,

        });

    }
}