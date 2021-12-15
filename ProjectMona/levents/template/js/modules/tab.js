export default function tab() {
  let tab = document.querySelectorAll(".tab");
  tab.forEach((t, iTab, a) => {
    let tSwiper = Array;
    let tThumbs = Array;
    let tBtn = t.querySelectorAll(".tabBtn");
    let tPanel = t.querySelectorAll(".tab__panel");
    let tSlide = t.querySelectorAll(".swiper-tab");
    let dSlide = t.querySelectorAll(".swiper-detail-tab");

    // for detail slide in tab
    dSlide.forEach((s, iSlide, a) => {
      let sThumbs = s.querySelector(".swiper-thumbs .swiper-container");
      let sMain = s.querySelector(".swiper-detail .swiper-container");
      let sPrev = s.querySelector(".swiper-detail .swiper-button-prev");
      let sNext = s.querySelector(".swiper-detail .swiper-button-next");

      tThumbs[iSlide] = new Swiper(sThumbs, {
        speed: 1200,
        autoplay: {
          delay: 5000,
        },
        slidesPerView: "auto",
      });
      tSwiper[iSlide] = new Swiper(sMain, {
        speed: 1200,
        autoplay: {
          delay: 5000,
        },
        slidesPerView: "auto",
        navigation: {
          nextEl: sNext,
          prevEl: sPrev,
        },

        thumbs: {
          swiper: tThumbs[iSlide],
        },
      });
    });

    // for slide in tab
    tSlide.forEach((s, iSlide, a) => {
      let sCon = s.querySelector(".swiper-container");
      let sPag = s.querySelector(".swiper-pagination");
      let sNext = s.querySelector(".swiper-button-next");
      let sPrev = s.querySelector(".swiper-button-prev");
      let cter = s.querySelector(".autocenter");
      // loop
      let sCheckLoop = s.querySelector(".noloop");
      let sLoop = true;
      if (sCheckLoop) {
        sLoop = false;
      }
      // check Item to enable slide
      let sItem = s.querySelectorAll(".swiper-slide");
      let checkItem = 0;
      sItem.forEach((i) => {
        checkItem += i.offsetWidth;
      });

      if (checkItem > sCon.offsetWidth) {
        //enable swiper
        sNext.style.display = "block";
        sPrev.style.display = "block";

        tSwiper[iSlide] = new Swiper(sCon, {
          loop: sLoop,
          slidesPerView: "auto",
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
        });
        // move slide to center
        if (cter) {
          swiper.slideTo(1);
        }
        // only when active
        tSwiper[iSlide].autoplay.stop();
      } else if (sItem.length == 1) {
        sItem[0].classList.add("swiper-slide-active");
      }
    });

    // for tab
    if (tBtn.length !== 0 && tPanel.length === tBtn.length) {
      tBtn[0].classList.add("active");
      tPanel[0].classList.add("active");

      if (tSlide.length > 0) {
        tSwiper[0].autoplay.start();
      }
      if (dSlide.length > 0) {
        tSwiper[0].autoplay.start();
        tThumbs[0].autoplay.start();
      }

      for (let i = 0; i < tBtn.length; i++) {
        console.log(tPanel[0].offsetHeight);
        tBtn[i].addEventListener("click", showPanel);

        function showPanel() {
          for (let a = 0; a < tBtn.length; a++) {
            tBtn[a].classList.remove("active");
            tPanel[a].classList.remove("active");
            if (tSlide.length > 0) {
              tSwiper[a].autoplay.stop();
            }
            if (dSlide.length > 0) {
              tSwiper[a].autoplay.stop();
              tThumbs[a].autoplay.stop();
            }
          }
          tBtn[i].classList.add("active");
          tPanel[i].classList.add("active");
          if (tSlide.length > 0) {
            tSwiper[i].autoplay.start();
          }
          if (dSlide.length > 0) {
            tSwiper[i].autoplay.start();
            tThumbs[i].autoplay.start();
          }
        }
      }
    }
  });
}
