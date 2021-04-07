export default function newsSlider() {
    let slideN = document.querySelector(".news__slide");
    if(slideN){
        $('.news__slide').slick({
            infinite: true,
            slidesToShow: 3,
            slidesToScroll:3,
            speed: 1200,
            autoplay: true,
            autoplaySpeed: 3000,
            dots: true,
            arrows:false,
            responsive: [
                  {
                    breakpoint: 800,
                    settings: {
                      slidesToShow: 2,
                      slidesToScroll:2,
                    }
                  },
                  {
                    breakpoint: 500,
                    settings: {
                      slidesToShow: 1,
                      slidesToScroll:1,
                    }
                  }
            ]
        });
    }
}