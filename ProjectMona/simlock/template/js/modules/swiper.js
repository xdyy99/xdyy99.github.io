export default function SSwiper() {
  let Slide = document.querySelectorAll('.swiper-chung');
  Slide.forEach((s, i, a) => {
    let sCon = s.querySelector('.swiper-container');
    let sPag = s.querySelector('.swiper-pagination');
    let sNext = s.querySelector('.swiper-button-next');
    let sPrev = s.querySelector('.swiper-button-prev');
    let cter = s.querySelector('.autocenter');
    // fade
    let fade = s.querySelector('.sFade');
    let sEffect = 'slide';
    if (fade) {
      sEffect = 'fade';
    }
    // direction
    let direction = s.querySelector('.sVer');
    let sDir = 'horizontal';
    if (direction) {
      sDir = 'vertical';
    }

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
      sNext.style.display = 'block';
      sPrev.style.display = 'block';

      let swiper = new Swiper(sCon, {
        direction: sDir,
        loop: sLoop,
        slidesPerView: 'auto',
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        effect: sEffect,
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
        // Navigation arrows
        navigation: {
          nextEl: sNext,
          prevEl: sPrev,
        },
      });
      // move slide to center
      if (cter) {
        swiper.slideTo(1);
      }
      if (direction) {
        swiper.allowTouchMove = false;
      }
    } else if (sItem.length >= 1) {
      sItem[0].classList.add('swiper-slide-active');
    }
  });

  let mulSlide = document.querySelectorAll('.swiper-row');
  mulSlide.forEach((s, i, a) => {
    let sCon = s.querySelector('.swiper-container');
    let sPag = s.querySelector('.swiper-pagination');
    let sNext = s.querySelector('.swiper-button-next');
    let sPrev = s.querySelector('.swiper-button-prev');
    let cter = s.querySelector('.autocenter');

    // check Item to enable slide
    let sItem = s.querySelectorAll('.swiper-slide');
    let checkItem = 0;
    sItem.forEach((i) => {
      checkItem += i.offsetWidth;
    });
    checkItem = checkItem / 2;
    if (checkItem > sCon.offsetWidth) {
      // enable swiper
      sNext.style.display = 'block';
      sPrev.style.display = 'block';
      let swiper = new Swiper(sCon, {
        slidesPerGroup: 2,
        slidesPerView: 2,
        slidesPerColumn: 2,
        slidesPerColumnFill: 'row',

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
          type: 'progressbar',
        },

        // Navigation arrows
        navigation: {
          nextEl: sNext,
          prevEl: sPrev,
        },
        breakpoints: {
          600: {
            slidesPerGroup: 3,
            slidesPerView: 3,
          },
          768: {
            slidesPerGroup: 4,
            slidesPerView: 4,
          },
          1024: {
            slidesPerGroup: 5,
            slidesPerView: 5,
          },
        },
      });
    } else if (sItem.length >= 1) {
      sItem[0].classList.add('swiper-slide-active');
    }
  });

  let dSlide = document.querySelectorAll('.swiper-detail');
  dSlide.forEach((s) => {
    let sThumb = s.querySelector('.swiper-thumbs .swiper-container');
    let sMain = s.querySelector('.swiper-main .swiper-container');
    let sPrev = s.querySelector('.swiper-main .swiper-button-prev');
    let sNext = s.querySelector('.swiper-main .swiper-button-next');
    let sPag = s.querySelector('.swiper-main .swiper-pagination');

    var slideThumb = new Swiper(sThumb, {
      speed: 1200,
      autoplay: {
        delay: 5000,
      },
      effect: 'fade',
      slidesPerView: 1,
    });
    var slideMain = new Swiper(sMain, {
      speed: 1200,
      autoplay: {
        delay: 5000,
      },
      slidesPerView: 'auto',
      navigation: {
        nextEl: sNext,
        prevEl: sPrev,
      },
      pagination: {
        el: sPag,
        clickable: true,
      },

      thumbs: {
        swiper: slideThumb,
      },
    });
  });
}
