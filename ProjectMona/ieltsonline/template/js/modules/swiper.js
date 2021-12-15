export default function SSwiper() {
  var Slide = document.querySelectorAll('.swiper-chung');
  if (Slide) {
    for (let i = 0; i < Slide.length; i++) {
      let sCon = Slide[i].querySelector('.swiper-container');
      let sPag = Slide[i].querySelector('.swiper-pagination');
      let sNext = Slide[i].querySelector('.swiper-button-next');
      let sPrev = Slide[i].querySelector('.swiper-button-prev');

      let cter = Slide[i].querySelector('.autocenter');

      let fade = Slide[i].querySelector('.sFade');
      let sEffect = '';
      if (fade) {
        sEffect += 'fade';
      } else {
        sEffect += 'slide';
      }

      let sCheckLoop = Slide[i].querySelector('.noloop');
      let sLoop = true;
      if (sCheckLoop) {
        sLoop = false;
      }

      let sItem = Slide[i].querySelectorAll('.swiper-slide');

      if (sItem.length > 1) {
        sNext.style.display = 'block';
        sPrev.style.display = 'block';
        var swiper = new Swiper(sCon, {
          loop: sLoop,
          slidesPerView: 'auto',
          observer: true,
          observeParents: true,
          observeSlideChildren: true,
          effect: sEffect,
          speed: 1200,
          autoplay: {
            delay: 7000,
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
        if (cter) {
          swiper.slideTo(1);
        }
      } else if (sItem.length === 1) {
        sItem[0].classList.add('swiper-slide-active');
      }
    }
  }

  var SlideMul = document.querySelectorAll('.swiper-row');
  if (SlideMul) {
    for (let i = 0; i < SlideMul.length; i++) {
      let sCon = SlideMul[i].querySelector('.swiper-container');
      let sPag = SlideMul[i].querySelector('.swiper-pagination');
      let sNext = SlideMul[i].querySelector('.swiper-button-next');
      let sPrev = SlideMul[i].querySelector('.swiper-button-prev');

      let sItem = SlideMul[i].querySelectorAll('.swiper-slide');
      let sMin = SlideMul[i].getAttribute('data-min-slide');
      if (sItem.length > sMin) {
        sNext.style.display = 'block';
        sPrev.style.display = 'block';
        var swiper = new Swiper(sCon, {
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
            clickable: true,
          },

          // Navigation arrows
          navigation: {
            nextEl: sNext,
            prevEl: sPrev,
          },
          breakpoints: {
            768: {
              slidesPerGroup: 3,
              slidesPerView: 3,
            },
          },
        });
      }
    }
  }

  var body = document.body;
  var html = document.documentElement;
  var sTest = document.querySelectorAll('.swiper-test');
  sTest.forEach((el) => {
    let prev = el.querySelector('.swiper-test-prev');
    let next = el.querySelector('.swiper-test-next');
    let con = el.querySelector('.swiper-container');

    var swiper = new Swiper(con, {
      slidesPerView: 1,
      effect: 'fade',
      autoHeight: true,
      observer: true,
      observeParents: true,
      observeSlideChildren: true,

      speed: 1200,
      simulateTouch: false,
      // Navigation arrows
      navigation: {
        nextEl: next,
        prevEl: prev,
      },
    });

    let pag = el.querySelectorAll('.swiper-test-pag');
    function actPag(x) {
      pag.forEach((px) => {
        px.classList.remove('active');
      });
      pag[x].classList.add('active');
    }
    pag.forEach((p, i) => {
      p.addEventListener('click', () => {
        swiper.slideTo(i);
        body.scrollTop = 90;
        html.scrollTop = 90;
      });
    });
    prev.addEventListener('click', () => {
      body.scrollTop = 90;
      html.scrollTop = 90;
      let x = swiper.activeIndex;
      actPag(x);
    });
    next.addEventListener('click', () => {
      body.scrollTop = 90;
      html.scrollTop = 90;
      let x = swiper.activeIndex;
      actPag(x);
    });
  });
}
