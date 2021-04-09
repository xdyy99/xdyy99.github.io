export default function lvSlider() {
    let slideLV = document.querySelector(".linhvuc__slide");
    if (slideLV) {
        $(".linhvuc__slide").slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            speed: 1200,
            autoplay: true,
            autoplaySpeed: 3000,
            dots: true,
            arrows: false,
            responsive: [
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });
    }
}
