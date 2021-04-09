export default function relaSlider() {
    let slideRL = document.querySelector(".rela__slide");
    let slideRLC = document.querySelector(".rela__center");
    if (slideRL && slideRLC) {
        $(".rela__center").slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            speed: 1200,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            responsive: [
                {
                    breakpoint: 800,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 500,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });
    }
    if (slideRL && !slideRLC) {
        $(".rela__slide").slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            speed: 1200,
            autoplay: true,
            autoplaySpeed: 3000,
            arrows: true,
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 700,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 400,
                    settings: {
                        slidesToShow: 1,
                    },
                },
            ],
        });
    }
}
