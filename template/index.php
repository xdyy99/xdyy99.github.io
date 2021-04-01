<!DOCTYPE html>
<html lang="vn">
<head>
    <meta charset="UTF-8" />
    <title>Trang chủ</title>
    <meta http-equiv="Cache-control" content="no-cache" />
    <meta http-equiv="Expires" content="-1" />
    <meta name="robots" content="noodp,noydir" />
    <meta name="format-detection" content="telephone=no" />
    <meta property="og:site_name" content="" />
    <meta name="description" content=" " />
    <meta name="keywords" content="" />
    <meta name="viewport" content="width=device-width, user-scalable=no">
    <meta property="og:title" content="" />
    <meta property="og:type" content="website" />
    <meta property="og:image" content="" />
    <meta property="og:description" content="" />
    <meta name="format-detection" content="telephone=no" />
    <link rel="stylesheet" type="text/css" href="css/style.css" />
    <link rel="stylesheet" type="text/css" href="css/fontawesome/css/all.css" />
</head>
<body>  
    <div class="loading-container">
        <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div>
    </div>
    <!-- Header -->
    <div class="bg-navbar"></div>
    <header class="header" id="menu"> 
        <div class="container">
            <div class="header__inner">
                <a href="#" class="header__logo"><img src="images/logo-2.png" alt=""></a>
                <div class="nav-icon">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav class="navbar navbar-collapse" >
                    <ul class="navbar-nav left">
                            <li class="current-menu-item"><a href="#1">Giới thiệu</a></li>
                            <li><a href="#2">Sản phẩm</a></li>
                            <li class="dropdown">
                                <a href="#3">Tuyển dụng</a>
                                <div class="sub-menu-wrap">
                                    <ul class="sub-menu">
                                        <li><a href="#">Somethings</a></li>
                                        <li><a href="#">Somethings</a></li>
                                        <li><a href="#">Somethings</a></li>
                                        <li><a href="#">Somethings</a></li>
                                    </ul>
                                </div>
                            </li>
                    </ul>
                    <ul class="navbar-nav right">
                        <li><a href="#4">Liên hệ</a></li>
                        <li class="login">
                            <a href="sign-up.html" class="btn-login">Đăng nhập & Đăng ký</a>
                            <div class="sub-menu-wrap">
                                <ul class="sub-menu">
                                    <li><a href="login.html">Đăng nhập</a></li>
                                    <li><a href="#sign-up">Đăng kí</a></li>
                                    <li><a href="#">Tạo đơn hàng</a></li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    </header>

    <!-- Popup Sign up -->
    <div class="popup-signup-bg"></div>
    <div class="popup-signup page-signup">
        <span class="popup-signup-close"><i class="far fa-times"></i></span>
        <div class="wrap-login100 p-l-50 p-r-50 p-t-72 p-b-50">
            <form class="login100-form validate-form" method="post" action="">
              <span class="login100-form-title p-b-59">
                Đăng kí
              </span>
              <div class="box-flex">
                <div
                class="wrap-input100 validate-input"
                data-validate="Name is required"
              >
                <span class="label-input100">Họ và tên</span>
                <input
                  class="input100"
                  type="text"
                  name="name"
                  placeholder="Nhập tên bạn..."
                />
                <span class="focus-input100"></span>
              </div>

              <div
                class="wrap-input100 validate-input"
                data-validate="Valid email is required: ex@abc.xyz"
              >
                <span class="label-input100">Email</span>
                <input
                  class="input100"
                  type="text"
                  name="email"
                  placeholder="Email..."
                />
                <span class="focus-input100"></span>
              </div>

              <div
                class="wrap-input100 validate-input"
                data-validate="Username is required"
              >
                <span class="label-input100">Tên đăng nhập</span>
                <input
                  class="input100"
                  type="text"
                  name="username"
                  placeholder="Nhập tên..."
                />
                <span class="focus-input100"></span>
              </div>

              <div
                class="wrap-input100 validate-input"
                data-validate="Password is required"
              >
                <span class="label-input100">Mật khẩu</span>
                <input
                  class="input100"
                  type="password"
                  name="pass"
                  placeholder="*************"
                />
                <span class="focus-input100"></span>
              </div>

              <div
                class="wrap-input100 validate-input"
                data-validate="Repeat Password is required"
              >
                <span class="label-input100">Nhập lại mật khẩu</span>
                <input
                  class="input100"
                  type="password"
                  name="repeat-pass"
                  placeholder="*************"
                />
                <span class="focus-input100"></span>
              </div>

              <div class="container-login100-form-btn">
                <div class="wrap-login100-form-btn">
                  <div class="login100-form-bgbtn"></div>
                  <button type="submit" class="login100-form-btn">
                    Đăng kí
                  </button>
                </div>

                <a
                  href="login.html"
                  class="next dis-block txt3 hov1 p-r-30 p-t-10 p-b-10 p-l-30"
                >
                  Đăng nhập
                  <i class="fa fa-long-arrow-right m-l-5"></i>
                </a>
              </div>
              </div>
            </form>
          </div>
    </div>
    
    <!-- Main Content-->
    <main class="wrapper" id="fullpage">
        <section class="section fullbanner fp-scrollable">
            <div class="container">
                <div class="row">
                    <div class="col-md-12">
                        <div class="fullbanner__content">
                            <img class="fullbanner__content--logo wow zoomIn" data-wow-duration="2s" src="images/logo-banner.png" alt="kim thành logo">
                            <div class="fullbanner__content--text">
                                <p class="description wow slideInDown" data-wow-duration="1.5s">Chào mừng đến với garage</p>
                                <h1 class="title wow slideInUp" data-wow-duration="1.5s">kim thanh</h1>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12 dif-scr">
                        <div class="fullbanner__button wow zoomIn" data-wow-duration="2s">
                            <a href="#1">
                                <span class="text">Xem tiếp</span>
                                <button class="see-more"><span></span></button>
                                <ul class="list-dots">
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                    <li></li>
                                </ul>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section sec-1 sec-home" id="sec-1">
            <div class="banner">
                <div class="bg-banner"></div>
                <div class="container h-100 relative">
                    <div class="row h-100">
                        <div class="col-md-12">
                            <div class="banner__content">
                                <h1>motorcycle</h1>
                            </div>
                            <div class="img-motobike">                             
                                <button class="button">
                                    <div class="bg"></div>
                                    <a href="#" target="_blank"><i class="fal fa-plus"></i></a>
                                    <div class="des-motobike">
                                        <p>Say somethings about this motobike</p>
                                    </div>
                                </button>
                                <button class="button second">
                                    <div class="bg"></div>
                                    <a href="#" target="_blank"><i class="fal fa-plus"></i></a>
                                    <div class="des-motobike">
                                        <p>Say somethings about this motobike</p>
                                    </div>
                                </button>
                                <img src="images/motobike.png" alt="">
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="sec introduce" style="">
                <div class="container">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="box-section-title">
                                <h2 class="sec-title">Giới thiệu</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-4 col-sm-12 col-12">
                            <div class="introduce__content">
                                <p><b>Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                    sed diam nonumy eirmod tempor invidunt</b></p>
                                <p>ut labore et dolore magna aliquyam erat, sed diam voluptua.
                                    At vero eos et accusam et justo duo dolores et ea rebum.
                                    Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</p>
                            </div>
                        </div>
                        <div class="col-md-8 col-sm-12 col-12 center-mobile relative">
                            <div class="introduce__slide default-slide smooth-slick">
                                <div class="introduce__slide--item">
                                    <div class="img-full">
                                        <a href="#"><img src="images/gt-1.png" alt=""></a>
                                    </div>
                                    <div class="title">
                                        <h6><a href="#">Lorem ipsum dolor sit amet</a></h6>
                                    </div>
                                </div>
                                <div class="introduce__slide--item">
                                    <div class="img-full">
                                        <a href="#"><img src="images/gt-2.png" alt=""></a>
                                    </div>
                                    <div class="title">
                                        <h6><a href="#">Lorem ipsum dolor sit amet</a></h6>
                                    </div>
                                </div>
                                <div class="introduce__slide--item">
                                    <div class="img-full">
                                        <a href="#"><img src="images/gt-3.png" alt=""></a>
                                    </div>
                                    <div class="title">
                                        <h6><a href="#">Lorem ipsum dolor sit amet</a></h6>
                                    </div>
                                </div>
                                <div class="introduce__slide--item">
                                    <div class="img-full">
                                        <a href="#"><img src="images/gt-4.png" alt=""></a>
                                    </div>
                                    <div class="title">
                                        <h6><a href="#">Lorem ipsum dolor sit amet</a></h6>
                                    </div>
                                </div>
                                <div class="introduce__slide--item">
                                    <div class="img-full">
                                        <a href="#"><img src="images/gt-1.png" alt=""></a>
                                    </div>
                                    <div class="title">
                                        <h6><a href="#">Lorem ipsum dolor sit amet</a></h6>
                                    </div>
                                </div>
                                <div class="introduce__slide--item">
                                    <div class="img-full">
                                        <a href="#"><img src="images/gt-1.png" alt=""></a>
                                    </div>
                                    <div class="title">
                                        <h6><a href="#">Lorem ipsum dolor sit amet</a></h6>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </section>  
        <section class="section sec-2 fp-auto-height fp-scrollable" id="sec-2">
            <div class="sec-product">
                <div class="container h-100">
                    <div class="show-sidebar">
                        <span class="inline txt">Danh mục</span>
                        <span class="inline icon"><i class="fal fa-align-right"></i></span>
                    </div>              
                    <div class="sidebar h-100">
                            <ul class="sidebar-list">
                                <li class="active" data-tab="tab-1"><span>honda</span></li>
                                <li data-tab="tab-2"><span>yamaha</span></li>
                                <li><span>piaggio</span></li>
                                <li><span>sym</span></li>
                                <li><span>suzuki</span></li>
                                <li><span>harley davidson</span></li>
                                <li><span>ducati</span></li>
                                <li><span>bmw</span></li>
                                <li><span>kawasaki</span></li>
                            </ul>
                    </div>
                    <div class="slide-product default-slide smooth-slick" id="tab-1" style="display: block;">
                        <div class="list-product__item">
                            <a href="#">
                                <div class="img-full"><img src="images/pd-1.png" alt=""></div>
                                <div class="list-product__info">
                                   <span class="product-status new">new</span>
                                   <h6 class="product-name">Tên sản phẩm</h6>
                                   <p class="product-des">Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                                    <a class="product-contact" href="#">Liên hệ</a>
                                </div>
                             </a>
                        </div>
                        <div class="list-product__item">
                            <a href="#">
                                <div class="img-full"><img src="images/pd-2.png" alt=""></div>
                                <div class="list-product__info">
                                   <span class="product-status new">new</span>
                                   <h6 class="product-name">Tên sản phẩm</h6>
                                   <p class="product-des">Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                                    <a class="product-contact" href="#">Liên hệ</a>
                                </div>
                             </a>
                        </div>
                        <div class="list-product__item">
                            <a href="#">
                                <div class="img-full"><img src="images/pd-3.png" alt=""></div>
                                <div class="list-product__info">
                                   <span class="product-status new">new</span>
                                   <h6 class="product-name">Tên sản phẩm</h6>
                                   <p class="product-des">Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                                    <a class="product-contact" href="#">Liên hệ</a>
                                </div>
                             </a>
                        </div>
                        <div class="list-product__item">
                            <a href="#">
                                <div class="img-full"><img src="images/pd-4.png" alt=""></div>
                                <div class="list-product__info">
                                   <span class="product-status sale">sale</span>
                                   <h6 class="product-name">Tên sản phẩm</h6>
                                   <p class="product-des">Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                                    <a class="product-contact" href="#">Liên hệ</a>
                                </div>
                             </a>
                        </div>
                        <div class="list-product__item">
                            <a href="#">
                                <div class="img-full"><img src="images/pd-5.png" alt=""></div>
                                <div class="list-product__info">
                                   <span class="product-status new">new</span>
                                   <h6 class="product-name">Tên sản phẩm</h6>
                                   <p class="product-des">Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                                    <a class="product-contact" href="#">Liên hệ</a>
                                </div>
                             </a>
                        </div>
                        <div class="list-product__item">
                            <a href="#">
                                <div class="img-full"><img src="images/pd-6.png" alt=""></div>
                                <div class="list-product__info">
                                   <span class="product-status sale">sale</span>
                                   <h6 class="product-name">Tên sản phẩm</h6>
                                   <p class="product-des">Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                                    <a class="product-contact" href="#">Liên hệ</a>
                                </div>
                             </a>
                        </div>
                        <div class="list-product__item">
                            <a href="#">
                                <div class="img-full"><img src="images/pd-7.png" alt=""></div>
                                <div class="list-product__info">
                                   <span class="product-status new">new</span>
                                   <h6 class="product-name">Tên sản phẩm</h6>
                                   <p class="product-des">Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                                    <a class="product-contact" href="#">Liên hệ</a>
                                </div>
                             </a>
                        </div>
                        <div class="list-product__item">
                            <a href="#">
                                <div class="img-full"><img src="images/pd-8.png" alt=""></div>
                                <div class="list-product__info">
                                   <span class="product-status new">new</span>
                                   <h6 class="product-name">Tên sản phẩm</h6>
                                   <p class="product-des">Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                                    <a class="product-contact" href="#">Liên hệ</a>
                                </div>
                             </a>
                        </div>
                        <div class="list-product__item">
                            <a href="#">
                                <div class="img-full"><img src="images/pd-9.png" alt=""></div>
                                <div class="list-product__info">
                                   <span class="product-status new">new</span>
                                   <h6 class="product-name">Tên sản phẩm</h6>
                                   <p class="product-des">Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                                    <a class="product-contact" href="#">Liên hệ</a>
                                </div>
                             </a>
                        </div>
                        <div class="list-product__item">
                            <a href="#">
                                <div class="img-full"><img src="images/pd-10.png" alt=""></div>
                                <div class="list-product__info">
                                   <span class="product-status new">new</span>
                                   <h6 class="product-name">Tên sản phẩm</h6>
                                   <p class="product-des">Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                                    <a class="product-contact" href="#">Liên hệ</a>
                                </div>
                             </a>
                        </div>
                        <div class="list-product__item">
                            <a href="#">
                                <div class="img-full"><img src="images/pd-1.png" alt=""></div>
                                <div class="list-product__info">
                                   <span class="product-status new">new</span>
                                   <h6 class="product-name">Tên sản phẩm</h6>
                                   <p class="product-des">Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                                    <a class="product-contact" href="#">Liên hệ</a>
                                </div>
                             </a>
                        </div>
                        <div class="list-product__item">
                            <a href="#">
                                <div class="img-full"><img src="images/pd-2.png" alt=""></div>
                                <div class="list-product__info">
                                   <span class="product-status new">new</span>
                                   <h6 class="product-name">Tên sản phẩm</h6>
                                   <p class="product-des">Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                                    <a class="product-contact" href="#">Liên hệ</a>
                                </div>
                             </a>
                        </div>
                        <div class="list-product__item">
                            <a href="#">
                                <div class="img-full"><img src="images/pd-4.png" alt=""></div>
                                <div class="list-product__info">
                                   <span class="product-status new">new</span>
                                   <h6 class="product-name">Tên sản phẩm</h6>
                                   <p class="product-des">Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                                    <a class="product-contact" href="#">Liên hệ</a>
                                </div>
                             </a>
                        </div>
                        <div class="list-product__item">
                            <a href="#">
                                <div class="img-full"><img src="images/pd-1.png" alt=""></div>
                                <div class="list-product__info">
                                   <span class="product-status new">new</span>
                                   <h6 class="product-name">Tên sản phẩm</h6>
                                   <p class="product-des">Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                                    <a class="product-contact" href="#">Liên hệ</a>
                                </div>
                             </a>
                        </div>
                        <div class="list-product__item">
                            <a href="#">
                                <div class="img-full"><img src="images/pd-1.png" alt=""></div>
                                <div class="list-product__info">
                                   <span class="product-status new">new</span>
                                   <h6 class="product-name">Tên sản phẩm</h6>
                                   <p class="product-des">Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                                    <a class="product-contact" href="#">Liên hệ</a>
                                </div>
                             </a>
                        </div>
                        <div class="list-product__item">
                            <a href="#">
                                <div class="img-full"><img src="images/pd-1.png" alt=""></div>
                                <div class="list-product__info">
                                   <span class="product-status new">new</span>
                                   <h6 class="product-name">Tên sản phẩm</h6>
                                   <p class="product-des">Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                                    <a class="product-contact" href="#">Liên hệ</a>
                                </div>
                             </a>
                        </div>
                        <div class="list-product__item">
                            <a href="#">
                                <div class="img-full"><img src="images/pd-1.png" alt=""></div>
                                <div class="list-product__info">
                                   <span class="product-status new">new</span>
                                   <h6 class="product-name">Tên sản phẩm</h6>
                                   <p class="product-des">Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                                    <a class="product-contact" href="#">Liên hệ</a>
                                </div>
                             </a>
                        </div>
                        <div class="list-product__item">
                            <a href="#">
                                <div class="img-full"><img src="images/pd-1.png" alt=""></div>
                                <div class="list-product__info">
                                   <span class="product-status new">new</span>
                                   <h6 class="product-name">Tên sản phẩm</h6>
                                   <p class="product-des">Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                                    <a class="product-contact" href="#">Liên hệ</a>
                                </div>
                             </a>
                        </div>
                    </div>         
                    <div class="slide-product default-slide smooth-slick" id="tab-2">
                        <div class="list-product__item">
                            <a href="#">
                                <div class="img-full"><img src="images/pd-10.png" alt=""></div>
                                <div class="list-product__info">
                                   <span class="product-status new">new</span>
                                   <h6 class="product-name">Tên sản phẩm</h6>
                                   <p class="product-des">Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                                    <a class="product-contact" href="#">Liên hệ</a>
                                </div>
                             </a>
                        </div>
                        <div class="list-product__item">
                            <a href="#">
                                <div class="img-full"><img src="images/pd-9.png" alt=""></div>
                                <div class="list-product__info">
                                   <span class="product-status new">new</span>
                                   <h6 class="product-name">Tên sản phẩm</h6>
                                   <p class="product-des">Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                                    <a class="product-contact" href="#">Liên hệ</a>
                                </div>
                             </a>
                        </div>
                        <div class="list-product__item">
                            <a href="#">
                                <div class="img-full"><img src="images/pd-8.png" alt=""></div>
                                <div class="list-product__info">
                                   <span class="product-status new">new</span>
                                   <h6 class="product-name">Tên sản phẩm</h6>
                                   <p class="product-des">Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                                    <a class="product-contact" href="#">Liên hệ</a>
                                </div>
                             </a>
                        </div>
                        <div class="list-product__item">
                            <a href="#">
                                <div class="img-full"><img src="images/pd-7.png" alt=""></div>
                                <div class="list-product__info">
                                   <span class="product-status sale">sale</span>
                                   <h6 class="product-name">Tên sản phẩm</h6>
                                   <p class="product-des">Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                                    <a class="product-contact" href="#">Liên hệ</a>
                                </div>
                             </a>
                        </div>
                        <div class="list-product__item">
                            <a href="#">
                                <div class="img-full"><img src="images/pd-6.png" alt=""></div>
                                <div class="list-product__info">
                                   <span class="product-status new">new</span>
                                   <h6 class="product-name">Tên sản phẩm</h6>
                                   <p class="product-des">Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                                    <a class="product-contact" href="#">Liên hệ</a>
                                </div>
                             </a>
                        </div>
                        <div class="list-product__item">
                            <a href="#">
                                <div class="img-full"><img src="images/pd-5.png" alt=""></div>
                                <div class="list-product__info">
                                   <span class="product-status new">new</span>
                                   <h6 class="product-name">Tên sản phẩm</h6>
                                   <p class="product-des">Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                                    <a class="product-contact" href="#">Liên hệ</a>
                                </div>
                             </a>
                        </div>
                        <div class="list-product__item">
                            <a href="#">
                                <div class="img-full"><img src="images/pd-4.png" alt=""></div>
                                <div class="list-product__info">
                                   <span class="product-status new">new</span>
                                   <h6 class="product-name">Tên sản phẩm</h6>
                                   <p class="product-des">Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                                    <a class="product-contact" href="#">Liên hệ</a>
                                </div>
                             </a>
                        </div>
                        <div class="list-product__item">
                            <a href="#">
                                <div class="img-full"><img src="images/pd-3.png" alt=""></div>
                                <div class="list-product__info">
                                   <span class="product-status new">new</span>
                                   <h6 class="product-name">Tên sản phẩm</h6>
                                   <p class="product-des">Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                                    <a class="product-contact" href="#">Liên hệ</a>
                                </div>
                             </a>
                        </div>
                        <div class="list-product__item">
                            <a href="#">
                                <div class="img-full"><img src="images/pd-2.png" alt=""></div>
                                <div class="list-product__info">
                                   <span class="product-status new">new</span>
                                   <h6 class="product-name">Tên sản phẩm</h6>
                                   <p class="product-des">Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                                    <a class="product-contact" href="#">Liên hệ</a>
                                </div>
                             </a>
                        </div>
                        <div class="list-product__item">
                            <a href="#">
                                <div class="img-full"><img src="images/pd-1.png" alt=""></div>
                                <div class="list-product__info">
                                   <span class="product-status new">new</span>
                                   <h6 class="product-name">Tên sản phẩm</h6>
                                   <p class="product-des">Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                                    <a class="product-contact" href="#">Liên hệ</a>
                                </div>
                             </a>
                        </div>
                        <div class="list-product__item">
                            <a href="#">
                                <div class="img-full"><img src="images/pd-1.png" alt=""></div>
                                <div class="list-product__info">
                                   <span class="product-status new">new</span>
                                   <h6 class="product-name">Tên sản phẩm</h6>
                                   <p class="product-des">Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                                    <a class="product-contact" href="#">Liên hệ</a>
                                </div>
                             </a>
                        </div>
                        <div class="list-product__item">
                            <a href="#">
                                <div class="img-full"><img src="images/pd-1.png" alt=""></div>
                                <div class="list-product__info">
                                   <span class="product-status new">new</span>
                                   <h6 class="product-name">Tên sản phẩm</h6>
                                   <p class="product-des">Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                                    <a class="product-contact" href="#">Liên hệ</a>
                                </div>
                             </a>
                        </div>
                        <div class="list-product__item">
                            <a href="#">
                                <div class="img-full"><img src="images/pd-1.png" alt=""></div>
                                <div class="list-product__info">
                                   <span class="product-status new">new</span>
                                   <h6 class="product-name">Tên sản phẩm</h6>
                                   <p class="product-des">Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                                    <a class="product-contact" href="#">Liên hệ</a>
                                </div>
                             </a>
                        </div>
                        <div class="list-product__item">
                            <a href="#">
                                <div class="img-full"><img src="images/pd-1.png" alt=""></div>
                                <div class="list-product__info">
                                   <span class="product-status new">new</span>
                                   <h6 class="product-name">Tên sản phẩm</h6>
                                   <p class="product-des">Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                                    <a class="product-contact" href="#">Liên hệ</a>
                                </div>
                             </a>
                        </div>
                        <div class="list-product__item">
                            <a href="#">
                                <div class="img-full"><img src="images/pd-1.png" alt=""></div>
                                <div class="list-product__info">
                                   <span class="product-status new">new</span>
                                   <h6 class="product-name">Tên sản phẩm</h6>
                                   <p class="product-des">Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                                    <a class="product-contact" href="#">Liên hệ</a>
                                </div>
                             </a>
                        </div>
                        <div class="list-product__item">
                            <a href="#">
                                <div class="img-full"><img src="images/pd-1.png" alt=""></div>
                                <div class="list-product__info">
                                   <span class="product-status new">new</span>
                                   <h6 class="product-name">Tên sản phẩm</h6>
                                   <p class="product-des">Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                                    <a class="product-contact" href="#">Liên hệ</a>
                                </div>
                             </a>
                        </div>
                        <div class="list-product__item">
                            <a href="#">
                                <div class="img-full"><img src="images/pd-1.png" alt=""></div>
                                <div class="list-product__info">
                                   <span class="product-status new">new</span>
                                   <h6 class="product-name">Tên sản phẩm</h6>
                                   <p class="product-des">Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                                    <a class="product-contact" href="#">Liên hệ</a>
                                </div>
                             </a>
                        </div>
                        <div class="list-product__item">
                            <a href="#">
                                <div class="img-full"><img src="images/pd-1.png" alt=""></div>
                                <div class="list-product__info">
                                   <span class="product-status new">new</span>
                                   <h6 class="product-name">Tên sản phẩm</h6>
                                   <p class="product-des">Lorem ipsum dolor sit amet, consetetur sadipscing</p>
                                    <a class="product-contact" href="#">Liên hệ</a>
                                </div>
                             </a>
                        </div>
                    </div>       
                </div>
            </div>
        </section>  
        <section class="section sec-3 fp-auto-height fp-scrollable" id="sec-3">
            <div class="sec-td">
                <div class="container-big">
                    <div class="row">
                        <div class="col-md-12">
                            <div class="box-section-title">
                                <h2 class="sec-title">Tuyển dụng</h2>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="col-md-7 col-sm-12">
                            <div class="td-tab">
                                <ul class="td-list">
                                    <li data-tab = "tab-1" class="active">
                                        <span class="text">Tuyển dụng nhân viên tư vấn khách hàng</span>
                                         <span class="icon"><i class="fal fa-angle-down"></i></span> 
                                    </li>
                                    <div class="td-content" id="tab-1">
                                        <h6 class="td-title">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                                        sed diam voluptua.</h6>
                                        <p class="td-des">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                                        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                                        invidunt ut labore et</p>
                                        <div class="td-btn">
                                            <a href="" class="btn btn-blue">nộp hồ sơ</a>
                                            <a href="" class="btn btn-lightblue">liên hệ</a>
                                        </div>
                                    </div>
                                    <li data-tab = "tab-2">
                                        <span class="text">Tuyển dụng nhân viên tư vấn khách hàng</span>
                                        <span class="icon"><i class="fal fa-angle-down"></i></span> 
                                   </li>
                                   <div class="td-content" id="tab-2" >
                                        <h6 class="td-title">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                                        sed diam voluptua.</h6>
                                        <p class="td-des">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                                        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                                        invidunt ut labore et</p>
                                        <div class="td-btn">
                                            <a href="" class="btn btn-blue">nộp hồ sơ</a>
                                            <a href="" class="btn btn-lightblue">liên hệ</a>
                                        </div>
                                    </div>
                                   <li data-tab = "tab-3">
                                    <span class="text">Tuyển dụng nhân viên tư vấn khách hàng</span>
                                    <span class="icon"><i class="fal fa-angle-down"></i></span> 
                                    </li>
                                    <div class="td-content" id="tab-3" >
                                        <h6 class="td-title">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                                        sed diam voluptua.</h6>
                                        <p class="td-des">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                                        sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                                        invidunt ut labore et</p>
                                        <div class="td-btn">
                                            <a href="" class="btn btn-blue">nộp hồ sơ</a>
                                            <a href="" class="btn btn-lightblue">liên hệ</a>
                                        </div>
                                    </div>
                                    <li data-tab = "tab-3">
                                        <span class="text">Tuyển dụng nhân viên tư vấn khách hàng</span>
                                        <span class="icon"><i class="fal fa-angle-down"></i></span> 
                                    </li>
                                    <li data-tab = "tab-3">
                                        <span class="text">Tuyển dụng nhân viên tư vấn khách hàng</span>
                                        <span class="icon"><i class="fal fa-angle-down"></i></span> 
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="img-td">
                    <img src="images/tuyendung.png" alt="">
                    <div class="content-tab" id="tab-1">
                        <h6 class="td-title">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                            sed diam voluptua.</h6>
                            <p class="td-des">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                            invidunt ut labore et</p>
                            <div class="td-btn">
                                <a href="" class="btn btn-blue">nộp hồ sơ</a>
                                <a href="" class="btn btn-lightblue">liên hệ</a>
                            </div>
                    </div>
                    <div class="content-tab" id="tab-2">
                        <h6 class="td-title">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                            sed diam voluptua.</h6>
                            <p class="td-des">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                            invidunt ut labore et</p>
                            <div class="td-btn">
                                <a href="" class="btn btn-blue">nộp hồ sơ</a>
                                <a href="" class="btn btn-lightblue">liên hệ</a>
                            </div>
                    </div>
                    <div class="content-tab" id="tab-3">
                        <h6 class="td-title">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                            sed diam voluptua.</h6>
                            <p class="td-des">Lorem ipsum dolor sit amet, consetetur sadipscing elitr,
                            sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, 
                            sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor 
                            invidunt ut labore et</p>
                            <div class="td-btn">
                                <a href="" class="btn btn-blue">nộp hồ sơ</a>
                                <a href="" class="btn btn-lightblue">liên hệ</a>
                            </div>
                    </div>
                </div>
            </div>
        </section>
        <section class="section sec-4 sec-map fp-auto-height fp-scrollable" id="sec-4">
            <div class="wrap-map">
                <div class="show-contact">Liên hệ</div>
                <div class="map">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13183.616903368007!2d106.65135627210667!3d10.771984621044572!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec7d61f88f9%3A0x5891eeb4e5ece0aa!2zMzczIEzDvSBUaMaw4budbmcgS2nhu4d0LCBQaMaw4budbmcgOSwgVMOibiBCw6xuaCwgSOG7kyBDaMOtIE1pbmgsIFZp4buHdCBOYW0!5e0!3m2!1svi!2s!4v1595473589178!5m2!1svi!2s" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
                </div>
                <div class="container">
                    <div class="wrap-contact">
                        <div class="row">
                            <div class="col-md-12">
                                <div class="box-title">
                                    <h2 class="title">Liên hệ</h2>
                                </div>
                            </div>
                            <div class="col-md-4 col-12">
                                <div class="contact">
                                    <div class="contact-icon"><img src="images/location.svg" alt=""></div>
                                    <h6 class="contact-txt">Địa chỉ</h6>
                                    <div class="contact-des">
                                        <p>373/226 Lý Thường Kiệt, Phường 8, Quận Tân Bình, Hồ Chí Minh</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-12">
                                <div class="contact">
                                    <div class="contact-icon"><img src="images/call.svg" alt=""></div>
                                    <h6 class="contact-txt">Địa chỉ</h6>
                                    <div class="contact-des">
                                        <p>373/226 Lý Thường Kiệt, Phường 8, Quận Tân Bình, Hồ Chí Minh</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4 col-12">
                                <div class="contact">
                                    <div class="contact-icon"><img src="images/email.svg" alt=""></div>
                                    <h6 class="contact-txt">Địa chỉ</h6>
                                    <div class="contact-des">
                                        <p>373/226 Lý Thường Kiệt, Phường 8, Quận Tân Bình, Hồ Chí Minh</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>


    <!-- Footer -->
    <div class="footer">
            <div class="container h-100">
                <div class="row h-100">
                    <div class="col-md-6 col-sm-12 col-12 h-100">
                        <div class="footer__content h-100">
                            <span class="footer-text">Designed and developed by Mona Media</span>
                        </div>
                    </div>
                    <div class="col-md-6 col-sm-12 col-12 h-100">
                        <div class="footer__content h-100">
                            <ul class="footer__content--list">
                                <li><a href=""><i class="fab fa-facebook-f"></i></a></li>
                                <li><a href=""><i class="fab fa-instagram"></i></a></li>
                                <li><a href=""><i class="fab fa-twitter"></i></a></li>
                                <li><a href=""><i class="fab fa-linkedin-in"></i></a></li>
                            </ul>
                            <div class="footer__content--hotline">
                                <a href="#">
                                    <span>Hotline</span>
                                    <p class="number">1900 456 456</p>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>

    <script type="text/javascript" src="js/jquery3.3.1.js"></script>
    <script type="text/javascript" src="js/Magnific-Popup-master/jquery.magnific-popup.min.js"></script>
    <script type="text/javascript" src="js/slick-1.8.1/slick.min.js"></script>
    <script type="text/javascript" src="js/lightGallery-master/dist/js/lightgallery-all.min.js"></script>
    <script type="text/javascript"src="js/wow-master/wow.min.js"></script>
    <script type="text/javascript" src="js/main.js"></script>


    <!-- Từ đây trở xuống này chỉ dành cho index.html -->    
    <script type="text/javascript" src="js/fullpagejs/easings.min.js"></script>
    <script type="text/javascript" src="js/fullpagejs/scrolloverflow.min.js"></script>
    <script type="text/javascript" src="js/fullpagejs/fullpage.js"></script>
    <script type="text/javascript" src="js/fullpagejs/fullpage.extensions.min.js"></script>

    <script>
    /* click to hide banner */
    // $('html').on('click','.fullbanner__button',function() {
    //     $('.fullbanner').addClass('fly');
    //     $('.wrapper').removeClass('overflow-wrapper');
    // }); 

        
    new fullpage('#fullpage', {
            //options here
            licenseKey: 'test',
            menu:"#menu",
            responsiveWidth: 1200,
            autoScrolling:true,
            navigation:true,
            navigationPosition: 'right',
            // navigationTooltips:['1','2','3','4'],
            // scrollHorizontally: true,
            // lockAnchors: true,
            anchors: ['0','1','2','3','4'],
            scrollOverflow: true,
            showActiveTooltip:true,
            scrollingSpeed: 1000,
            afterLoad: function(anchorLink, index){
                console.log(index.anchor);
                //using index
                if(index.anchor == 4){
                    $('.footer').removeClass('un-active');
                    $('.footer').addClass('active');
                } else {
                    $('.footer').removeClass('active');
                    $('.footer').addClass('un-active');
                }

                if(index.anchor >= 1) {
                    console.log('run');
                    $('.header').removeClass('un-active');
                    $('.header').addClass('active');
                }else {
                    $('.header').removeClass('active');
                    $('.header').addClass('un-active');
                    
                }

                if(index.anchor > 0) {
                    $("#fp-nav").css({"opacity":"1","transition":"0.5s"});
                } else {
                    $("#fp-nav").css({"opacity":"0","transition":"0.5s"});
                }

                // if(index.anchor == 0) {
                //     var w = $(window).width();
                //     if(w > 1400) {
                //         $(".footer").hide();
                //     }
                // }
            },
      
        });

    new WOW().init();

    $(".header__inner .navbar .navbar-nav li a").click(function() {
        var link = $(this).attr("href");
        var last_link = link.substr(link.length - 1)
        fullpage_api.moveTo(last_link);
    });

    $(".fullbanner__button a").click(function() {
        var link = $(this).attr("href");
        var last_link = link.substr(link.length - 1)
        fullpage_api.moveTo(last_link);
    });

    $("#fp-nav ul li").eq(0).hide();

    setTimeout(function(){
         $('.loading-container').hide();
         
         new WOW().init();
      }, 1000);


    </script>
    
</body>
</html>