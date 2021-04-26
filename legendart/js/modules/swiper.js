export default function SSwiper() {
    const Slide = document.querySelectorAll(".swiper-chung");
    if (Slide) {
        for (let i = 0; i < Slide.length; i++) {
            let sCon = Slide[i].querySelector(".swiper-container");
            let sPag = Slide[i].querySelector(".swiper-pagination");
            let sNext = Slide[i].querySelector(".swiper-button-next");
            let sPrev = Slide[i].querySelector(".swiper-button-prev");
            let cter = Slide[i].querySelector(".autocenter");
            let sCheckLoop = Slide[i].querySelector(".noloop");
            let sLoop = true;
            if (sCheckLoop) {
                sLoop = false;
            }

            let sItem = Slide[i].querySelectorAll(".swiper-slide");
            let sumIt = 0;
            for (let a = 0; a < sItem.length; a++) {
                sumIt += sItem[a].offsetWidth;
            }

            if (sumIt > sCon.offsetWidth) {
                sNext.style.display = "block";
                sPrev.style.display = "block";
                const swiper = new Swiper(sCon, {
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
                if (cter) {
                    swiper.slideTo(1);
                }
            }
        }
    }
    const SlideMul = document.querySelectorAll(".swiper-row");
    if (SlideMul) {
        for (let i = 0; i < SlideMul.length; i++) {
            let sCon = SlideMul[i].querySelector(".swiper-container");
            let sPag = SlideMul[i].querySelector(".swiper-pagination");
            let sNext = SlideMul[i].querySelector(".swiper-button-next");
            let sPrev = SlideMul[i].querySelector(".swiper-button-prev");
            let sItem = SlideMul[i].querySelectorAll(".swiper-slide");
            let sumIt = 0;
            for (let a = 0; a < sItem.length / 2; a++) {
                sumIt += sItem[a].offsetWidth;
            }

            if (sumIt > sCon.offsetWidth) {
                sNext.style.display = "block";
                sPrev.style.display = "block";
                const swiper = new Swiper(sCon, {
                    // loop: true,
                    slidesPerGroup: 2,
                    slidesPerView: 2,
                    slidesPerColumn: 2,
                    slidesPerColumnFill: "row",

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
}
