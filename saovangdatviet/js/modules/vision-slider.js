export default function visionslider() {
    let slideV = document.querySelector(".vision__slide");
    if (slideV) {
        $(".vision__slide").slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll: 1,
            speed: 1200,
            autoplay: true,
            autoplaySpeed: 3000,
            dots: true,
            responsive: [
                {
                    breakpoint: 1300,
                    settings: {
                        slidesToShow: 1,
                    },
                },
                {
                    breakpoint: 100,
                    settings: {
                        slidesToShow: 2,
                    },
                },
            ],
        });
    }
}
