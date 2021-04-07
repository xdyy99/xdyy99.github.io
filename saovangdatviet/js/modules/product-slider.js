export default function productSlider() {
    let slidePro = document.querySelector(".product__slide");
    if(slidePro){
        $('.product__slide').slick({
            infinite: true,
            slidesToShow: 4,
            slidesToScroll:1,
            speed: 1200,
            autoplay: true,
            autoplaySpeed: 3000,
            dots: true,
            responsive: [
                {
                  breakpoint: 1024,
                  settings: {
                    slidesToShow: 3,
                  }
                },
                {
                    breakpoint: 800,
                    settings: {
                      slidesToShow: 2,
                    }
                  },
                  {
                    breakpoint: 600,
                    settings: {
                      slidesToShow: 1,
                    }
                  }
            ]
        });
    }
}