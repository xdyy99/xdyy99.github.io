export default function doitacSlider() {
    let slideDT = document.querySelector(".doitac__slide");
    if(slideDT){
        $('.doitac__slide').slick({
            infinite: true,
            slidesToShow: 6,
            slidesToScroll:6,
            speed: 1200,
            autoplay: true,
            autoplaySpeed: 3000,
            dots: true,
            arrows:false,
            responsive: [
                {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 5,
                    slidesToScroll:5,
                  }
                },
                {
                    breakpoint: 1000,
                    settings: {
                      slidesToShow: 4,
                      slidesToScroll:4,
                    }
                  },
                  {
                    breakpoint: 700,
                    settings: {
                      slidesToShow: 3,
                      slidesToScroll:3,
                    }
                  },
                  {
                    breakpoint: 500,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll:2,
                    }
                  }
            ]
        });
    }
}