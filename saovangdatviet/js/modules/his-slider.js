export default function hisSlider() {
    var slideBig = document.querySelector(".his__slide__big");
    var slideSmall = document.querySelector(".his__slide__small");
    if (slideBig && slideSmall) {
        $(".his__slide__big").slick({
            infinite: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 1200,
            asNavFor: ".his__slide__small",
        });

        $(".his__slide__small").slick({
            infinite: true,
            slidesToShow: 5,
            speed: 1200,
            slidesToScroll: 1,
            asNavFor: ".his__slide__big",
            focusOnSelect: true,
            centerMode: true,
            responsive: [
                {
                    breakpoint: 1000,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    },
                },
                {
                    breakpoint: 650,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                    },
                },
            ],
        });
    }
}
