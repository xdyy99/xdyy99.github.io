export default function productSlider() {
    let slideIns = document.querySelector(".install__slide");
    if (slideIns) {
        $(".install__slide").slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1200,
            autoplay: true,
            autoplaySpeed: 3000,
        });
    }
}
