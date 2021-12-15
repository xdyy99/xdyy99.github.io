export default function SSwiper() {
  let ban = document.querySelectorAll('.swiper-ban');
  ban.forEach((s, i, a) => {
    let con = s.querySelector('.swiper-container');
    let next = s.querySelector('.swiper-button-next');
    let prev = s.querySelector('.swiper-button-prev');
    let item = s.querySelectorAll('.swiper-slide');

    //enable thumb
    let thumb = document.querySelector('.swiper-name .swiper-container');
    let swiper2 = new Swiper(thumb, {
      loop: true,
      slidesPerView: 1,
      centeredSlides: false,
      freeMode: true,
      watchSlidesProgress: true,
      speed: 1200,
      allowTouchMove: false,
      breakpoints: {
        768: {
          slidesPerView: 3,
          centeredSlides: true,
        },
      },
    });

    //enable swiper
    next.style.display = 'block';
    prev.style.display = 'block';
    let swiper = new Swiper(con, {
      loop: true,
      slidesPerView: 1,
      effect: 'fade',
      speed: 1200,

      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: next,
        prevEl: prev,
      },

      thumbs: {
        swiper: swiper2,
      },
    });

    //
    let bAct = s.querySelector('.banAct');
    let bNext = s.querySelector('.banNext');
    //
    bAct.innerHTML = 1;
    bNext.innerHTML = 2;

    swiper.on('slideChange', function () {
      let num = swiper.realIndex;
      bAct.innerHTML = num + 1;
      let a = num + 2;
      if (a > item.length) {
        bNext.innerHTML = 1;
      } else {
        bNext.innerHTML = a;
      }
    });
  });

  let Slide = document.querySelectorAll('.swiper-chung');
  Slide.forEach((s, i, a) => {
    let sCon = s.querySelector('.swiper-container');
    let sPag = s.querySelector('.swiper-pagination');
    let next = s.querySelector('.swiper-button-next');
    let prev = s.querySelector('.swiper-button-prev');

    // loop
    let sCheckLoop = s.querySelector('.noloop');
    let sLoop = true;
    if (sCheckLoop) {
      sLoop = false;
    }
    // check Item to enable slide
    let sItem = s.querySelectorAll('.swiper-slide');
    let checkItem = 0;
    sItem.forEach((i) => {
      checkItem += i.offsetWidth;
    });

    if (checkItem > sCon.offsetWidth) {
      //enable swiper

      let swiper = new Swiper(sCon, {
        loop: sLoop,
        slidesPerView: 'auto',
        observer: true,
        observeParents: true,
        observeSlideChildren: true,

        speed: 1200,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        // Navigation dot
        pagination: {
          el: sPag,
          clickable: true,
        },
        navigation: {
          nextEl: next,
          prevEl: prev,
        },
      });
      // move slide to center
    } else if (sItem.length >= 1) {
      sItem[0].classList.add('swiper-slide-active');
    }
  });

  let Slide2 = document.querySelectorAll('.swiper-pg');
  Slide2.forEach((s, i, a) => {
    let sCon = s.querySelector('.swiper-container');
    let sPag = s.querySelector('.swiper-pagination');
    let next = s.querySelector('.swiper-button-next');
    let prev = s.querySelector('.swiper-button-prev');

    // check Item to enable slide
    let sItem = s.querySelectorAll('.swiper-slide');
    let checkItem = 0;
    sItem.forEach((i) => {
      checkItem += i.offsetWidth;
    });

    if (checkItem > sCon.offsetWidth) {
      //enable swiper

      let swiper = new Swiper(sCon, {
        loop: false,
        slidesPerView: 'auto',
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        speed: 1200,

        // Navigation progress
        pagination: {
          el: '.swiper-pagination',
          type: 'progressbar',
        },
      });
    }
  });
}
