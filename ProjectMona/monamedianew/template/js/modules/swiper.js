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
          type: 'progressbar',
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

  let lead = document.querySelectorAll('.swiper-lead');
  lead.forEach((s, i, a) => {
    let sCon = s.querySelector('.swiper-container');
    let sPag = s.querySelector('.swiper-pagination');
    let sNext = s.querySelector('.swiper-button-next');
    let sPrev = s.querySelector('.swiper-button-prev');

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
        slidesPerGroup: 1,
        slidesPerView: 1,
        slidesPerColumn: 1,
        slidesPerColumnFill: 'collumn',
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        spaceBetween: 15,
        speed: 1200,

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
          400: {
            slidesPerGroup: 1,
            slidesPerView: 2,
            slidesPerColumn: 2,
            slidesPerColumnFill: 'row',
          },
          768: {
            slidesPerGroup: 3,
            slidesPerView: 3,
            slidesPerColumn: 2,
            slidesPerColumnFill: 'row',
            spaceBetween: 30,
          },
        },
      });
    } else if (sItem.length >= 1) {
      s.classList.add('no-slide');
      sItem[0].classList.add('swiper-slide-active');
    }
  });

  let member = document.querySelectorAll('.swiper-member');
  member.forEach((s, i, a) => {
    let sCon = s.querySelector('.swiper-container');
    let sPag = s.querySelector('.swiper-pagination');
    let sNext = s.querySelector('.swiper-button-next');
    let sPrev = s.querySelector('.swiper-button-prev');

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
        slidesPerView: 2,
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        spaceBetween: 15,
        speed: 1200,
        loop: true,

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
            slidesPerView: 3,
          },
          768: {
            slidesPerView: 4,
            spaceBetween: 30,
          },
        },
      });
      if (window.innerWidth > 1200) {
        swiper.slideTo(2);
      }
    } else if (sItem.length >= 1) {
      sItem[0].classList.add('swiper-slide-active');
    }
  });

  let project = document.querySelectorAll('.swiper-project');
  project.forEach((s, i, a) => {
    let sCon = s.querySelector('.swiper-container');
    let sPag = s.querySelector('.swiper-pagination');
    let sNext = s.querySelector('.swiper-button-next');
    let sPrev = s.querySelector('.swiper-button-prev');

    // check Item to enable slide
    let sItem = s.querySelectorAll('.swiper-slide');
    let checkItem = 0;
    sItem.forEach((i) => {
      checkItem += i.offsetWidth;
    });
    let sLoop = false;
    let sEffect = 'fade';
    if (window.innerWidth <= 768) {
      sLoop = !sLoop;
      sEffect = 'slide';
    }
    if (checkItem > sCon.offsetWidth) {
      //enable swiper
      sNext.style.display = 'block';
      sPrev.style.display = 'block';

      let swiper = new Swiper(sCon, {
        slidesPerView: 'auto',
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        effect: sEffect,
        loop: sLoop,
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
      });
    } else if (sItem.length >= 1) {
      sItem[0].classList.add('swiper-slide-active');
    }
  });
  ``;
}
