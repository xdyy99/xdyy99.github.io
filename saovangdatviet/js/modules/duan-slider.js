
export default function duanSlider() {
    let slideDA = document.querySelector(".duan__slide");
    if(slideDA){
        $('.duan__slide').slick({
            infinite: true,
            slidesToShow: 2,
            slidesToScroll:1,
            speed: 1200,
            autoplay: true,
            autoplaySpeed: 3000,
            dots: true,
            arrows:false,
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