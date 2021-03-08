////////////// banner slick slide //////////////
$(document).ready(function(){
    $('.readSlide').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1000,
        cssEase: 'linear'
    });
  });