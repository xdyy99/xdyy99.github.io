export default function SwiperModule() {
    /** SWIPER */
    // RUN SLIDER IN MOBILE
    let sliderMobileList = [];
    function sliderMobile() {
        var screenWidth = $(window).width();
        if (screenWidth > 768 && sliderMobileList.length !== 0) {
            sliderMobileList.map((s) => s.destroy());
            sliderMobileList = [];
            $(".swiper-wrapper").removeAttr("style");
            $(".swiper-slide").removeAttr("style");
        } else if (screenWidth <= 768 && sliderMobileList.length === 0) {
            $(".is-slider-mobile").each(function () {
                const $this = $(this);
                const $swiper = $this.find(".swiper-container");
                const nextBtn = $this.find(".swiper-button-next");
                const prevBtn = $this.find(".swiper-button-prev");
                const pagination = $this.find(".swiper-pagination");
                const isLoop = $this.hasClass("--loop") || false;
                const isParallax = $this.hasClass("--parallax") || false;
                const isCenter = $this.hasClass("--center") || false;
                const isAuto =
                    ($this.hasClass("--auto") && {
                        speed: 6000,
                        delay: 5000,
                        disableOnInteraction: false,
                    }) ||
                    false;
                const tempSwiper = new Swiper($swiper, {
                    speed: 1200,
                    // autoHeight: false,
                    autoplay: isAuto,
                    spaceBetween: 6,
                    slidesPerView: 2,
                    slidesPerGroup: 2,
                    watchSlidesProgress: true,
                    // TRIGGER SWIPER RUN ASYNCHRONOUS
                    observer: true,
                    observeParents: true,
                    observeSlideChildren: true,
                    pagination: {
                        el: pagination,
                        clickable: true,
                    },
                    navigation: {
                        nextEl: nextBtn,
                        prevEl: prevBtn,
                    },
                    centeredSlides: isCenter,
                    parallax: isParallax,
                    loop: isLoop,
                    breakpoints: {
                        501: {
                            spaceBetween: 12,
                            slidesPerGroup: 4,
                            slidesPerView: 4,
                            slidesPerColumn: 2,
                            slidesPerColumnFill: "row",
                        },
                    },
                });
                sliderMobileList.push(tempSwiper);
            });
        }
    }
    $(".is-slider-mobile").length && sliderMobile();
    $(window).on("resize", function () {
        $(".is-slider-mobile").length && sliderMobile();
    });
    // RUN SLIDER IN MOBILE - END

    // SLIDER COMMON
    function swiper(el, callback = null) {
        const $this = $(el);
        const $swiper = $this.find(".swiper-container");
        const nextBtn = $this.find(".swiper-button-next");
        const prevBtn = $this.find(".swiper-button-prev");
        const pagination = $this.find(".swiper-pagination");
        const isLoop = $this.hasClass("--loop") || false;
        const isParallax = $this.hasClass("--parallax") || false;
        const isAuto =
            ($this.hasClass("--auto") && {
                speed: 6000,
                delay: 5000,
                disableOnInteraction: false,
            }) ||
            false;
        const isCenter = $this.hasClass("--center") || false;

        const swiper_common = new Swiper($swiper, {
            speed: 1200,
            // autoHeight: false,
            autoplay: isAuto,
            slidesPerView: "auto",
            watchSlidesProgress: true,
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            pagination: {
                el: pagination,
                clickable: true,
            },
            navigation: {
                nextEl: nextBtn,
                prevEl: prevBtn,
            },
            centeredSlides: isCenter,
            parallax: isParallax,
            loop: isLoop,
            on: {
                slideChange: function () {
                    callback && callback.call(this);
                    if (this.params.loop && $(".is-lightgallery").length) {
                        $(".is-lightgallery")
                            .data("lightGallery")
                            .destroy(true);
                        $(".is-lightgallery").lightGallery({
                            thumbnail: true,
                        });
                    }
                },
            },
        });
    }
    function runSwiperCommon(el) {
        $(el).each((_, s) => {
            swiper(s);
        });
    }
    $(".is-slider.is-slider-common").length &&
        runSwiperCommon(".is-slider.is-slider-common");
    // SLIDER COMMON - END

    // PARTNERS
    function partnersSlider(el) {
        const $this = $(el);
        const $swiper = $this.find(".swiper-container");
        const nextBtn = $this.find(".swiper-button-next");
        const prevBtn = $this.find(".swiper-button-prev");
        const pagination = $this.find(".swiper-pagination");
        const isAuto =
            ($this.hasClass("--auto") && {
                speed: 6000,
                delay: 5000,
                disableOnInteraction: false,
            }) ||
            false;
        const swiper_common = new Swiper($swiper, {
            speed: 1200,
            // autoHeight: false,
            autoplay: isAuto,
            slidesPerGroup: 3,
            slidesPerView: 3,
            slidesPerColumn: 2,
            slidesPerColumnFill: "row",
            watchSlidesProgress: true,
            observer: true,
            observeParents: true,
            observeSlideChildren: true,
            pagination: {
                el: pagination,
                clickable: true,
            },
            navigation: {
                nextEl: nextBtn,
                prevEl: prevBtn,
            },
            breakpoints: {
                501: {
                    spaceBetween: 5,
                    slidesPerGroup: 4,
                    slidesPerView: 4,
                    slidesPerColumn: 2,
                    slidesPerColumnFill: "row",
                },
                992: {
                    spaceBetween: 5,
                    slidesPerGroup: 5,
                    slidesPerView: 5,
                    slidesPerColumn: 2,
                    slidesPerColumnFill: "row",
                },
            },
        });
    }
    $(".partners .is-slider").length && partnersSlider(".partners .is-slider");

    // PROGRESS
    function unActiveYears(m) {
        Array.from(m.slides).forEach((s) => {
            s.querySelector(".progress-years-item").classList.remove(
                "--active"
            );
            s.querySelector(".progress-years-item").classList.remove("--stop");
        });
    }
    function activeYears(endLoop, m) {
        for (let i = 0; i <= endLoop; i++) {
            m.slides[i]
                .querySelector(".progress-years-item")
                .classList.add("--active");
            if (i === endLoop) {
                m.slides[i]
                    .querySelector(".progress-years-item")
                    .classList.add("--stop");
            }
        }
    }
    function setWidthProgressLine() {
        const screenWidth = $(window).width();
        const containerWidth = $(".progress .container").width();
        const itemActive = $(".progress-years-item.--active.--stop");
        // LẤY SCREEN WIDTH TRỪ CHO CONTAINER SẼ RA ĐƯỢC KHOẢNG CÁCH 2 BÊN
        const lostDistance = (screenWidth - containerWidth) / 2;
        // OFFSET LEFT TÍNH TỪ BÊN TRÁI MÀN HÌNH ĐẾN VỊ TRÍ CHẤM TRÒN
        const offsetLeftOfCircle = itemActive.find(".circle").offset().left;
        // OFFSET LEFT TRỪ CHO KHOẢNG CÁCH PHÍA TRÊN SẼ RA ĐƯỢC WIDTH CẦN TÌM
        const yearsLineWidth = offsetLeftOfCircle - lostDistance;
        $(".progress-years-line").css("width", yearsLineWidth);
    }
    function progressSlider() {
        const thumbsS = new Swiper(".progress-thumbs .swiper-container", {
            init: false,
            speed: 800,
            slidesPerView: "auto",
            // followFinger: false,
            // allowTouchMove: false,
            // simulateTouch: false,
        });
        const mainS = new Swiper(".progress-years .swiper-container", {
            speed: 800,
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 10,
            followFinger: false,
            navigation: {
                nextEl: $(".progress-years .swiper-button-next"),
                prevEl: $(".progress-years .swiper-button-prev"),
            },
            thumbs: {
                swiper: thumbsS,
            },
            breakpoints: {
                501: {
                    slidesPerView: 5,
                    slidesPerGroup: 5,
                },
                1025: {
                    slidesPerView: 7,
                    slidesPerGroup: 7,
                },
            },
        });
        $(".progress-years-item").on("click", function () {
            const endLoop = $(this).attr("data-id");
            thumbsS.slideTo(endLoop);
        });
        thumbsS.on("init", function () {
            const endLoop = this.params.loop
                ? this.activeIndex
                : this.realIndex;
            unActiveYears(mainS);
            activeYears(endLoop, mainS);
            setTimeout(() => {
                setWidthProgressLine();
            }, 1000);
        });
        thumbsS.on("slideChangeTransitionStart", function () {
            const endLoop = this.params.loop
                ? this.activeIndex
                : this.realIndex;
            unActiveYears(mainS);
            activeYears(endLoop, mainS);
        });
        thumbsS.on("slideChangeTransitionEnd", function () {
            setWidthProgressLine();
        });
        thumbsS.init();
    }
    $(".progress-years .is-slider").length &&
        $(".progress-thumbs .is-slider").length &&
        progressSlider();
    /** SWIPER - END*/
}
