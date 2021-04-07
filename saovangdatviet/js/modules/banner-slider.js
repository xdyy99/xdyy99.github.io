export default function bannerSlider() {
    ////////////// banner slider //////////////
    let slideBan = document.querySelector(".banner__slider");
    if(slideBan){
        var max = document.querySelectorAll('.banner__item').length;

        $('.banner__slider').slick({
            infinite: true,
            speed: 1200,
            slidesToShow: 1,
            slidesToScroll:1,
            autoplaySpeed: 3000,
            autoplay: true,
            arrows: true,
            customPaging: function (slider, i) {
                return slider.slickCurrentSlide + '/' + (i + 1);
            }
        });
        var prev = document.querySelector('.slick-prev');
        var next = document.querySelector('.slick-next');
        prev.innerHTML =("0"+ max).slice(-2);
        next.innerHTML ="02";
        $('.banner__slider').on('afterChange', function (event, slick, currentSlide) {
            let p = currentSlide;
            let n = currentSlide + 2;

            
            prev.innerHTML = ("0" + p).slice(-2);
            next.innerHTML = ("0" + n).slice(-2);
            if(p === 0) prev.innerHTML =("0"+ max).slice(-2);
            if(n > max) next.innerHTML = "01";
        });
    }
}