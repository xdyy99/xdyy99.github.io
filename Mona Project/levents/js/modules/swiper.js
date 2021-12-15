export default function SSwiper() {
  if (window.innerWidth <= 480) {
    let disable = document.querySelectorAll('.mobileDis');
    disable.forEach((el) => {
      el.classList.remove('swiper-chung');
    });
  }
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
    let mouse = false;
    if (direction && window.innerWidth > 480) {
      sDir = 'vertical';
      mouse = true;
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
        mousewheel: mouse,
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
        swiper.slidesPerView = '1';
      }
    } else if (sItem.length >= 1) {
      sItem[0].classList.add('swiper-slide-active');
    }
  });

  let popSlide = document.querySelectorAll('.swiper-pop');
  popSlide.forEach((s, i, a) => {
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
      checkItem++;
    });

    if (checkItem > 1) {
      //enable swiper
      sNext.style.display = 'block';
      sPrev.style.display = 'block';

      let swiper = new Swiper(sCon, {
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
    } else if (sItem.length == 1) {
      sItem[0].classList.add('swiper-slide-active');
    }
  });

  let pSlide = document.querySelectorAll('.swiper-pro');
  pSlide.forEach((s, i, a) => {
    let sCon = s.querySelector('.swiper-container');
    let sPag = s.querySelector('.swiper-pagination');
    let sNext = s.querySelector('.swiper-button-next');
    let sPrev = s.querySelector('.swiper-button-prev');

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
        loop: sLoop,
        slidesPerView: 'auto',
        observer: true,
        observeParents: true,
        observeSlideChildren: true,
        speed: 500,
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

  let ban = document.querySelectorAll('.swiper-ban');
  ban.forEach((s, i, a) => {
    let con = s.querySelector('.swiper-container');
    //enable thumb
    let thumb = document.querySelector('.swiper-thumb .swiper-container');
    let swiper2 = new Swiper(thumb, {
      loop: true,
      slidesPerView: 3,
      centeredSlides: true,
      watchSlidesProgress: true,
      speed: 500,
      spaceBetween: 10,
      breakpoints: {
        1201: {
          spaceBetween: 20,
          slidesPerView: 5,
        },
      },
    });

    //enable swiper
    let swiper = new Swiper(con, {
      loop: true,
      slidesPerView: 1,
      effect: 'fade',
      speed: 500,
      watchSlidesProgress: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },

      thumbs: {
        swiper: swiper2,
      },
    });
  });
}
