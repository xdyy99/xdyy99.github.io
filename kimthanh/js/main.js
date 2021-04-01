$(document).ready(function() {
    /* navbar */
    // var status_nav = "hide";

    $(window).resize(function() {
        var width_scr = $(window).width();
        if (width_scr > 991) {
            $('.navbar').removeClass("hide");
        }
    });

    $('.nav-icon').click(function() {

        if ($(this).hasClass("open")) {
            $(this).removeClass("open");
            $('.navbar').removeClass("active");
            $('.navbar').addClass("hide");
            $(".bg-navbar").fadeOut();
            $(".header").css("background", "white");
            console.log('close');

        } else {
            $(this).addClass("open");
            $('.navbar').removeClass("hide");
            $('.navbar').addClass("active");
            $(".bg-navbar").fadeIn();
            $(".header").css("background", "#0000007d");
            console.log('open');
        }
    });

    $('.header__inner .navbar .navbar-nav li.dropdown').each(function() {
        $(this).find("a").eq(0).append('<i class="far fa-angle-down"></i>');
    });

    $(".navbar").on("click", ".navbar-nav li.dropdown a i.fa-angle-down", function(e) {
        e.preventDefault();
        $(this).parent().parent().find(".sub-menu-wrap").stop().slideToggle();
    });


    $('.introduce__slide').slick({
        dots: true,
        autoplay: true,
        infinite: true,
        speed: 500,
        prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><i class="fal fa-angle-left"></i></button>',
        nextArrow: '<button class="slick-next" aria-label="Next" type="button"><i class="fal fa-angle-right"></i></button>',
        slidesToShow: 4,
        slidesToScroll: 1,

        responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 769,
                settings: {
                    dots: false,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 520,
                settings: {
                    dots: false,
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 414,
                settings: {
                    dots: false,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
            // You can unslick at a given breakpoint now by adding:
            // settings: "unslick"
            // instead of a settings object
        ]
    });
    var widthScr = $(window).width();
    if (widthScr < 1990) {
        $('.slide-product').slick({
            dots: true,
            autoplay: true,
            infinite: true,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><i class="fal fa-angle-left"></i></button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button"><i class="fal fa-angle-right"></i></button>',
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [{
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 1024,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                        infinite: true,
                        dots: true
                    }
                },
                {
                    breakpoint: 991,
                    settings: {
                        dots: true,
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 520,
                    settings: {
                        dots: false,
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 414,
                    settings: {
                        dots: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
                // You can unslick at a given breakpoint now by adding:
                // settings: "unslick"
                // instead of a settings object
            ]
        });
    } else {
        $('.slide-product').slick({
            dots: true,

            autoplay: true,
            infinite: true,

            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button"><i class="fal fa-angle-left"></i></button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button"><i class="fal fa-angle-right"></i></button>',

            speed: 500,

            slidesPerRow: 6,

            rows: 2,

            variableWidth: true,


            responsive: [{

                    breakpoint: 768,

                    settings: {
                        slidesPerRow: 4,
                    }

                },

                {

                    breakpoint: 600,

                    settings: {

                        slidesPerRow: 2

                    }

                },

                {
                    breakpoint: 520,
                    settings: {
                        dots: false,
                        slidesToShow: 2,
                        slidesToScroll: 2
                    }
                },
                {
                    breakpoint: 414,
                    settings: {
                        dots: false,
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }

            ]

        });
    }

    /* custom button slick */

    // var widthScr = $(window).width();
    // if (widthScr > 1920) {
    //     var space_prev = Math.abs(((widthScr - 1920) / 2) + 377);
    //     var space_next = Math.abs(((widthScr - 1920) / 2) + 343);
    //     $('.slide-product.default-slide .slick-prev').css("right", space_prev);
    //     $('.slide-product.default-slide .slick-next').css("right", space_next);
    // } else {
    //     var space_prev = Math.abs(((widthScr - 1920) / 2) + 377);
    //     var space_next = Math.abs(((widthScr - 1920) / 2) + 343);
    //     $('.slide-product.default-slide .slick-prev').css("right", space_prev);
    //     $('.slide-product.default-slide .slick-next').css("right", space_next);
    // }

    // $(window).resize(function() {
    //     var widthScr = $(window).width();
    //     if (widthScr > 1920) {
    //         var space_prev = (((widthScr - 1920) / 2) + 377);
    //         var space_next = (((widthScr - 1920) / 2) + 343);

    //         $('.slide-product.default-slide .slick-prev').css("right", space_prev);
    //         $('.slide-product.default-slide .slick-next').css("right", space_next);
    //     } else {
    //         var space_prev = Math.abs(((widthScr - 1920) / 2) + 377);
    //         var space_next = Math.abs(((widthScr - 1920) / 2) + 343);
    //         $('.slide-product.default-slide .slick-prev').css("right", space_prev);
    //         $('.slide-product.default-slide .slick-next').css("right", space_next);
    //     }
    // });

    /* list tab */
    $('html').on('click', '.sec-product .sidebar .sidebar-list li', function() {
        console.log('click');
        var tab = $(this).attr('data-tab');

        $('.sec-product .sidebar .sidebar-list li').removeClass('active');

        $(this).addClass('active');

        $('.sec-product .slide-product').hide();

        $('html').find('.sec-product .slide-product#' + tab).fadeIn('slow');

        $('.slide-product').slick('refresh');
        // var widthScr = $(window).width();
        // if (widthScr > 1920) {
        //     var space_prev = ((widthScr - 1920) / 2) + 377;
        //     var space_next = ((widthScr - 1920) / 2) + 343;
        //     $('.slide-product.default-slide .slick-prev').css("right", space_prev);
        //     $('.slide-product.default-slide .slick-next').css("right", space_next);
        //     $('.slide-product.default-slide .slick-arrow').addClass("opacity");
        // } else {
        //     var space_prev = ((widthScr - 1920) / 2) + 377;
        //     var space_next = ((widthScr - 1920) / 2) + 343;
        //     $('.slide-product.default-slide .slick-prev').css("right", space_prev);
        //     $('.slide-product.default-slide .slick-next').css("right", space_next);
        //     $('.slide-product.default-slide .slick-arrow').addClass("opacity");
        // }

    });


    function list_tab() {
        $('html').on('click', '.td-tab .td-list li', function() {
            console.log('aaa');
            var tab = $(this).attr('data-tab');
            if ($(this).hasClass("active")) {
                $(this).find("span.icon").html('<i class="fal fa-angle-down"></i>');
                // $(this).find('.td-tab .td-list .td-content#' + tab).stop().slideUp();
                $(this).removeClass("active");
            } else {

                $('.td-tab .td-list li span.icon').html('<i class="fal fa-angle-down"></i>');

                $('.td-tab .td-list li').removeClass('active');

                $('.td-tab .td-list .td-content').slideUp();



                $(this).addClass('active');
                $(this).find("span.icon").html('<i class="fal fa-angle-up"></i>');

            }
            $('html').find('.td-tab .td-list .td-content#' + tab).stop().slideToggle();

        });
    }

    function list_tab() {
        $('html').on('click', '.td-tab .td-list li', function() {
            console.log('aaa');
            var tab = $(this).attr('data-tab');
            if ($(this).hasClass("active")) {
                $(this).find("span.icon").html('<i class="fal fa-angle-down"></i>');
                // $(this).find('.td-tab .td-list .td-content#' + tab).stop().slideUp();
                $(this).removeClass("active");
            } else {

                $('.td-tab .td-list li span.icon').html('<i class="fal fa-angle-down"></i>');

                $('.td-tab .td-list li').removeClass('active');

                $('.td-tab .td-list .td-content').slideUp();



                $(this).addClass('active');
                $(this).find("span.icon").html('<i class="fal fa-angle-up"></i>');

            }
            $('html').find('.td-tab .td-list .td-content#' + tab).stop().slideToggle();

        });
    }

    function list_tab_dif() {
        $('html').on('click', '.td-tab .td-list li', function() {
            console.log('click');
            var tab = $(this).attr('data-tab');
            $('.td-tab .td-list li span.icon').html('<i class="fal fa-angle-down"></i>');
            $(this).find("span.icon").html('<i class="fal fa-angle-right"></i>');
            $('.td-tab .td-list li').removeClass('active');

            $(this).addClass('active');
            $('.img-td img').css('opacity', '0');
            $('.content-tab').removeClass('active');

            $('html').find('.content-tab#' + tab).addClass('active');

        });
    }

    list_tab();

    // if (widthScr > 1440) {
    //     $('.td-content').eq(0).show();
    //     list_tab();
    // } else if (widthScr < 1440 && widthScr > 769) {
    //     list_tab_dif();
    // } else if (widthScr < 769) {
    //     list_tab();
    // }

    // $(window).resize(function() {
    //     var w = $(window).width();
    //     if (w > 1440) {
    //         $('.td-content').eq(0).show();
    //         list_tab();
    //     } else if (w < 1440 && w > 769) {
    //         list_tab_dif();
    //     } else if (w < 769) {
    //         list_tab();
    //     }
    // });

    $('.cart-table .table tbody tr').each(function() {
        $(this).find("td").eq(0).attr("data-title", "STT");
        $(this).find("td").eq(1).attr("data-title", "NGÀY");
        $(this).find("td").eq(2).attr("data-title", "MÃ ĐƠN HÀNG");
        $(this).find("td").eq(3).attr("data-title", "SỐ LƯỢNG");
        $(this).find("td").eq(4).attr("data-title", "GIÁ TRỊ ĐƠN HÀNG");
    });

    $('#cart-mobile tr').each(function() {
        $(this).find("td").eq(0).attr("data-title", "STT");
        $(this).find("td").eq(1).attr("data-title", "Tên");
        $(this).find("td").eq(2).attr("data-title", "Đơn vị");
        $(this).find("td").eq(3).attr("data-title", "SỐ LƯỢNG");
        $(this).find("td").eq(4).attr("data-title", "Giá trị");
        $(this).find("td").eq(5).attr("data-title", "Tổng");
    });

    $("html").on("click", ".show-contact", function() {
        $(this).toggleClass("active");
        $('.wrap-map .container').fadeToggle();
    });

    $("html").on("click", ".show-sidebar", function() {
        $(".sec-product .sidebar").stop().slideToggle();

        $(".sec-product .sidebar .sidebar-list li").click(function() {
            $('.sec-product .sidebar').fadeOut();
        });
    });

    $("html").on("click", ".close-sidebar", function() {
        $(".sec-product .sidebar").stop().slideUp();
    });

    $("html").on("click", ".banner .img-motobike .button ", function(e) {
        e.preventDefault();
        var index = $(this).index();
        $(".banner .img-motobike .des-motobike").fadeOut();
        $(".banner .img-motobike .des-motobike").eq(index).stop().fadeToggle();
    });

    $(".cart-table").on("click", ".table tbody tr td .info-product", function() {
        var data = $(this).attr("data-tab");
        $("html").find(".popup-info-product#" + data).fadeIn();
        $(".popup-info-bg").fadeIn();
    });


    $("html").on("click",".popup-info-bg,.popup-info-product .order .close",function() {
        $(".popup-info-bg").fadeOut();
        $(".popup-info-product").fadeOut();
    });

    $(".header .btn-login").click(function(e) {
        e.preventDefault();
        $(".header__inner .navbar .login .sub-menu-wrap").toggleClass("active");
    });

    $(".header .btn-user").click(function(e) {
        e.preventDefault();
        $(".header__inner .navbar .action-user .sub-menu-wrap").toggleClass("active");
    });

    // $(".box-user .user-name").append('<i class="far fa-angle-down"></i>');

    $("a[href$='#sign-up']").click(function() {
        $(".popup-signup,.popup-signup-bg").fadeIn();
    });

    $(".popup-signup-close").click(function() {
        $(".popup-signup,.popup-signup-bg").fadeOut();
        $(".popup-hs").fadeOut();
    });

    $(".popup-signup-bg").click(function() {
        $(this).fadeOut();
        $(".popup-signup").fadeOut();
        $(".popup-hs").fadeOut();
    });

    $("html").on("click", ".td-btn .btn-blue", function() {
        var data = $(this).attr("data-tab");
        $("html").find(".popup-hs#" + data).fadeIn();
        $(".popup-signup-bg").fadeIn();
    });

    $(".box-user .user-name").append('<i class="far fa-angle-down"></i>');

    $("a[href$='#sign-up']").click(function() {
        $(".popup-signup,.popup-signup-bg").fadeIn();
    });

    $(".popup-signup-close").click(function() {
        $(".popup-signup,.popup-signup-bg,.popup-info-bg").fadeOut();
        $(".popup-hs").fadeOut();
    });

    $("html").on("click",".popup-signup-bg",function() {
        $(".popup-signup, .popup-signup-bg").fadeOut();
        $(".popup-hs").fadeOut();
    });


    $("html").on("click", ".td-btn a.show-detail-post", function() {
        var data = $(this).attr("data-tab");
        $("#close-deltail-post").fadeIn("slow");
        $("html").find(".popup-hs#" + data).fadeIn();
        $(".popup-info-bg").fadeIn();
    });

    $(".header__inner .navbar").on("click", " .sub-menu-wrap li a.info-post", function() {
        $('body').css('overflow-y','hidden');

        var data = $(this).attr("data-tab");
        $("html").find(".popup-hs#" + data).fadeIn();
        $(".popup-info-bg").fadeIn();
    });

    $(".popup-info-bg").click(function() {
        $(this).fadeOut();
        $(".popup-hs").fadeOut();
    });

    $("#btn-save").click(function() {
        var length = $(".order tbody tr").length;
        if (length > 0) {
            swal({
                    title: "Xác nhận tạo đơn hàng",
                    text: "",
                    icon: "success",
                    buttons: ["Làm lại", "Tạo đơn"],
                })
                .then((willDelete) => {
                    if (willDelete) {
                        $("#add_product").submit();
                    }
                });
            $(".swal-overlay").find(".swal-button--confirm").attr({
                "name": "submit_order"
            });
        } else {
            swal({
                title: "Bạn chưa chọn sản phẩm !!",
                icon: "warning",
                buttons: 'Đóng',
                cancel: false,
                dangerMode: true,
            })
        }

    });

    $("#btn-login").click(function() {
        swal({
                title: "Xin lỗi bạn !",
                text: "Vui lòng đăng nhập để sử dụng tính năng này",
                icon: "warning",
                buttons: true,
                dangerMode: true,
            })
            .then((willDelete) => {
                if (willDelete) {
                    $("#add_product").submit();
                }
            });
        $(".swal-overlay").find(".swal-button--confirm").attr({
            "name": "submit_order"
        });
    });

    var check_e = $("#fullpage").length;
    if (check_e < 1) {
        $(".header__inner .navbar .navbar-nav li").removeClass("current-menu-item");
    }

    var w_scr = $(window).width();
    if(w_scr < 782) {
        if($("#wpadminbar").length) {
            $(".header").css("top","45px");
            $("#wpadminbar").css("position","fixed");
            $(".box-user").css("top","70px");
            $(".header__inner .navbar").css("padding-top","110px")
        }
    }else {
        if($("#wpadminbar").length) {
            $(".header").css("top","32px");
        }
    }

    $(window).resize(function(){
        var w_scr = $(window).width();
        if(w_scr < 782) {
            if($("#wpadminbar").length) {
                $(".header").css("top","45px");
                $("#wpadminbar").css("position","fixed");
                $(".box-user").css("top","70px");
                $(".header__inner .navbar").css("padding-top","110px")
            }
        }else {
            if($("#wpadminbar").length) {
                $(".header").css("top","32px");
            }
        }
    });


});

    



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// voting star //
    var voteNum = document.querySelector('.voteNum');
    var voteStt = document.querySelector('.voteStt');
    var stt = ["","Rất tệ","Kém","Bình thường","Hài lòng","Rất hài lòng"];
    if( voteNum  && voteStt){
        function vote(num){
            voteNum.innerHTML = num +".0";
            voteStt.innerHTML = stt[num];
            console.log(voteNum.textContent +":" +voteStt.textContent);
        }
    }

var pdBig = document.querySelector('.product__slide__big');
var pdSmall = document.querySelector('.product__slide__small');
if(pdBig && pdSmall){

    $('.product__slide__big').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1200,
        arrows: false,
        asNavFor: '.product__slide__small',
      });
    
      $('.product__slide__small').slick({
        infinite: false,
        slidesToShow: 6,
        slidesToScroll: 6,
        asNavFor: '.product__slide__big',
        focusOnSelect: true,
        responsive: [
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: false,
              }
            },
          ]
      });
}







  //mouse move paralax effect
  var proDots = document.querySelector(".pro__dots");

// render dot
let proCheck = document.querySelector(".pro__board");
if(proCheck){

    for(let p = 0; p < Position.length; p++){
        let pCount = p + 1;
    
        proDots.innerHTML += "<div class=\"dot "+ Position[p].code +"\"><a href=\""+ Position[p].link +"\">"+ pCount +"</a><span class=\"dot__tooltip\">" + Position[p].name + "</span></div>";
    
        let dotPos = document.querySelectorAll(".dot");
        dotPos[p].style.top = Position[p]._posY;
        dotPos[p].style.left = Position[p]._posX;
    }
    
    resetPro();
    function resetPro() {
        let max = document.querySelectorAll(".pro__item").length;
        for(t = 0; t < max; t++){
            let proItems = document.querySelectorAll(`.${Position[t].code}`);
            if(proItems){
                for(let i = 0; i < proItems.length; i++){
                    proItems[i].addEventListener("mouseover", 
                    function showItem() {
                        for(let a = 0; a < proItems.length; a++){
                            proItems[a].classList.add('active');
                        }
                    });
                    proItems[i].addEventListener("mouseout",         
                    function hideItem() { 
                        for(let b = 0; b < proItems.length; b++){
                            proItems[b].classList.remove('active');
                        }
                    });
                }
            }
        }
    } 
}
  





