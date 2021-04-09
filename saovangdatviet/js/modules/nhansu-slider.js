export default function nhansuSlider() {
    let slideNS = document.querySelector(".nhansu__slide");
    if (slideNS) {
        if(document.body.offsetWidth > 450){
            $(".nhansu__slide").slick({
                infinite: true,
                slidesPerRow: 4,
                rows: 2,
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
                        },
                    },
                    {
                        breakpoint: 600,
                        settings: {
                            slidesPerRow:2,
    
                        },
                    },
                ],
            });
        }
            if(document.body.offsetWidth <= 450){
                $(".nhansu__slide").slick({
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
