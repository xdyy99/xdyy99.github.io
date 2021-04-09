export default function cosoSlider() {
    let slideCS = document.querySelector(".coso__slide");
    if (slideCS) {
        if(document.body.offsetWidth > 450){
            $(".coso__slide").slick({
                infinite: false,
                slidesPerRow: 3,
                rows: 3,
                slidesToScroll: 1,
                speed: 1200,
                autoplay: true,
                autoplaySpeed: 3000,
                dots: true,
                arrows: false,
                responsive: [
                    {
                        breakpoint: 900,
                        settings: {
                            slidesPerRow: 3,
                            rows: 2,
                        },
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesPerRow:2,
                            rows: 2,
                        },
                    },
                ],
            });
        }

        if(document.body.offsetWidth <= 450){
            $(".coso__slide").slick({
                infinite: true,
                slidesToShow:1,
                slidesToScroll: 1,
                speed: 1200,
                autoplay: true,
                autoplaySpeed: 3000,
                dots: true,
                arrows: false,
            });
        }
    }
}