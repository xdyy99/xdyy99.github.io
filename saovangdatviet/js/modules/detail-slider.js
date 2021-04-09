export default function detailSlider() {
    var slideBig = document.querySelector(".detail__slide__big");
    var slideSmall = document.querySelector(".detail__slide__small");
    if (slideBig && slideSmall) {
        $(".detail__slide__big").slick({
            infinite: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1200,
            arrows: false,
            asNavFor: ".detail__slide__small",
        });

        $(".detail__slide__small").slick({
            infinite: false,
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: ".detail__slide__big",
            focusOnSelect: true,
            vertical: true,
            responsive: [
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        vertical: false,
                    },
                },
            ],
        });
    }
}
