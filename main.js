(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\ACER\Desktop\Portfolio\src\main.ts */"zUnb");


/***/ }),

/***/ "6AOp":
/*!**********************************************!*\
  !*** ./src/app/project/project.component.ts ***!
  \**********************************************/
/*! exports provided: ProjectComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProjectComponent", function() { return ProjectComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ProjectComponent {
    constructor() { }
    ngOnInit() {
        // pic paralax  effect
        document.addEventListener("scroll", function () {
            let pic = document.querySelector(".paralax02");
            let pos = document.querySelectorAll(".banner");
            let pos2 = document.querySelector(".text__pos");
            let end = pos[1].offsetTop + pos2.offsetTop;
            if (window.scrollY < end)
                pic.style.transform = `translateY(-${(window.scrollY - (pos[1].offsetTop - 100))}px)`;
        });
        // item paralax  effect 
        let con = document.querySelector(".project__container");
        const item = document.querySelectorAll(".project__item");
        const img = document.querySelectorAll(".img__hover");
        // pic0
        item[0].addEventListener("mouseout", function () {
            img[0].style.transition = `all 0.5s ease-out`;
            img[0].style.transform = `none`;
        });
        item[0].addEventListener("mousemove", function (e) {
            let _mouseX = e.pageX - (con.offsetLeft + item[0].offsetLeft);
            let _mouseY = e.pageY - (con.offsetTop + item[0].offsetTop);
            let _mov1 = `${_mouseX * 1}px, ${_mouseY * 2}px`;
            img[0].style.transition = `all 0s linear`;
            img[0].style.transform = `translate(${_mov1})`;
        });
        // pic1
        item[1].addEventListener("mouseout", function () {
            img[1].style.transition = `all 0.5s ease-out`;
            img[1].style.transform = `none`;
        });
        item[1].addEventListener("mousemove", function (e) {
            let _mouseX = e.pageX - (con.offsetLeft + item[1].offsetLeft);
            let _mouseY = e.pageY - (con.offsetTop + item[1].offsetTop);
            let _mov1 = `${_mouseX * 1}px, ${_mouseY * 2}px`;
            img[1].style.transition = `all 0s linear`;
            img[1].style.transform = `translate(${_mov1})`;
        });
        // pic2
        item[2].addEventListener("mouseout", function () {
            img[2].style.transition = `all 0.5s ease-out`;
            img[2].style.transform = `none`;
        });
        item[2].addEventListener("mousemove", function (e) {
            let _mouseX = e.pageX - (con.offsetLeft + item[2].offsetLeft);
            let _mouseY = e.pageY - (con.offsetTop + item[2].offsetTop);
            let _mov1 = `${_mouseX * 1}px, ${_mouseY * 2}px`;
            img[2].style.transition = `all 0s linear`;
            img[2].style.transform = `translate(${_mov1})`;
        });
        // pic3
        item[3].addEventListener("mouseout", function () {
            img[3].style.transition = `all 0.5s ease-out`;
            img[3].style.transform = `none`;
        });
        item[3].addEventListener("mousemove", function (e) {
            let _mouseX = e.pageX - (con.offsetLeft + item[3].offsetLeft);
            let _mouseY = e.pageY - (con.offsetTop + item[3].offsetTop);
            let _mov1 = `${_mouseX * 1}px, ${_mouseY * 2}px`;
            img[3].style.transition = `all 0s linear`;
            img[3].style.transform = `translate(${_mov1})`;
        });
    }
}
ProjectComponent.ɵfac = function ProjectComponent_Factory(t) { return new (t || ProjectComponent)(); };
ProjectComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ProjectComponent, selectors: [["app-project"]], decls: 53, vars: 0, consts: [[1, "blankspace"], ["id", "project", 1, "hero"], [1, "banner"], [1, "banner__text"], [1, "text__pos"], [1, "banner__pic"], [1, "paralax02"], ["src", "../../assets/audio/project.mov", "autoplay", "", "loop", "", "alt", ""], [1, "text__mini"], [1, "project__container"], [1, "project__name"], [1, "project__item"], [1, "img__hover"], ["src", "../../assets/img/psd1.png", "alt", ""], ["src", "../../assets/img/shopping.png", "alt", ""], ["src", "../../assets/img/movie.png", "alt", ""], ["src", "../../assets/img/porfolio.png", "alt", ""], [1, "project__icon"], [1, "fab", "fa-html5", "html"], [1, "fab", "fa-css3-alt", "css"], [1, "fab", "fa-js-square", "js"], [1, "fab", "fa-sass", "sass"], [1, "fab", "fa-angular", "ang"]], template: function ProjectComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "my project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "video", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "my project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "psd to html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "psd to html");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "img", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "shopping site");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "shopping site");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "img", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "movie website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, "movie website");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "portfolio");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "img", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "ul", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](44, "i", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](46, "i", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](48, "i", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "i", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](52, "i", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".banner[_ngcontent-%COMP%]{\r\n    display: block;\r\n    width: 100%;\r\n    height: 120vh;\r\n    position: relative;\r\n}\r\n\r\n.banner__text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    display: block;\r\n    width: -webkit-max-content;\r\n    width: max-content;\r\n    font-size: 25rem;\r\n    position: absolute;\r\n    top: 42%;\r\n    left: 50%;\r\n    transform: translate(-50%,-50%);\r\n}\r\n\r\n.banner__pic[_ngcontent-%COMP%]{\r\n    display: block;\r\n    width: 45%;\r\n    height: -webkit-max-content;\r\n    height: max-content;\r\n    margin: 0 auto;\r\n    position: relative;\r\n}\r\n\r\n.banner__pic[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{\r\n    transition: all 1s ease-out;\r\n    position: relative;\r\n    width: 100%;\r\n    height: -webkit-max-content;\r\n    height: max-content;\r\n    max-height: 130vh;\r\n    object-fit: cover;\r\n    top: 20%;\r\n}\r\n\r\n.text__mini[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 45%;\r\n    position: absolute;\r\n    top: 42%;\r\n    left: 50%;\r\n    transform: translate(-50%,-50%);\r\n    overflow: hidden;\r\n}\r\n\r\n.text__mini[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    width: -webkit-max-content;\r\n    width: max-content;\r\n    font-size: 25rem;\r\n    position: relative;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    color: #fff;\r\n}\r\n\r\n.project__container[_ngcontent-%COMP%] {\r\n    display: flex; \r\n    justify-content: center;\r\n    align-items: center; \r\n    position: relative;\r\n    width: 100%;\r\n    max-width: 1920px;\r\n    margin: 0 auto;\r\n    padding: 100px;\r\n}\r\n\r\n.project__name[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    width: 90%;\r\n}\r\n\r\n.project__item[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    width: 100%;\r\n}\r\n\r\n.project__item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    display: block;\r\n    width: -webkit-max-content;\r\n    width: max-content;\r\n    padding-left: 10px;\r\n    font-family: 'fillin';\r\n    font-size: 11rem;\r\n    letter-spacing: 1rem;\r\n    line-height: 19rem;\r\n    color: white;\r\n    text-shadow: \r\n    -5px -5px 0 #000, \r\n    5px -5px 0 #000, \r\n    -5px 5px 0 #000, \r\n    5px 5px 0 #000;\r\n}\r\n\r\n.project__item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:nth-of-type(2){\r\n    position: absolute;\r\n    display: block;\r\n    width: 100%;\r\n    height: 0;\r\n    overflow: hidden;\r\n    top: 0;\r\n    left:0;\r\n    color: #000;\r\n    text-shadow: \r\n    -6px -6px 0 #fff, \r\n    6px -6px 0 #fff, \r\n    -6px 6px 0 #fff, \r\n    6px 6px 0 #fff;\r\n    transition: all 1.5s linear;\r\n}\r\n\r\n.img__hover[_ngcontent-%COMP%]{\r\n    display: block;\r\n    width: 40vw;\r\n    height: 0;\r\n    position: absolute;\r\n    top: -30vh;\r\n    overflow: hidden;\r\n    z-index: 5;\r\n    pointer-events: none;\r\n    transition: all 0.5s linear;\r\n}\r\n\r\n.img__hover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    width: 100%;\r\n    height: auto;\r\n    animation-name: scrollShow;\r\n    animation-duration: 10s;\r\n    animation-iteration-count: infinite;\r\n}\r\n\r\n.project__item[_ngcontent-%COMP%]:hover   h3[_ngcontent-%COMP%]:nth-of-type(2){\r\n    height: 100%;\r\n}\r\n\r\n.project__item[_ngcontent-%COMP%]:hover   .img__hover[_ngcontent-%COMP%]{\r\n    height: 50vh;\r\n}\r\n\r\nul.project__icon[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    width: 10%;\r\n}\r\n\r\n.project__icon[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n    padding: 20px;\r\n    text-align: center;\r\n}\r\n\r\n.project__icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 100%;\r\n    font-size: 10rem;\r\n}\r\n\r\ni.html[_ngcontent-%COMP%]{ \r\n    color: #e34f26;\r\n}\r\n\r\ni.css[_ngcontent-%COMP%]{\r\n    color: #2965f1;\r\n}\r\n\r\ni.js[_ngcontent-%COMP%]{\r\n    color:  #F0DB4F;\r\n}\r\n\r\ni.sass[_ngcontent-%COMP%]{\r\n    color: #CD6799;\r\n}\r\n\r\ni.ang[_ngcontent-%COMP%]{\r\n    color: #b52e31;\r\n}\r\n\r\n@keyframes scrollShow{\r\n    0%   { transform: translateY(0);}\r\n    100% { transform: translateY(calc(-100% + 50vh));}\r\n}\r\n\r\n@media only screen and (max-width: 1440px){\r\n    .banner__text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n        font-size: 18rem;\r\n    }\r\n    .text__mini[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n        font-size: 18rem;\r\n    }\r\n    .project__item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n        font-size: 7.5rem;\r\n        line-height: 14rem;\r\n        text-shadow: \r\n        -3px -3px 0 #000, \r\n        3px -3px 0 #000, \r\n        -3px 3px 0 #000, \r\n        3px 3px 0 #000;\r\n    }\r\n\r\n    .project__icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n        display: block;\r\n        width: 100%;\r\n        font-size: 6rem;\r\n    }\r\n}\r\n\r\n@media only screen and (max-width: 1024px){\r\n    .banner__text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n        font-size: 13rem;\r\n    }\r\n    .text__mini[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n        font-size: 13rem;\r\n    }\r\n    .banner__pic[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{\r\n        max-height: 110vh;\r\n    }\r\n    .project__container[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        padding: 50px;\r\n    }\r\n    .project__name[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n    }\r\n    .project__item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n        font-size: 4.5rem;\r\n        line-height: 10rem;\r\n        text-shadow: \r\n        -3px -3px 0 #000, \r\n        3px -3px 0 #000, \r\n        -3px 3px 0 #000, \r\n        3px 3px 0 #000;\r\n    }\r\n\r\n    .img__hover[_ngcontent-%COMP%]{\r\n        display: block;\r\n        width: 80%;\r\n        height: 50vh;\r\n        position: relative;\r\n        top: 0;\r\n        margin: 0 auto;\r\n        overflow: hidden;\r\n        z-index: 5;\r\n        pointer-events: none;\r\n        transform: none!important;\r\n    }\r\n    .img__hover[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n        position: relative;\r\n        top: 0;\r\n        left: 0;\r\n        width: 100%;\r\n        height: auto;\r\n        animation-name: scrollShow;\r\n        animation-duration: 10s;\r\n        animation-iteration-count: infinite;\r\n    }\r\n    ul.project__icon[_ngcontent-%COMP%]{\r\n        display: flex;\r\n        flex-direction: row;\r\n        justify-content: space-between;\r\n        width: 100%;\r\n    }\r\n\r\n\r\n}\r\n\r\n@media only screen and (max-width: 768px){\r\n    .banner[_ngcontent-%COMP%]{\r\n        height: 100vh;\r\n        overflow: hidden;\r\n    }\r\n    .banner__text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n        position: relative;\r\n        font-size: 6rem;\r\n        top: 0;\r\n        left: 0;\r\n        transform: none;\r\n        border-bottom: 1px solid #000;\r\n    }\r\n    .banner__pic[_ngcontent-%COMP%]{\r\n        width: 80%;\r\n        transform: none!important;\r\n        margin: 20px auto;\r\n    }\r\n    .paralax02[_ngcontent-%COMP%] {\r\n        transform: none!important;\r\n    }\r\n    .text__mini[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .project__container[_ngcontent-%COMP%] {\r\n        flex-direction: column;\r\n        padding: 20px;\r\n    }\r\n    .project__item[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n        font-size: 2rem;\r\n        line-height: 10rem;\r\n        color: #000;\r\n        font-weight: 400;\r\n        text-shadow: none;\r\n        letter-spacing: 0.5rem;\r\n    }\r\n    .project__icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n        font-size: 2rem;\r\n    }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcHJvamVjdC9wcm9qZWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLDBCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0lBQ1YsMkJBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsMkJBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsaUJBQWlCO0lBQ2pCLFFBQVE7QUFDWjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0lBQ1QsK0JBQStCO0lBQy9CLGdCQUFnQjtBQUNwQjs7QUFDQTtJQUNJLDBCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsMkJBQTJCO0lBQzNCLFdBQVc7QUFDZjs7QUFDQTtJQUNJLGFBQWE7SUFDYix1QkFBdUI7SUFDdkIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qix1QkFBdUI7SUFDdkIsVUFBVTtBQUNkOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLFdBQVc7QUFDZjs7QUFDQTtJQUNJLGNBQWM7SUFDZCwwQkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixxQkFBcUI7SUFDckIsZ0JBQWdCO0lBQ2hCLG9CQUFvQjtJQUNwQixrQkFBa0I7SUFDbEIsWUFBWTtJQUNaOzs7O2tCQUljO0FBQ2xCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGNBQWM7SUFDZCxXQUFXO0lBQ1gsU0FBUztJQUNULGdCQUFnQjtJQUNoQixNQUFNO0lBQ04sTUFBTTtJQUNOLFdBQVc7SUFDWDs7OztrQkFJYztJQUNkLDJCQUEyQjtBQUMvQjs7QUFJQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsU0FBUztJQUNULGtCQUFrQjtJQUNsQixVQUFVO0lBQ1YsZ0JBQWdCO0lBQ2hCLFVBQVU7SUFDVixvQkFBb0I7SUFDcEIsMkJBQTJCO0FBQy9COztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLE1BQU07SUFDTixPQUFPO0lBQ1AsV0FBVztJQUNYLFlBQVk7SUFDWiwwQkFBMEI7SUFDMUIsdUJBQXVCO0lBQ3ZCLG1DQUFtQztBQUN2Qzs7QUFDQTtJQUNJLFlBQVk7QUFDaEI7O0FBQ0E7SUFDSSxZQUFZO0FBQ2hCOztBQU9BO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0Qiw4QkFBOEI7SUFDOUIsVUFBVTtBQUNkOztBQUNBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCOztBQUNBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUVBO0lBQ0ksY0FBYztBQUNsQjs7QUFDQTtJQUNJLGVBQWU7QUFDbkI7O0FBQ0E7SUFDSSxjQUFjO0FBQ2xCOztBQUNBO0lBQ0ksY0FBYztBQUNsQjs7QUFHQTtJQUNJLE9BQU8sd0JBQXdCLENBQUM7SUFDaEMsT0FBTyx5Q0FBeUMsQ0FBQztBQUNyRDs7QUFHQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixrQkFBa0I7UUFDbEI7Ozs7c0JBSWM7SUFDbEI7O0lBRUE7UUFDSSxjQUFjO1FBQ2QsV0FBVztRQUNYLGVBQWU7SUFDbkI7QUFDSjs7QUFHQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksc0JBQXNCO1FBQ3RCLGFBQWE7SUFDakI7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLGtCQUFrQjtRQUNsQjs7OztzQkFJYztJQUNsQjs7SUFFQTtRQUNJLGNBQWM7UUFDZCxVQUFVO1FBQ1YsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixNQUFNO1FBQ04sY0FBYztRQUNkLGdCQUFnQjtRQUNoQixVQUFVO1FBQ1Ysb0JBQW9CO1FBQ3BCLHlCQUF5QjtJQUM3QjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLE1BQU07UUFDTixPQUFPO1FBQ1AsV0FBVztRQUNYLFlBQVk7UUFDWiwwQkFBMEI7UUFDMUIsdUJBQXVCO1FBQ3ZCLG1DQUFtQztJQUN2QztJQUNBO1FBQ0ksYUFBYTtRQUNiLG1CQUFtQjtRQUNuQiw4QkFBOEI7UUFDOUIsV0FBVztJQUNmOzs7QUFHSjs7QUFFQTtJQUNJO1FBQ0ksYUFBYTtRQUNiLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksa0JBQWtCO1FBQ2xCLGVBQWU7UUFDZixNQUFNO1FBQ04sT0FBTztRQUNQLGVBQWU7UUFDZiw2QkFBNkI7SUFDakM7SUFDQTtRQUNJLFVBQVU7UUFDVix5QkFBeUI7UUFDekIsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSx5QkFBeUI7SUFDN0I7SUFDQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLHNCQUFzQjtRQUN0QixhQUFhO0lBQ2pCO0lBQ0E7UUFDSSxlQUFlO1FBQ2Ysa0JBQWtCO1FBQ2xCLFdBQVc7UUFDWCxnQkFBZ0I7UUFDaEIsaUJBQWlCO1FBQ2pCLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL3Byb2plY3QvcHJvamVjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5iYW5uZXJ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMjB2aDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmJhbm5lcl9fdGV4dCBoMntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgZm9udC1zaXplOiAyNXJlbTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDIlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxufVxyXG5cclxuLmJhbm5lcl9fcGlje1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgaGVpZ2h0OiBtYXgtY29udGVudDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG59XHJcblxyXG4uYmFubmVyX19waWMgdmlkZW97XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMXMgZWFzZS1vdXQ7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbiAgICBtYXgtaGVpZ2h0OiAxMzB2aDtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG4gICAgdG9wOiAyMCU7XHJcbn1cclxuXHJcbi50ZXh0X19taW5pIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDIlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwtNTAlKTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnRleHRfX21pbmkgaDJ7XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICBmb250LXNpemU6IDI1cmVtO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbn1cclxuLnByb2plY3RfX2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4OyBcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjsgXHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG1heC13aWR0aDogMTkyMHB4O1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBwYWRkaW5nOiAxMDBweDtcclxufVxyXG5cclxuLnByb2plY3RfX25hbWV7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgd2lkdGg6IDkwJTtcclxufVxyXG4ucHJvamVjdF9faXRlbXtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5wcm9qZWN0X19pdGVtIGgze1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogbWF4LWNvbnRlbnQ7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgICBmb250LWZhbWlseTogJ2ZpbGxpbic7XHJcbiAgICBmb250LXNpemU6IDExcmVtO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDFyZW07XHJcbiAgICBsaW5lLWhlaWdodDogMTlyZW07XHJcbiAgICBjb2xvcjogd2hpdGU7XHJcbiAgICB0ZXh0LXNoYWRvdzogXHJcbiAgICAtNXB4IC01cHggMCAjMDAwLCBcclxuICAgIDVweCAtNXB4IDAgIzAwMCwgXHJcbiAgICAtNXB4IDVweCAwICMwMDAsIFxyXG4gICAgNXB4IDVweCAwICMwMDA7XHJcbn1cclxuLnByb2plY3RfX2l0ZW0gaDM6bnRoLW9mLXR5cGUoMil7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAwO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6MDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgdGV4dC1zaGFkb3c6IFxyXG4gICAgLTZweCAtNnB4IDAgI2ZmZiwgXHJcbiAgICA2cHggLTZweCAwICNmZmYsIFxyXG4gICAgLTZweCA2cHggMCAjZmZmLCBcclxuICAgIDZweCA2cHggMCAjZmZmO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDEuNXMgbGluZWFyO1xyXG59XHJcblxyXG5cclxuXHJcbi5pbWdfX2hvdmVye1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogNDB2dztcclxuICAgIGhlaWdodDogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogLTMwdmg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgei1pbmRleDogNTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuNXMgbGluZWFyO1xyXG59XHJcbi5pbWdfX2hvdmVyIGltZ3tcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogMDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBzY3JvbGxTaG93O1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMHM7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxufVxyXG4ucHJvamVjdF9faXRlbTpob3ZlciBoMzpudGgtb2YtdHlwZSgyKXtcclxuICAgIGhlaWdodDogMTAwJTtcclxufVxyXG4ucHJvamVjdF9faXRlbTpob3ZlciAuaW1nX19ob3ZlcntcclxuICAgIGhlaWdodDogNTB2aDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG51bC5wcm9qZWN0X19pY29ue1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB3aWR0aDogMTAlO1xyXG59XHJcbi5wcm9qZWN0X19pY29uIGxpIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcbi5wcm9qZWN0X19pY29uIGkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTByZW07XHJcbn1cclxuaS5odG1seyBcclxuICAgIGNvbG9yOiAjZTM0ZjI2O1xyXG59XHJcblxyXG5pLmNzc3tcclxuICAgIGNvbG9yOiAjMjk2NWYxO1xyXG59XHJcbmkuanN7XHJcbiAgICBjb2xvcjogICNGMERCNEY7XHJcbn1cclxuaS5zYXNze1xyXG4gICAgY29sb3I6ICNDRDY3OTk7XHJcbn1cclxuaS5hbmd7XHJcbiAgICBjb2xvcjogI2I1MmUzMTtcclxufVxyXG5cclxuXHJcbkBrZXlmcmFtZXMgc2Nyb2xsU2hvd3tcclxuICAgIDAlICAgeyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7fVxyXG4gICAgMTAwJSB7IHRyYW5zZm9ybTogdHJhbnNsYXRlWShjYWxjKC0xMDAlICsgNTB2aCkpO31cclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTQ0MHB4KXtcclxuICAgIC5iYW5uZXJfX3RleHQgaDJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAxOHJlbTtcclxuICAgIH1cclxuICAgIC50ZXh0X19taW5pIGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMThyZW07XHJcbiAgICB9XHJcbiAgICAucHJvamVjdF9faXRlbSBoM3tcclxuICAgICAgICBmb250LXNpemU6IDcuNXJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTRyZW07XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IFxyXG4gICAgICAgIC0zcHggLTNweCAwICMwMDAsIFxyXG4gICAgICAgIDNweCAtM3B4IDAgIzAwMCwgXHJcbiAgICAgICAgLTNweCAzcHggMCAjMDAwLCBcclxuICAgICAgICAzcHggM3B4IDAgIzAwMDtcclxuICAgIH1cclxuXHJcbiAgICAucHJvamVjdF9faWNvbiBpIHtcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBmb250LXNpemU6IDZyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCl7XHJcbiAgICAuYmFubmVyX190ZXh0IGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTNyZW07XHJcbiAgICB9XHJcbiAgICAudGV4dF9fbWluaSBoMntcclxuICAgICAgICBmb250LXNpemU6IDEzcmVtO1xyXG4gICAgfVxyXG4gICAgLmJhbm5lcl9fcGljIHZpZGVve1xyXG4gICAgICAgIG1heC1oZWlnaHQ6IDExMHZoO1xyXG4gICAgfVxyXG4gICAgLnByb2plY3RfX2NvbnRhaW5lciB7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBwYWRkaW5nOiA1MHB4O1xyXG4gICAgfVxyXG4gICAgLnByb2plY3RfX25hbWV7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcbiAgICAucHJvamVjdF9faXRlbSBoM3tcclxuICAgICAgICBmb250LXNpemU6IDQuNXJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMTByZW07XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IFxyXG4gICAgICAgIC0zcHggLTNweCAwICMwMDAsIFxyXG4gICAgICAgIDNweCAtM3B4IDAgIzAwMCwgXHJcbiAgICAgICAgLTNweCAzcHggMCAjMDAwLCBcclxuICAgICAgICAzcHggM3B4IDAgIzAwMDtcclxuICAgIH1cclxuXHJcbiAgICAuaW1nX19ob3ZlcntcclxuICAgICAgICBkaXNwbGF5OiBibG9jaztcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIGhlaWdodDogNTB2aDtcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgei1pbmRleDogNTtcclxuICAgICAgICBwb2ludGVyLWV2ZW50czogbm9uZTtcclxuICAgICAgICB0cmFuc2Zvcm06IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLmltZ19faG92ZXIgaW1ne1xyXG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICBoZWlnaHQ6IGF1dG87XHJcbiAgICAgICAgYW5pbWF0aW9uLW5hbWU6IHNjcm9sbFNob3c7XHJcbiAgICAgICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxMHM7XHJcbiAgICAgICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbiAgICB9XHJcbiAgICB1bC5wcm9qZWN0X19pY29ue1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCl7XHJcbiAgICAuYmFubmVye1xyXG4gICAgICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgIH1cclxuICAgIC5iYW5uZXJfX3RleHQgaDJ7XHJcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNnJlbTtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICMwMDA7XHJcbiAgICB9XHJcbiAgICAuYmFubmVyX19waWN7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgICAgIG1hcmdpbjogMjBweCBhdXRvO1xyXG4gICAgfVxyXG4gICAgLnBhcmFsYXgwMiB7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBub25lIWltcG9ydGFudDtcclxuICAgIH1cclxuICAgIC50ZXh0X19taW5pIGgye1xyXG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAucHJvamVjdF9fY29udGFpbmVyIHtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB9XHJcbiAgICAucHJvamVjdF9faXRlbSBoM3tcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEwcmVtO1xyXG4gICAgICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgICAgICAgdGV4dC1zaGFkb3c6IG5vbmU7XHJcbiAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNXJlbTtcclxuICAgIH1cclxuICAgIC5wcm9qZWN0X19pY29uIGkge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgIH1cclxuXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ProjectComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-project',
                templateUrl: './project.component.html',
                styleUrls: ['./project.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "84zG":
/*!******************************************!*\
  !*** ./src/app/about/about.component.ts ***!
  \******************************************/
/*! exports provided: AboutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AboutComponent", function() { return AboutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class AboutComponent {
    constructor() {
        this.abc = "../../assets/img/a.jpg";
    }
    ngOnInit() {
        // pic paralax  effect
        document.addEventListener("scroll", function () {
            let pic = document.querySelector(".paralax01");
            let pos = document.querySelectorAll(".banner");
            let pos2 = document.querySelector(".text__pos");
            let end = pos[0].offsetTop + pos2.offsetTop - 100;
            if (window.scrollY < end)
                pic.style.transform = `translateY(-${(window.scrollY - (pos[0].offsetTop - 300)) / 2}px)`;
        });
        //text__header effect
        window.addEventListener("scroll", function () {
            let text = document.querySelector(".header__show");
            let pos1 = document.querySelector(".about__container");
            let pos2 = document.querySelector(".text__header");
            let trigger = pos1.offsetTop + pos2.offsetTop + text.offsetTop - screen.height / 2;
            if (window.scrollY > trigger)
                text.style.height = "320px";
        });
        //text__extra effect
        window.addEventListener("scroll", function () {
            let text = document.querySelector(".extra__show");
            let pos1 = document.querySelector(".about__container");
            let pos2 = document.querySelector(".extra__quote");
            let trigger = pos1.offsetTop + pos2.offsetTop + text.offsetTop - screen.height / 2;
            if (window.scrollY > trigger)
                text.style.height = "320px";
        });
        //quote__text effect
        window.addEventListener("scroll", function () {
            let pos1 = document.querySelector(".about__container");
            let pos2 = document.querySelectorAll(".quote");
            let cover = document.querySelectorAll(".quote__show");
            let trigger1 = pos1.offsetTop + pos2[0].offsetTop - 100;
            let trigger2 = pos1.offsetTop + pos2[1].offsetTop;
            let trigger3 = pos1.offsetTop + pos2[2].offsetTop;
            if (window.scrollY > trigger1)
                cover[0].style.width = "0px";
            if (window.scrollY > trigger2)
                cover[1].style.width = "0px";
            if (window.scrollY > trigger3)
                cover[2].style.width = "0px";
        });
        //mouse move paralax effect
        let qCon = document.querySelector(".about__container");
        const q = document.querySelectorAll(".quote");
        const qImg = document.querySelectorAll(".quote__img");
        const img0 = document.querySelector(".img__hover0");
        const img1 = document.querySelector(".img__hover1");
        const img2 = document.querySelector(".img__circle");
        const span0 = document.querySelector(".blue");
        const span1 = document.querySelector(".pink");
        const span2 = document.querySelector(".circle");
        // pic1
        qImg[0].addEventListener("mouseout", function () {
            img0.style.transition = `all 0.5s ease-out`;
            span0.style.transition = `all 0.5s ease-out`;
            img0.style.transform = `none`;
            span0.style.transform = `none`;
        });
        qImg[0].addEventListener("mousemove", function (e) {
            let _w = qImg[0].offsetWidth / 2;
            let _h = qImg[0].offsetWidth / 2;
            let _mouseX = e.pageX - (qCon.offsetLeft + qImg[0].offsetLeft);
            let _mouseY = e.pageY - (qCon.offsetTop + q[0].offsetTop + 50);
            let _mov1 = `${(_w - _mouseX) * 0.1}px, ${(_h - _mouseY) * 0.1}px`;
            let _mov2 = `${(_mouseX - _w) * 0.4}px, ${(_mouseY - _h) * 0.25}px`;
            img0.style.transition = `all 0s linear`;
            span0.style.transition = `all 0s linear`;
            img0.style.transform = `translate(${_mov1})`;
            span0.style.transform = `translate(${_mov2})`;
        });
        //pic2
        qImg[1].addEventListener("mouseout", function () {
            img1.style.transition = `all 0.5s ease-out`;
            span1.style.transition = `all 0.5s ease-out`;
            img1.style.transform = `none`;
            span1.style.transform = `none`;
        });
        qImg[1].addEventListener("mousemove", function (e) {
            let _w = qImg[1].offsetWidth / 2;
            let _h = qImg[1].offsetWidth / 2;
            let _mouseX = e.pageX - (qCon.offsetLeft + q[1].offsetLeft + 50);
            let _mouseY = e.pageY - (qCon.offsetTop + q[1].offsetTop + 50);
            let _mov1 = `${(_w - _mouseX) * 0.1}px, ${(_h - _mouseY) * 0.1}px`;
            let _mov2 = `${(_mouseX - _w) * 0.4}px, ${(_mouseY - _h) * 0.25}px`;
            img1.style.transition = `all 0s linear`;
            span1.style.transition = `all 0s linear`;
            img1.style.transform = `translate(${_mov1})`;
            span1.style.transform = `translate(${_mov2})`;
        });
        //pic3
        qImg[2].addEventListener("mouseout", function () {
            img2.style.transition = `all 0.5s ease-out`;
            span2.style.transition = `all 0.5s ease-out`;
            img2.style.transform = `none`;
            span2.style.transform = `none`;
        });
        qImg[2].addEventListener("mousemove", function (e) {
            let _w = qImg[2].offsetWidth / 2;
            let _h = qImg[2].offsetWidth / 2;
            let _mouseX = e.pageX - (qCon.offsetLeft + qImg[2].offsetLeft);
            let _mouseY = e.pageY - (qCon.offsetTop + q[2].offsetTop + 50);
            let _mov1 = `${(_w - _mouseX) * 0.05}px, ${(_h - _mouseY) * 0.05}px`;
            let _mov2 = `${(_mouseX - _w) * 0.07}px, ${(_mouseY - _h) * 0.07}px`;
            img2.style.transition = `all 0s linear`;
            span2.style.transition = `all 0s linear`;
            img2.style.transform = `translate(${_mov1})`;
            span2.style.transform = `translate(${_mov2})`;
        });
    }
}
AboutComponent.ɵfac = function AboutComponent_Factory(t) { return new (t || AboutComponent)(); };
AboutComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AboutComponent, selectors: [["app-about"]], decls: 62, vars: 0, consts: [[1, "blankspace"], ["id", "about", 1, "hero"], [1, "banner"], [1, "banner__text"], [1, "text__pos"], [1, "banner__pic"], [1, "paralax01"], ["src", "../../assets/img/a.jpg", "alt", ""], ["src", "../../assets/img/b.jpg", "alt", ""], ["src", "../../assets/img/c.jpg", "alt", ""], [1, "text__mini"], [1, "about__container"], [1, "text__header"], [1, "header__show"], [1, "quote"], [1, "quote__text"], [1, "quote__show", "left"], [1, "quote__img"], [1, "img__sizing", "img__hover0"], ["src", "../../assets/img/pic01.jpg", "alt", ""], [1, "blue"], [1, "img__sizing", "img__hover1"], ["src", "../../assets/img/pic02.jpg", "alt", ""], [1, "pink"], [1, "quote__show"], [1, "extra__quote"], [1, "extra__show"], [1, "img__sizing", "img__circle"], ["src", "../../assets/img/circle.png", "alt", "", 1, "circle"], ["src", "../../assets/img/pic03.png", "alt", ""]], template: function AboutComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "h2", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, "about me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](8, "img", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "img", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "img", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "about me");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "div", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "h3", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " I'm Duy Nguyen, a front-end developer with the desire to develop myself, gain more experience in a professional working environment. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Education");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "4th year student at Academy of ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](24, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " Cryptography techniques(KMA).");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "div", 16);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "div", 18);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](29, "img", 19);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "span", 20);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 21);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "img", 22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](35, "span", 23);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](38, "Knowleges");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](39, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](40, "Basic about Html, Css, Sass, Js, Ps, ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "Angular and Object-oriented programming. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](43, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 25);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "h3", 26);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " Passionate to create highly artistic websites, define a higher standard of web and gives everyone a new experience of it. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "div", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "div", 17);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](49, "div", 27);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "img", 28);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](51, "img", 29);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](52, "div", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](53, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, "Little more");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](56, "Good programming thinking.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](57, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](58, " Good English.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](59, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, " Capable of working group.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](61, "div", 24);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".banner[_ngcontent-%COMP%]{\r\n    display: block;\r\n    width: 100%;\r\n    position: relative;\r\n}\r\n\r\n.banner__text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    display: block;\r\n    width: -webkit-max-content;\r\n    width: max-content;\r\n    font-size: 25rem;\r\n    position: absolute;\r\n    top: 58%;\r\n    left: 50%;\r\n    transform: translate(-50%,-50%);\r\n}\r\n\r\n.banner__pic[_ngcontent-%COMP%]{\r\n    display: block;\r\n    width: 45%;\r\n    height: -webkit-max-content;\r\n    height: max-content;\r\n    margin: 0 auto;\r\n    position: relative;\r\n}\r\n\r\n.banner__pic[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{\r\n    transition: all 1s ease-out;\r\n    position: relative;\r\n    top: 20%;\r\n}\r\n\r\n.paralax01[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-of-type(2){\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    opacity: 0;\r\n    animation-name: img2;\r\n    animation-duration: 15s;\r\n    animation-iteration-count: infinite;\r\n}\r\n\r\n.paralax01[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-of-type(3){\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n    opacity: 0;\r\n    animation-name: img3;\r\n    animation-duration: 15s;\r\n    animation-iteration-count: infinite;\r\n}\r\n\r\n.text__mini[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: 45%;\r\n    position: absolute;\r\n    top: 58%;\r\n    left: 50%;\r\n    transform: translate(-50%,-50%);\r\n    overflow: hidden;\r\n}\r\n\r\n.text__mini[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n    width: -webkit-max-content;\r\n    width: max-content;\r\n    font-size: 25rem;\r\n    position: relative;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    color: #fff;\r\n}\r\n\r\n.about__container[_ngcontent-%COMP%] {\r\n    display: block;\r\n    position: relative;\r\n    width: 100%;\r\n    max-width: 1440px;\r\n    margin: 0 auto;\r\n}\r\n\r\n.text__header[_ngcontent-%COMP%]{\r\n    display: block;\r\n    width: 100%;\r\n    height: 62vh;\r\n    position: relative;\r\n    text-align: center;\r\n}\r\n\r\n.text__header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    font-size: 5rem;\r\n    line-height: 8rem;\r\n}\r\n\r\n.header__show[_ngcontent-%COMP%]{\r\n    width: 75%;\r\n    margin: 0 auto;\r\n    height: 0;\r\n    overflow: hidden;\r\n    transition: all 1s linear;\r\n}\r\n\r\n.quote[_ngcontent-%COMP%] {\r\n    display: flex;\r\n    width: 50%;\r\n    justify-content: center;\r\n    flex-direction: column;\r\n    padding: 50px;\r\n}\r\n\r\n.quote__text[_ngcontent-%COMP%]{\r\n    position: relative;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: flex-start;\r\n    width: 100%;\r\n    padding: 0 50px 50px;\r\n    text-align: start;\r\n}\r\n\r\n.quote__text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    display: block;\r\n    font-size: 2.5rem;\r\n    font-weight: 700;\r\n    padding: 0 30px;\r\n    border-left: 2px solid #808080;\r\n}\r\n\r\n.quote__text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n    display: block;\r\n    font-size: 2rem;\r\n    font-weight: 400;\r\n    line-height: 3rem;\r\n    padding: 30px 30px 0;\r\n    border-left: 2px solid #808080;\r\n}\r\n\r\ndiv.quote__show[_ngcontent-%COMP%]{\r\n    display: block;\r\n    background-color: #fff;\r\n    width: 100%;\r\n    height: 200px;\r\n    transition: all 0.5s linear;\r\n    position: absolute;\r\n    right: 0;\r\n    bottom: 0;\r\n}\r\n\r\ndiv.left[_ngcontent-%COMP%]{\r\n    right: none;\r\n    left: 0;\r\n}\r\n\r\n.quote__img[_ngcontent-%COMP%]{\r\n    display: block;\r\n    width: 100%;\r\n    padding: 100px 50px 50px;\r\n    overflow: hidden;\r\n    position: relative;\r\n    transition: none;\r\n}\r\n\r\n.img__sizing[_ngcontent-%COMP%] {\r\n    position: relative;\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    transition: all 0.5s linear;\r\n}\r\n\r\n.img__sizing[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    display: block;\r\n    width: calc(100% - 100px);\r\n    height: 100%;\r\n    position: absolute;\r\n    top: -50px;\r\n    left: 50px;\r\n    margin: 0 auto;\r\n    border: 4px solid #fff;\r\n}\r\n\r\n.img__sizing[_ngcontent-%COMP%]   span.blue[_ngcontent-%COMP%]{\r\n    border-color: #acdafc;\r\n}\r\n\r\n.img__sizing[_ngcontent-%COMP%]   span.pink[_ngcontent-%COMP%]{\r\n    border-color: #f9b1bd;\r\n}\r\n\r\n.img__sizing[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    object-fit: cover;\r\n}\r\n\r\n.img__circle[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]:nth-of-type(2){\r\n    position: absolute;\r\n    top: 0;\r\n    left: 0;\r\n}\r\n\r\n.quote[_ngcontent-%COMP%]:nth-of-type(2){\r\n    flex-direction: row;\r\n    width: 100%;\r\n}\r\n\r\n.quote[_ngcontent-%COMP%]:nth-of-type(2)   .quote__img[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n}\r\n\r\n.quote[_ngcontent-%COMP%]:nth-of-type(2)   .quote__text[_ngcontent-%COMP%] {\r\n    width: 50%;\r\n    justify-content: flex-end;\r\n    text-align: end;\r\n    \r\n}\r\n\r\n.quote[_ngcontent-%COMP%]:nth-of-type(2)   .quote__text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\r\n    border-right: 2px solid #808080;\r\n    border-left: none;\r\n}\r\n\r\n.quote[_ngcontent-%COMP%]:nth-of-type(2)   .quote__text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\r\n    border-right: 2px solid #808080;\r\n    border-left: none;\r\n}\r\n\r\n.quote[_ngcontent-%COMP%]:nth-of-type(3) {\r\n    float: left;\r\n}\r\n\r\n.extra__quote[_ngcontent-%COMP%] {\r\n    float: left;\r\n    display: block;\r\n    width: 50%;\r\n    height: 70vh;\r\n    position: relative;\r\n    text-align: end;\r\n}\r\n\r\n.extra__quote[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    padding: 0 30px;\r\n    position: relative;\r\n    display: block;\r\n    width: 100%;\r\n    top: 50%;\r\n    transform: translateY(-50%);\r\n    left: 0;\r\n    font-weight: 500;\r\n    font-size: 4rem;\r\n    line-height: 5.5rem;\r\n}\r\n\r\n.extra__show[_ngcontent-%COMP%]{\r\n    height: 0;\r\n    overflow: hidden;\r\n    transition: all 1s linear;\r\n}\r\n\r\n@keyframes img2{\r\n    0%      {opacity: 0;}\r\n    23%     {opacity: 0;}\r\n    33%     {opacity: 1;}\r\n    90%     {opacity: 1;}\r\n    100%    {opacity: 0;}\r\n}\r\n\r\n@keyframes img3{\r\n    0%      {opacity: 0;}\r\n    56%     {opacity: 0;}\r\n    66%      {opacity: 1;}\r\n    90%     {opacity: 1;}\r\n    100%    {opacity: 0;}\r\n}\r\n\r\n@media only screen and (max-width: 1440px){\r\n    .banner__text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n        font-size: 20rem;\r\n    }\r\n    .text__mini[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n        font-size: 20rem;\r\n    }\r\n    .text__header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n        font-size: 4rem;\r\n        line-height: 5rem;\r\n    }\r\n    .extra__quote[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n        font-size: 3rem;\r\n        line-height: 4.5rem;\r\n    }\r\n\r\n}\r\n\r\n@media only screen and (max-width: 1024px){\r\n    .banner__text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n        font-size: 15rem;\r\n    }\r\n    .text__mini[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n        font-size: 15rem;\r\n    }\r\n    .text__header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n        position: relative;\r\n        top: 50%;\r\n        transform: translateY(-50%);\r\n        font-size: 3rem;\r\n        line-height: 5rem;\r\n    }\r\n    .quote[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n\r\n    .quote[_ngcontent-%COMP%]:nth-of-type(2){\r\n        flex-direction: column-reverse;\r\n        justify-content: flex-end;\r\n    }\r\n    .quote[_ngcontent-%COMP%]:nth-of-type(2)   .quote__img[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n    }\r\n    .quote[_ngcontent-%COMP%]:nth-of-type(2)   .quote__text[_ngcontent-%COMP%] {\r\n        width: 100%;        \r\n    }\r\n    .extra__quote[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        text-align: center;\r\n    }\r\n    .extra__quote[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n        padding: 100px 0;\r\n        width: 80%;\r\n        margin: 0 auto;\r\n    }\r\n\r\n}\r\n\r\n@media only screen and (max-width: 768px){\r\n    .banner__text[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n        position: relative;\r\n        font-size: 6rem;\r\n        top: 0;\r\n        left: 0;\r\n        transform: none;\r\n        border-bottom: 1px solid #000;\r\n    }\r\n    .banner__pic[_ngcontent-%COMP%]{\r\n        width: 80%;\r\n        transform: none!important;\r\n        margin: 20px auto;\r\n    }\r\n    .paralax01[_ngcontent-%COMP%] {\r\n        transform: none!important;\r\n    }\r\n    .text__mini[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{\r\n        display: none;\r\n    }\r\n    .text__header[_ngcontent-%COMP%]{\r\n        height: 400px;\r\n    }\r\n    .text__header[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n        padding: 50px 0 0;\r\n        font-size: 2rem;\r\n        line-height: 3rem;\r\n    }\r\n\r\n    .quote[_ngcontent-%COMP%] {\r\n        width: 100%;\r\n        padding: 0;\r\n    }\r\n    .img__sizing[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        height: 100%;\r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        border: 4px solid #fff;\r\n    }\r\n    .quote__text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n        font-size: 1.5rem;\r\n        padding: 0 15px;\r\n    }\r\n    .quote__text[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{\r\n        font-size: 1.5rem;\r\n        line-height: 2rem;\r\n        padding: 15px 15px 0;\r\n    }\r\n\r\n\r\n    .extra__quote[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n        font-size: 2rem;\r\n        line-height: 3.5rem;\r\n        padding: 100px 0;\r\n        width: 80%;\r\n        margin: 0 auto;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXQvYWJvdXQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksY0FBYztJQUNkLDBCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULCtCQUErQjtBQUNuQzs7QUFFQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0lBQ1YsMkJBQW1CO0lBQW5CLG1CQUFtQjtJQUNuQixjQUFjO0lBQ2Qsa0JBQWtCO0FBQ3RCOztBQUVBO0lBQ0ksMkJBQTJCO0lBQzNCLGtCQUFrQjtJQUNsQixRQUFRO0FBQ1o7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixtQ0FBbUM7QUFDdkM7O0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsTUFBTTtJQUNOLE9BQU87SUFDUCxVQUFVO0lBQ1Ysb0JBQW9CO0lBQ3BCLHVCQUF1QjtJQUN2QixtQ0FBbUM7QUFDdkM7O0FBRUE7SUFDSSxjQUFjO0lBQ2QsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULCtCQUErQjtJQUMvQixnQkFBZ0I7QUFDcEI7O0FBQ0E7SUFDSSwwQkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsU0FBUztJQUNULDJCQUEyQjtJQUMzQixXQUFXO0FBQ2Y7O0FBSUE7SUFDSSxjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtJQUNsQixrQkFBa0I7QUFDdEI7O0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksVUFBVTtJQUNWLGNBQWM7SUFDZCxTQUFTO0lBQ1QsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtBQUM3Qjs7QUFDQTtJQUNJLGFBQWE7SUFDYixVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixhQUFhO0FBQ2pCOztBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixzQkFBc0I7SUFDdEIsMkJBQTJCO0lBQzNCLFdBQVc7SUFDWCxvQkFBb0I7SUFDcEIsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksY0FBYztJQUNkLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLDhCQUE4QjtBQUNsQzs7QUFDQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0lBQ2YsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtJQUNqQixvQkFBb0I7SUFDcEIsOEJBQThCO0FBQ2xDOztBQUNBO0lBQ0ksY0FBYztJQUNkLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsYUFBYTtJQUNiLDJCQUEyQjtJQUMzQixrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7QUFDYjs7QUFDQTtJQUNJLFdBQVc7SUFDWCxPQUFPO0FBQ1g7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsV0FBVztJQUNYLHdCQUF3QjtJQUN4QixnQkFBZ0I7SUFDaEIsa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsV0FBVztJQUNYLFlBQVk7SUFDWiwyQkFBMkI7QUFDL0I7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLFVBQVU7SUFDVixjQUFjO0lBQ2Qsc0JBQXNCO0FBQzFCOztBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0kscUJBQXFCO0FBQ3pCOztBQUNBO0lBQ0ksV0FBVztJQUNYLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixNQUFNO0lBQ04sT0FBTztBQUNYOztBQUVBO0lBQ0ksbUJBQW1CO0lBQ25CLFdBQVc7QUFDZjs7QUFDQTtJQUNJLFVBQVU7QUFDZDs7QUFDQTtJQUNJLFVBQVU7SUFDVix5QkFBeUI7SUFDekIsZUFBZTs7QUFFbkI7O0FBQ0E7SUFDSSwrQkFBK0I7SUFDL0IsaUJBQWlCO0FBQ3JCOztBQUNBO0lBQ0ksK0JBQStCO0lBQy9CLGlCQUFpQjtBQUNyQjs7QUFDQTtJQUNJLFdBQVc7QUFDZjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxjQUFjO0lBQ2QsVUFBVTtJQUNWLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsZUFBZTtBQUNuQjs7QUFDQTtJQUNJLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsY0FBYztJQUNkLFdBQVc7SUFDWCxRQUFRO0lBQ1IsMkJBQTJCO0lBQzNCLE9BQU87SUFDUCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLFNBQVM7SUFDVCxnQkFBZ0I7SUFDaEIseUJBQXlCO0FBQzdCOztBQUVBO0lBQ0ksU0FBUyxVQUFVLENBQUM7SUFDcEIsU0FBUyxVQUFVLENBQUM7SUFDcEIsU0FBUyxVQUFVLENBQUM7SUFDcEIsU0FBUyxVQUFVLENBQUM7SUFDcEIsU0FBUyxVQUFVLENBQUM7QUFDeEI7O0FBQ0E7SUFDSSxTQUFTLFVBQVUsQ0FBQztJQUNwQixTQUFTLFVBQVUsQ0FBQztJQUNwQixVQUFVLFVBQVUsQ0FBQztJQUNyQixTQUFTLFVBQVUsQ0FBQztJQUNwQixTQUFTLFVBQVUsQ0FBQztBQUN4Qjs7QUFFQTtJQUNJO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxnQkFBZ0I7SUFDcEI7SUFDQTtRQUNJLGVBQWU7UUFDZixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLGVBQWU7UUFDZixtQkFBbUI7SUFDdkI7O0FBRUo7O0FBR0E7SUFDSTtRQUNJLGdCQUFnQjtJQUNwQjtJQUNBO1FBQ0ksZ0JBQWdCO0lBQ3BCO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsUUFBUTtRQUNSLDJCQUEyQjtRQUMzQixlQUFlO1FBQ2YsaUJBQWlCO0lBQ3JCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSw4QkFBOEI7UUFDOUIseUJBQXlCO0lBQzdCO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksV0FBVztRQUNYLGtCQUFrQjtJQUN0QjtJQUNBO1FBQ0ksZ0JBQWdCO1FBQ2hCLFVBQVU7UUFDVixjQUFjO0lBQ2xCOztBQUVKOztBQUVBO0lBQ0k7UUFDSSxrQkFBa0I7UUFDbEIsZUFBZTtRQUNmLE1BQU07UUFDTixPQUFPO1FBQ1AsZUFBZTtRQUNmLDZCQUE2QjtJQUNqQztJQUNBO1FBQ0ksVUFBVTtRQUNWLHlCQUF5QjtRQUN6QixpQkFBaUI7SUFDckI7SUFDQTtRQUNJLHlCQUF5QjtJQUM3QjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksYUFBYTtJQUNqQjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLGVBQWU7UUFDZixpQkFBaUI7SUFDckI7O0lBRUE7UUFDSSxXQUFXO1FBQ1gsVUFBVTtJQUNkO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsWUFBWTtRQUNaLGtCQUFrQjtRQUNsQixNQUFNO1FBQ04sT0FBTztRQUNQLHNCQUFzQjtJQUMxQjtJQUNBO1FBQ0ksaUJBQWlCO1FBQ2pCLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGlCQUFpQjtRQUNqQixpQkFBaUI7UUFDakIsb0JBQW9CO0lBQ3hCOzs7SUFHQTtRQUNJLGVBQWU7UUFDZixtQkFBbUI7UUFDbkIsZ0JBQWdCO1FBQ2hCLFVBQVU7UUFDVixjQUFjO0lBQ2xCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9hYm91dC9hYm91dC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmJhbm5lcntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbn1cclxuXHJcbi5iYW5uZXJfX3RleHQgaDJ7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgIGZvbnQtc2l6ZTogMjVyZW07XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDU4JTtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlKC01MCUsLTUwJSk7XHJcbn1cclxuXHJcbi5iYW5uZXJfX3BpY3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDQ1JTtcclxuICAgIGhlaWdodDogbWF4LWNvbnRlbnQ7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxufVxyXG5cclxuLmJhbm5lcl9fcGljIGltZ3tcclxuICAgIHRyYW5zaXRpb246IGFsbCAxcyBlYXNlLW91dDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRvcDogMjAlO1xyXG59XHJcbi5wYXJhbGF4MDEgaW1nOm50aC1vZi10eXBlKDIpe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxuICAgIG9wYWNpdHk6IDA7XHJcbiAgICBhbmltYXRpb24tbmFtZTogaW1nMjtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogMTVzO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbn1cclxuLnBhcmFsYXgwMSBpbWc6bnRoLW9mLXR5cGUoMyl7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDA7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBpbWczO1xyXG4gICAgYW5pbWF0aW9uLWR1cmF0aW9uOiAxNXM7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxufVxyXG5cclxuLnRleHRfX21pbmkge1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogNDUlO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1OCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG4gICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxufVxyXG4udGV4dF9fbWluaSBoMntcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgIGZvbnQtc2l6ZTogMjVyZW07XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVgoLTUwJSk7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG5cclxuXHJcblxyXG4uYWJvdXRfX2NvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiAxNDQwcHg7XHJcbiAgICBtYXJnaW46IDAgYXV0bztcclxufVxyXG5cclxuLnRleHRfX2hlYWRlcntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDYydmg7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRleHRfX2hlYWRlciBoM3tcclxuICAgIGZvbnQtc2l6ZTogNXJlbTtcclxuICAgIGxpbmUtaGVpZ2h0OiA4cmVtO1xyXG59XHJcbi5oZWFkZXJfX3Nob3d7XHJcbiAgICB3aWR0aDogNzUlO1xyXG4gICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGxpbmVhcjtcclxufVxyXG4ucXVvdGUge1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG59XHJcbi5xdW90ZV9fdGV4dHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAwIDUwcHggNTBweDtcclxuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xyXG59XHJcbi5xdW90ZV9fdGV4dCBoM3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgcGFkZGluZzogMCAzMHB4O1xyXG4gICAgYm9yZGVyLWxlZnQ6IDJweCBzb2xpZCAjODA4MDgwO1xyXG59XHJcbi5xdW90ZV9fdGV4dCBwe1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICBmb250LXdlaWdodDogNDAwO1xyXG4gICAgbGluZS1oZWlnaHQ6IDNyZW07XHJcbiAgICBwYWRkaW5nOiAzMHB4IDMwcHggMDtcclxuICAgIGJvcmRlci1sZWZ0OiAycHggc29saWQgIzgwODA4MDtcclxufVxyXG5kaXYucXVvdGVfX3Nob3d7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMjAwcHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBsaW5lYXI7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIGJvdHRvbTogMDtcclxufVxyXG5kaXYubGVmdHtcclxuICAgIHJpZ2h0OiBub25lO1xyXG4gICAgbGVmdDogMDtcclxufVxyXG4ucXVvdGVfX2ltZ3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiAxMDBweCA1MHB4IDUwcHg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgdHJhbnNpdGlvbjogbm9uZTtcclxufVxyXG5cclxuLmltZ19fc2l6aW5nIHtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC41cyBsaW5lYXI7XHJcbn1cclxuLmltZ19fc2l6aW5nIHNwYW57XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSAxMDBweCk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IC01MHB4O1xyXG4gICAgbGVmdDogNTBweDtcclxuICAgIG1hcmdpbjogMCBhdXRvO1xyXG4gICAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcclxufVxyXG4uaW1nX19zaXppbmcgc3Bhbi5ibHVle1xyXG4gICAgYm9yZGVyLWNvbG9yOiAjYWNkYWZjO1xyXG59XHJcbi5pbWdfX3NpemluZyBzcGFuLnBpbmt7XHJcbiAgICBib3JkZXItY29sb3I6ICNmOWIxYmQ7XHJcbn1cclxuLmltZ19fc2l6aW5nIGltZyB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG4uaW1nX19jaXJjbGUgaW1nOm50aC1vZi10eXBlKDIpe1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgbGVmdDogMDtcclxufVxyXG5cclxuLnF1b3RlOm50aC1vZi10eXBlKDIpe1xyXG4gICAgZmxleC1kaXJlY3Rpb246IHJvdztcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5xdW90ZTpudGgtb2YtdHlwZSgyKSAucXVvdGVfX2ltZyB7XHJcbiAgICB3aWR0aDogNTAlO1xyXG59XHJcbi5xdW90ZTpudGgtb2YtdHlwZSgyKSAucXVvdGVfX3RleHQge1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XHJcbiAgICB0ZXh0LWFsaWduOiBlbmQ7XHJcbiAgICBcclxufVxyXG4ucXVvdGU6bnRoLW9mLXR5cGUoMikgLnF1b3RlX190ZXh0IGgzIHtcclxuICAgIGJvcmRlci1yaWdodDogMnB4IHNvbGlkICM4MDgwODA7XHJcbiAgICBib3JkZXItbGVmdDogbm9uZTtcclxufVxyXG4ucXVvdGU6bnRoLW9mLXR5cGUoMikgLnF1b3RlX190ZXh0IHAge1xyXG4gICAgYm9yZGVyLXJpZ2h0OiAycHggc29saWQgIzgwODA4MDtcclxuICAgIGJvcmRlci1sZWZ0OiBub25lO1xyXG59XHJcbi5xdW90ZTpudGgtb2YtdHlwZSgzKSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxufVxyXG5cclxuLmV4dHJhX19xdW90ZSB7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGhlaWdodDogNzB2aDtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRleHQtYWxpZ246IGVuZDtcclxufVxyXG4uZXh0cmFfX3F1b3RlIGgze1xyXG4gICAgcGFkZGluZzogMCAzMHB4O1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBmb250LXNpemU6IDRyZW07XHJcbiAgICBsaW5lLWhlaWdodDogNS41cmVtO1xyXG59XHJcblxyXG4uZXh0cmFfX3Nob3d7XHJcbiAgICBoZWlnaHQ6IDA7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDFzIGxpbmVhcjtcclxufVxyXG5cclxuQGtleWZyYW1lcyBpbWcye1xyXG4gICAgMCUgICAgICB7b3BhY2l0eTogMDt9XHJcbiAgICAyMyUgICAgIHtvcGFjaXR5OiAwO31cclxuICAgIDMzJSAgICAge29wYWNpdHk6IDE7fVxyXG4gICAgOTAlICAgICB7b3BhY2l0eTogMTt9XHJcbiAgICAxMDAlICAgIHtvcGFjaXR5OiAwO31cclxufVxyXG5Aa2V5ZnJhbWVzIGltZzN7XHJcbiAgICAwJSAgICAgIHtvcGFjaXR5OiAwO31cclxuICAgIDU2JSAgICAge29wYWNpdHk6IDA7fVxyXG4gICAgNjYlICAgICAge29wYWNpdHk6IDE7fVxyXG4gICAgOTAlICAgICB7b3BhY2l0eTogMTt9XHJcbiAgICAxMDAlICAgIHtvcGFjaXR5OiAwO31cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpe1xyXG4gICAgLmJhbm5lcl9fdGV4dCBoMntcclxuICAgICAgICBmb250LXNpemU6IDIwcmVtO1xyXG4gICAgfVxyXG4gICAgLnRleHRfX21pbmkgaDJ7XHJcbiAgICAgICAgZm9udC1zaXplOiAyMHJlbTtcclxuICAgIH1cclxuICAgIC50ZXh0X19oZWFkZXIgaDN7XHJcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiA1cmVtO1xyXG4gICAgfVxyXG4gICAgLmV4dHJhX19xdW90ZSBoM3tcclxuICAgICAgICBmb250LXNpemU6IDNyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDQuNXJlbTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDEwMjRweCl7XHJcbiAgICAuYmFubmVyX190ZXh0IGgye1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTVyZW07XHJcbiAgICB9XHJcbiAgICAudGV4dF9fbWluaSBoMntcclxuICAgICAgICBmb250LXNpemU6IDE1cmVtO1xyXG4gICAgfVxyXG4gICAgLnRleHRfX2hlYWRlciBoM3tcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgdG9wOiA1MCU7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC01MCUpO1xyXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogNXJlbTtcclxuICAgIH1cclxuICAgIC5xdW90ZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICB9XHJcblxyXG4gICAgLnF1b3RlOm50aC1vZi10eXBlKDIpe1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW4tcmV2ZXJzZTtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xyXG4gICAgfVxyXG4gICAgLnF1b3RlOm50aC1vZi10eXBlKDIpIC5xdW90ZV9faW1nIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuICAgIC5xdW90ZTpudGgtb2YtdHlwZSgyKSAucXVvdGVfX3RleHQge1xyXG4gICAgICAgIHdpZHRoOiAxMDAlOyAgICAgICAgXHJcbiAgICB9XHJcbiAgICAuZXh0cmFfX3F1b3RlIHtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICB9XHJcbiAgICAuZXh0cmFfX3F1b3RlIGgze1xyXG4gICAgICAgIHBhZGRpbmc6IDEwMHB4IDA7XHJcbiAgICAgICAgd2lkdGg6IDgwJTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bztcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgLmJhbm5lcl9fdGV4dCBoMntcclxuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICAgICAgZm9udC1zaXplOiA2cmVtO1xyXG4gICAgICAgIHRvcDogMDtcclxuICAgICAgICBsZWZ0OiAwO1xyXG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICBib3JkZXItYm90dG9tOiAxcHggc29saWQgIzAwMDtcclxuICAgIH1cclxuICAgIC5iYW5uZXJfX3BpY3tcclxuICAgICAgICB3aWR0aDogODAlO1xyXG4gICAgICAgIHRyYW5zZm9ybTogbm9uZSFpbXBvcnRhbnQ7XHJcbiAgICAgICAgbWFyZ2luOiAyMHB4IGF1dG87XHJcbiAgICB9XHJcbiAgICAucGFyYWxheDAxIHtcclxuICAgICAgICB0cmFuc2Zvcm06IG5vbmUhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gICAgLnRleHRfX21pbmkgaDJ7XHJcbiAgICAgICAgZGlzcGxheTogbm9uZTtcclxuICAgIH1cclxuICAgIC50ZXh0X19oZWFkZXJ7XHJcbiAgICAgICAgaGVpZ2h0OiA0MDBweDtcclxuICAgIH1cclxuICAgIC50ZXh0X19oZWFkZXIgaDN7XHJcbiAgICAgICAgcGFkZGluZzogNTBweCAwIDA7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtO1xyXG4gICAgICAgIGxpbmUtaGVpZ2h0OiAzcmVtO1xyXG4gICAgfVxyXG5cclxuICAgIC5xdW90ZSB7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgcGFkZGluZzogMDtcclxuICAgIH1cclxuICAgIC5pbWdfX3NpemluZyBzcGFue1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgYm9yZGVyOiA0cHggc29saWQgI2ZmZjtcclxuICAgIH1cclxuICAgIC5xdW90ZV9fdGV4dCBoM3tcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAwIDE1cHg7XHJcbiAgICB9XHJcbiAgICAucXVvdGVfX3RleHQgcHtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgICAgICBsaW5lLWhlaWdodDogMnJlbTtcclxuICAgICAgICBwYWRkaW5nOiAxNXB4IDE1cHggMDtcclxuICAgIH1cclxuXHJcblxyXG4gICAgLmV4dHJhX19xdW90ZSBoM3tcclxuICAgICAgICBmb250LXNpemU6IDJyZW07XHJcbiAgICAgICAgbGluZS1oZWlnaHQ6IDMuNXJlbTtcclxuICAgICAgICBwYWRkaW5nOiAxMDBweCAwO1xyXG4gICAgICAgIHdpZHRoOiA4MCU7XHJcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XHJcbiAgICB9XHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AboutComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-about',
                templateUrl: './about.component.html',
                styleUrls: ['./about.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "AytR":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "NH0R":
/*!********************************************!*\
  !*** ./src/app/banner/banner.component.ts ***!
  \********************************************/
/*! exports provided: BannerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BannerComponent", function() { return BannerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class BannerComponent {
    constructor() { }
    ngOnInit() {
        // title paralax effect
        window.addEventListener("scroll", function () {
            let title = document.querySelector('h1');
            title.style.transform = `translateY(${window.scrollY / 2}px)`;
            let video = document.querySelector('video');
            video.style.transform = `translateY(${window.scrollY}px)`;
        });
    }
}
BannerComponent.ɵfac = function BannerComponent_Factory(t) { return new (t || BannerComponent)(); };
BannerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BannerComponent, selectors: [["app-banner"]], decls: 7, vars: 0, consts: [["id", "home", 1, "hero"], [1, "cotainer"], [1, "video"], ["src", "../../assets/audio/banner.webm", "autoplay", "", "loop", ""], [1, "title"]], template: function BannerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "video", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "XDYY");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".hero[_ngcontent-%COMP%]{\r\n    transition: 0.5s ease-in;\r\n    background: #121212;\r\n    background-size: cover;\r\n    width: 100%;\r\n    height: 100vh;\r\n}\r\n.cotainer[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n    height: 100%;\r\n    position: relative;\r\n    overflow: hidden;\r\n}\r\n.video[_ngcontent-%COMP%]{\r\n    display: block;\r\n    width: 100%;\r\n    height: 100vh;\r\n    overflow: hidden;\r\n    z-index: 0;\r\n}\r\n.video[_ngcontent-%COMP%]   video[_ngcontent-%COMP%]{\r\n    width: 100%;\r\n    height: 100%;\r\n    object-fit: cover;\r\n}\r\n.title[_ngcontent-%COMP%] {\r\n    display: block;\r\n    width: -webkit-max-content;\r\n    width: max-content;\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-50%,-50%);\r\n}\r\n.title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n    display: block;\r\n    position: relative;\r\n    color: #fff;\r\n    width: 100%;\r\n    font-size: 12rem;\r\n    font-weight: 600;\r\n    letter-spacing: 2.5rem;\r\n}\r\n@media only screen and (max-width: 1023px){\r\n    .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n        font-size: 10rem;\r\n        letter-spacing: 1.5rem;\r\n    }\r\n}\r\n@media only screen and (max-width: 650px){\r\n    .title[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%]{\r\n        font-size: 8rem;\r\n        letter-spacing: 0.5rem;\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmFubmVyL2Jhbm5lci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksd0JBQXdCO0lBQ3hCLG1CQUFtQjtJQUNuQixzQkFBc0I7SUFDdEIsV0FBVztJQUNYLGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGdCQUFnQjtBQUNwQjtBQUNBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLFVBQVU7QUFDZDtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixpQkFBaUI7QUFDckI7QUFHQTtJQUNJLGNBQWM7SUFDZCwwQkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixRQUFRO0lBQ1IsU0FBUztJQUNULCtCQUErQjtBQUNuQztBQUNBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0FBQzFCO0FBR0E7SUFDSTtRQUNJLGdCQUFnQjtRQUNoQixzQkFBc0I7SUFDMUI7QUFDSjtBQUVBO0lBQ0k7UUFDSSxlQUFlO1FBQ2Ysc0JBQXNCO0lBQzFCO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9iYW5uZXIvYmFubmVyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuaGVyb3tcclxuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbjtcclxuICAgIGJhY2tncm91bmQ6ICMxMjEyMTI7XHJcbiAgICBiYWNrZ3JvdW5kLXNpemU6IGNvdmVyO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMHZoO1xyXG59XHJcbi5jb3RhaW5lciB7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbn1cclxuLnZpZGVve1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwdmg7XHJcbiAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgei1pbmRleDogMDtcclxufVxyXG4udmlkZW8gdmlkZW97XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGhlaWdodDogMTAwJTtcclxuICAgIG9iamVjdC1maXQ6IGNvdmVyO1xyXG59XHJcblxyXG5cclxuLnRpdGxlIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IG1heC1jb250ZW50O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MCU7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZSgtNTAlLC01MCUpO1xyXG59XHJcbi50aXRsZSBoMXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgIGZvbnQtc2l6ZTogMTJyZW07XHJcbiAgICBmb250LXdlaWdodDogNjAwO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDIuNXJlbTtcclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyM3B4KXtcclxuICAgIC50aXRsZSBoMXtcclxuICAgICAgICBmb250LXNpemU6IDEwcmVtO1xyXG4gICAgICAgIGxldHRlci1zcGFjaW5nOiAxLjVyZW07XHJcbiAgICB9XHJcbn1cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNjUwcHgpe1xyXG4gICAgLnRpdGxlIGgxe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogOHJlbTtcclxuICAgICAgICBsZXR0ZXItc3BhY2luZzogMC41cmVtO1xyXG4gICAgfVxyXG59XHJcblxyXG4iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BannerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-banner',
                templateUrl: './banner.component.html',
                styleUrls: ['./banner.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "Sy1n":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./nav/nav.component */ "izVM");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./banner/banner.component */ "NH0R");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./project/project.component */ "6AOp");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");







class AppComponent {
    constructor() {
        this.title = 'xDyy';
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 0, template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](0, "app-nav");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-banner");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "app-about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "app-project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "app-contact");
    } }, directives: [_nav_nav_component__WEBPACK_IMPORTED_MODULE_1__["NavComponent"], _banner_banner_component__WEBPACK_IMPORTED_MODULE_2__["BannerComponent"], _about_about_component__WEBPACK_IMPORTED_MODULE_3__["AboutComponent"], _project_project_component__WEBPACK_IMPORTED_MODULE_4__["ProjectComponent"], _contact_contact_component__WEBPACK_IMPORTED_MODULE_5__["ContactComponent"]], styles: ["[_nghost-%COMP%] {\r\n    font-family: 'Spartan', sans-serif;\r\n    box-sizing: border-box;\r\n    -webkit-font-smoothing: antialiased;\r\n    -moz-osx-font-smoothing: grayscale;\r\n    margin: 0;\r\n    padding: 0;\r\n}\r\n\r\n.hero[_ngcontent-%COMP%]{\r\n    width: 192rem;\r\n    min-height: 100vh;\r\n    display: block;\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUNBO0lBQ0ksa0NBQWtDO0lBQ2xDLHNCQUFzQjtJQUN0QixtQ0FBbUM7SUFDbkMsa0NBQWtDO0lBQ2xDLFNBQVM7SUFDVCxVQUFVO0FBQ2Q7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsaUJBQWlCO0lBQ2pCLGNBQWM7QUFDbEIiLCJmaWxlIjoic3JjL2FwcC9hcHAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG46aG9zdCB7XHJcbiAgICBmb250LWZhbWlseTogJ1NwYXJ0YW4nLCBzYW5zLXNlcmlmO1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIC13ZWJraXQtZm9udC1zbW9vdGhpbmc6IGFudGlhbGlhc2VkO1xyXG4gICAgLW1vei1vc3gtZm9udC1zbW9vdGhpbmc6IGdyYXlzY2FsZTtcclxuICAgIG1hcmdpbjogMDtcclxuICAgIHBhZGRpbmc6IDA7XHJcbn1cclxuXHJcbi5oZXJve1xyXG4gICAgd2lkdGg6IDE5MnJlbTtcclxuICAgIG1pbi1oZWlnaHQ6IDEwMHZoO1xyXG4gICAgZGlzcGxheTogYmxvY2s7XHJcbn1cclxuXHJcbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "ZAI4":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app-routing.module */ "vY5A");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "Sy1n");
/* harmony import */ var _banner_banner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./banner/banner.component */ "NH0R");
/* harmony import */ var _about_about_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./about/about.component */ "84zG");
/* harmony import */ var _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./nav/nav.component */ "izVM");
/* harmony import */ var _project_project_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./project/project.component */ "6AOp");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./contact/contact.component */ "bzTf");










class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
        _banner_banner_component__WEBPACK_IMPORTED_MODULE_4__["BannerComponent"],
        _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
        _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"],
        _project_project_component__WEBPACK_IMPORTED_MODULE_7__["ProjectComponent"],
        _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
        _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"],
        args: [{
                declarations: [
                    _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                    _banner_banner_component__WEBPACK_IMPORTED_MODULE_4__["BannerComponent"],
                    _about_about_component__WEBPACK_IMPORTED_MODULE_5__["AboutComponent"],
                    _nav_nav_component__WEBPACK_IMPORTED_MODULE_6__["NavComponent"],
                    _project_project_component__WEBPACK_IMPORTED_MODULE_7__["ProjectComponent"],
                    _contact_contact_component__WEBPACK_IMPORTED_MODULE_8__["ContactComponent"],
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                    _app_routing_module__WEBPACK_IMPORTED_MODULE_2__["AppRoutingModule"],
                ],
                providers: [],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "bzTf":
/*!**********************************************!*\
  !*** ./src/app/contact/contact.component.ts ***!
  \**********************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class ContactComponent {
    constructor() { }
    ngOnInit() {
        document.addEventListener("scroll", function () {
            let txt = document.querySelector(".text");
            let contact = document.querySelector(".contact__container");
            if (window.scrollY > contact.offsetTop - 200)
                txt.style.opacity = "1";
        });
    }
}
ContactComponent.ɵfac = function ContactComponent_Factory(t) { return new (t || ContactComponent)(); };
ContactComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: ContactComponent, selectors: [["app-contact"]], decls: 23, vars: 0, consts: [["id", "contact", 1, "hero"], [1, "contact__container"], [1, "text"], [1, "contact__info"], [1, "contact__link"], ["href", "https://www.facebook.com/xDyy.66/", "target", "blank"], [1, "fab", "fa-facebook-f"], [1, "fab", "fa-instagram"], [1, "fab", "fa-linkedin-in"], [1, "fab", "fa-twitter"]], template: function ContactComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "CONTACT ME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "HIRE ME");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "iduy281999@gmail.com");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "h4");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "+84 919786868");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "ul");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "i", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](18, "i", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "i", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".contact__container[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: space-between;\r\n    align-items: center;\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100vh;\r\n    color: #fff;\r\n    padding: 100px 0px 50px;\r\n    text-align: center;\r\n}\r\n.text[_ngcontent-%COMP%]{\r\n    display: block;\r\n    width: 55%;\r\n    position: relative;\r\n    padding: 20px;\r\n    font-size: 9rem;\r\n    border: 5px solid #fff;\r\n    overflow: hidden;\r\n    font-weight: 700;\r\n    opacity: 0;\r\n\r\n}\r\n.text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:nth-of-type(1){\r\n    display: block;\r\n    position: relative;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 20px;\r\n    animation-name: contact1;\r\n    animation-duration: 4s;\r\n    animation-iteration-count: infinite;\r\n}\r\n.text[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]:nth-of-type(2){\r\n    display: block;\r\n    width: 100%;\r\n    height: 100%;\r\n    padding: 40px;\r\n    position: absolute;\r\n    top: 100%;\r\n    left: 0;\r\n    color: #000;\r\n    background-color: #fff;\r\n    animation-name: contact2;\r\n    animation-duration: 4s;\r\n    animation-delay: 2s;\r\n    animation-iteration-count: infinite;\r\n}\r\n.contact__info[_ngcontent-%COMP%]{\r\n    width: -webkit-max-content;\r\n    width: max-content;\r\n    display: block;\r\n}\r\n.contact__info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n    font-size: 10rem;\r\n    font-weight: 700;\r\n    padding: 50px;\r\n}\r\n.contact__info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n    font-size: 7rem;\r\n}\r\n.contact__link[_ngcontent-%COMP%] {\r\n    width: 100%;\r\n}\r\n.contact__link[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    justify-content: space-around;\r\n    width: 100%;  \r\n}\r\n.contact__link[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    display: block;\r\n    padding: 0 50px;\r\n}\r\n.contact__link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color: #fff;\r\n}\r\n.contact__link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    font-size: 8rem; \r\n}\r\n@keyframes contact1{\r\n    0%{ transform: translateY(100%);}\r\n    50%{ transform: translateY(0);}\r\n    100%{ transform: translateY(-100%);}\r\n}\r\n@keyframes contact2{\r\n    0%{ transform: translateY(0);}\r\n    50%{ transform: translateY(-100%);}\r\n    100%{ transform: translateY(-200%);}\r\n}\r\n@media only screen and (max-width: 1440px){\r\n    .text[_ngcontent-%COMP%]{\r\n        font-size: 7rem;\r\n    }\r\n    .contact__info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n        font-size: 8.5rem;\r\n    }\r\n    .contact__info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n        font-size: 5rem;\r\n    }\r\n    .contact__link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n        font-size: 6rem; \r\n    }\r\n}\r\n@media only screen and (max-width: 1280px){\r\n    .text[_ngcontent-%COMP%]{\r\n        font-size: 6rem;\r\n    }\r\n    .contact__info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n        font-size: 7rem;\r\n    }\r\n    .contact__info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n        font-size: 4rem;\r\n    }\r\n    .contact__link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n        font-size: 5rem; \r\n    }\r\n\r\n}\r\n@media only screen and (max-width: 1024px){\r\n    .text[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        border: none;\r\n    }\r\n    .contact__info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n        font-size: 5rem;\r\n    }\r\n    .contact__info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n        font-size: 3rem;\r\n    }\r\n    .contact__link[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n        width: 60%;\r\n        margin: 0 auto;  \r\n    }\r\n    .contact__link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n        font-size: 3rem; \r\n    }\r\n}\r\n@media only screen and (max-width: 768px){\r\n    .text[_ngcontent-%COMP%]{\r\n        font-size: 3rem;\r\n    }\r\n    .contact__info[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{\r\n        font-size: 2rem;\r\n        padding: 30px 0;\r\n    }\r\n    .contact__info[_ngcontent-%COMP%]   h4[_ngcontent-%COMP%]{\r\n        font-size: 1.5rem;\r\n    }\r\n    .contact__link[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n        padding: 0 10px;\r\n    }\r\n    .contact__link[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n        font-size: 2rem; \r\n    }\r\n\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdC9jb250YWN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0lBQ2Isc0JBQXNCO0lBQ3RCLDhCQUE4QjtJQUM5QixtQkFBbUI7SUFDbkIsa0JBQWtCO0lBQ2xCLFdBQVc7SUFDWCxhQUFhO0lBQ2IsV0FBVztJQUNYLHVCQUF1QjtJQUN2QixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGNBQWM7SUFDZCxVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLGFBQWE7SUFDYixlQUFlO0lBQ2Ysc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsVUFBVTs7QUFFZDtBQUNBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtJQUNsQixXQUFXO0lBQ1gsWUFBWTtJQUNaLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsc0JBQXNCO0lBQ3RCLG1DQUFtQztBQUN2QztBQUNBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxZQUFZO0lBQ1osYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QsT0FBTztJQUNQLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsd0JBQXdCO0lBQ3hCLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsbUNBQW1DO0FBQ3ZDO0FBR0E7SUFDSSwwQkFBa0I7SUFBbEIsa0JBQWtCO0lBQ2xCLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQixnQkFBZ0I7SUFDaEIsYUFBYTtBQUNqQjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBQ0E7SUFDSSxhQUFhO0lBQ2IsNkJBQTZCO0lBQzdCLFdBQVc7QUFDZjtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksZUFBZTtBQUNuQjtBQUVBO0lBQ0ksSUFBSSwyQkFBMkIsQ0FBQztJQUNoQyxLQUFLLHdCQUF3QixDQUFDO0lBQzlCLE1BQU0sNEJBQTRCLENBQUM7QUFDdkM7QUFDQTtJQUNJLElBQUksd0JBQXdCLENBQUM7SUFDN0IsS0FBSyw0QkFBNEIsQ0FBQztJQUNsQyxNQUFNLDRCQUE0QixDQUFDO0FBQ3ZDO0FBR0E7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtBQUNKO0FBQ0E7SUFDSTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7O0FBRUo7QUFFQTtJQUNJO1FBQ0ksV0FBVztRQUNYLFlBQVk7SUFDaEI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGVBQWU7SUFDbkI7SUFDQTtRQUNJLFVBQVU7UUFDVixjQUFjO0lBQ2xCO0lBQ0E7UUFDSSxlQUFlO0lBQ25CO0FBQ0o7QUFFQTtJQUNJO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtRQUNmLGVBQWU7SUFDbkI7SUFDQTtRQUNJLGlCQUFpQjtJQUNyQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjs7QUFFSiIsImZpbGUiOiJzcmMvYXBwL2NvbnRhY3QvY29udGFjdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmNvbnRhY3RfX2NvbnRhaW5lcntcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDB2aDtcclxuICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgcGFkZGluZzogMTAwcHggMHB4IDUwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuLnRleHR7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiA1NSU7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgZm9udC1zaXplOiA5cmVtO1xyXG4gICAgYm9yZGVyOiA1cHggc29saWQgI2ZmZjtcclxuICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICBmb250LXdlaWdodDogNzAwO1xyXG4gICAgb3BhY2l0eTogMDtcclxuXHJcbn1cclxuLnRleHQgaDM6bnRoLW9mLXR5cGUoMSl7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgcGFkZGluZzogMjBweDtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBjb250YWN0MTtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNHM7XHJcbiAgICBhbmltYXRpb24taXRlcmF0aW9uLWNvdW50OiBpbmZpbml0ZTtcclxufVxyXG4udGV4dCBoMzpudGgtb2YtdHlwZSgyKXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBwYWRkaW5nOiA0MHB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiAxMDAlO1xyXG4gICAgbGVmdDogMDtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIGFuaW1hdGlvbi1uYW1lOiBjb250YWN0MjtcclxuICAgIGFuaW1hdGlvbi1kdXJhdGlvbjogNHM7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6IDJzO1xyXG4gICAgYW5pbWF0aW9uLWl0ZXJhdGlvbi1jb3VudDogaW5maW5pdGU7XHJcbn1cclxuXHJcblxyXG4uY29udGFjdF9faW5mb3tcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG59XHJcbi5jb250YWN0X19pbmZvIGgze1xyXG4gICAgZm9udC1zaXplOiAxMHJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA3MDA7XHJcbiAgICBwYWRkaW5nOiA1MHB4O1xyXG59XHJcbi5jb250YWN0X19pbmZvIGg0e1xyXG4gICAgZm9udC1zaXplOiA3cmVtO1xyXG59XHJcbi5jb250YWN0X19saW5rIHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG59XHJcbi5jb250YWN0X19saW5rIHVse1xyXG4gICAgZGlzcGxheTogZmxleDtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYXJvdW5kO1xyXG4gICAgd2lkdGg6IDEwMCU7ICBcclxufVxyXG4uY29udGFjdF9fbGluayB1bCBsaXtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcGFkZGluZzogMCA1MHB4O1xyXG59XHJcbi5jb250YWN0X19saW5rIGF7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxufVxyXG4uY29udGFjdF9fbGluayBpe1xyXG4gICAgZm9udC1zaXplOiA4cmVtOyBcclxufVxyXG5cclxuQGtleWZyYW1lcyBjb250YWN0MXtcclxuICAgIDAleyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMTAwJSk7fVxyXG4gICAgNTAleyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7fVxyXG4gICAgMTAwJXsgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xMDAlKTt9XHJcbn1cclxuQGtleWZyYW1lcyBjb250YWN0MntcclxuICAgIDAleyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoMCk7fVxyXG4gICAgNTAleyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTEwMCUpO31cclxuICAgIDEwMCV7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgtMjAwJSk7fVxyXG59XHJcblxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxNDQwcHgpe1xyXG4gICAgLnRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiA3cmVtO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3RfX2luZm8gaDN7XHJcbiAgICAgICAgZm9udC1zaXplOiA4LjVyZW07XHJcbiAgICB9XHJcbiAgICAuY29udGFjdF9faW5mbyBoNHtcclxuICAgICAgICBmb250LXNpemU6IDVyZW07XHJcbiAgICB9XHJcbiAgICAuY29udGFjdF9fbGluayBpe1xyXG4gICAgICAgIGZvbnQtc2l6ZTogNnJlbTsgXHJcbiAgICB9XHJcbn1cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMjgwcHgpe1xyXG4gICAgLnRleHR7XHJcbiAgICAgICAgZm9udC1zaXplOiA2cmVtO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3RfX2luZm8gaDN7XHJcbiAgICAgICAgZm9udC1zaXplOiA3cmVtO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3RfX2luZm8gaDR7XHJcbiAgICAgICAgZm9udC1zaXplOiA0cmVtO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3RfX2xpbmsgaXtcclxuICAgICAgICBmb250LXNpemU6IDVyZW07IFxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMDI0cHgpe1xyXG4gICAgLnRleHR7XHJcbiAgICAgICAgd2lkdGg6IDEwMCU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3RfX2luZm8gaDN7XHJcbiAgICAgICAgZm9udC1zaXplOiA1cmVtO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3RfX2luZm8gaDR7XHJcbiAgICAgICAgZm9udC1zaXplOiAzcmVtO1xyXG4gICAgfVxyXG4gICAgLmNvbnRhY3RfX2xpbmsgdWx7XHJcbiAgICAgICAgd2lkdGg6IDYwJTtcclxuICAgICAgICBtYXJnaW46IDAgYXV0bzsgIFxyXG4gICAgfVxyXG4gICAgLmNvbnRhY3RfX2xpbmsgaXtcclxuICAgICAgICBmb250LXNpemU6IDNyZW07IFxyXG4gICAgfVxyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KXtcclxuICAgIC50ZXh0e1xyXG4gICAgICAgIGZvbnQtc2l6ZTogM3JlbTtcclxuICAgIH1cclxuICAgIC5jb250YWN0X19pbmZvIGgze1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMnJlbTtcclxuICAgICAgICBwYWRkaW5nOiAzMHB4IDA7XHJcbiAgICB9XHJcbiAgICAuY29udGFjdF9faW5mbyBoNHtcclxuICAgICAgICBmb250LXNpemU6IDEuNXJlbTtcclxuICAgIH1cclxuICAgIC5jb250YWN0X19saW5rIHVsIGxpe1xyXG4gICAgICAgIHBhZGRpbmc6IDAgMTBweDtcclxuICAgIH1cclxuICAgIC5jb250YWN0X19saW5rIGl7XHJcbiAgICAgICAgZm9udC1zaXplOiAycmVtOyBcclxuICAgIH1cclxuXHJcbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](ContactComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-contact',
                templateUrl: './contact.component.html',
                styleUrls: ['./contact.component.css']
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "izVM":
/*!**************************************!*\
  !*** ./src/app/nav/nav.component.ts ***!
  \**************************************/
/*! exports provided: NavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavComponent", function() { return NavComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");


class NavComponent {
    constructor() {
        // Lower volume and turn on/off
        this.vol = 0.2;
        this.music = true;
        // Show menu
        this.menu = false;
    }
    turnMusic() {
        this.music = !this.music;
        if (this.music)
            this.vol = 0.2;
        else
            this.vol = 0;
    }
    // Back to top
    backToTop() {
        window.scrollTo({
            top: 0,
        });
    }
    showMenu() {
        this.menu = !this.menu;
    }
    ngOnInit() {
        // Back to top hide/show and change nav color
        window.addEventListener("scroll", function () {
            //active link
            let act = document.querySelectorAll('li');
            let bodyBg = document.querySelector("body");
            let about = document.querySelector("app-about").offsetTop;
            let project = document.querySelector("app-project").offsetTop;
            let contact = document.querySelector("app-contact").offsetTop;
            if (window.scrollY < screen.height - 200)
                act[0].classList.add("active__link");
            else
                act[0].classList.remove("active__link");
            if (window.scrollY > about + 200 && window.scrollY < project - 200)
                act[1].classList.add("active__link");
            else
                act[1].classList.remove("active__link");
            if (window.scrollY > project + 200 && window.scrollY < contact - 200)
                act[2].classList.add("active__link");
            else
                act[2].classList.remove("active__link");
            if (window.scrollY > contact - 200)
                act[3].classList.add("active__link");
            else
                act[3].classList.remove("active__link");
            let btn = document.querySelector('.scrollTop');
            let nav1 = document.querySelector('.nav__link');
            let nav2 = document.querySelector('.nav__menu');
            let nav3 = document.querySelector('.nav__music');
            //show to Top
            if (window.scrollY > 400)
                btn.classList.add("toTop");
            else
                btn.classList.remove("toTop");
            // Change page background
            if (window.scrollY < 600)
                bodyBg.classList.add("black");
            else if (window.scrollY > (bodyBg.offsetHeight - screen.height))
                bodyBg.classList.add("black");
            else
                bodyBg.classList.remove("black");
            // change nav color
            if (window.scrollY > 600 && window.scrollY < (bodyBg.offsetHeight - screen.height)) {
                nav1.classList.add("black");
                nav2.classList.add("black");
                nav3.classList.add("black");
                btn.classList.add("black");
            }
            else {
                nav1.classList.remove("black");
                nav2.classList.remove("black");
                nav3.classList.remove("black");
                btn.classList.remove("black");
            }
        });
    }
}
NavComponent.ɵfac = function NavComponent_Factory(t) { return new (t || NavComponent)(); };
NavComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavComponent, selectors: [["app-nav"]], decls: 24, vars: 8, consts: [[1, "nav__link"], [3, "click"], ["href", "#home"], ["href", "#about"], ["href", "#project"], ["href", "#contact"], [1, "nav__menu", 3, "click"], [1, "nav__music"], [1, "fas", "fa-volume-up", 3, "click"], ["src", "../../assets/audio/beat.mp3", "loop", "", 3, "autoplay", "volume"], [1, "nav__top"], [1, "scrollTop", 3, "click"]], template: function NavComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "ul", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_ul_click_1_listener() { return ctx.showMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "a", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "xdyy");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "a", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "about");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "a", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "project");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "li");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "a", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, "contact");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_div_click_14_listener() { return ctx.showMenu(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](17, "span");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "i", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_i_click_19_listener() { return ctx.turnMusic(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "audio", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](22, "span", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavComponent_Template_span_click_22_listener() { return ctx.backToTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, "scroll to top");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.menu ? "active" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.menu ? "active" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵclassMap"](ctx.music ? "active" : "none");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("autoplay", ctx.music)("volume", ctx.vol);
    } }, styles: [".nav__link[_ngcontent-%COMP%] {\r\n    display: block;\r\n    position: fixed;\r\n    top: 50%;\r\n    left: 50px;\r\n    transform: translateX(-50%);\r\n    z-index: 10;\r\n}\r\n.nav__link[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{\r\n    display: flex;\r\n    width: 500px;\r\n    justify-content: space-between;\r\n    transform: rotate(90deg);\r\n}\r\n.nav__link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n    display: block;\r\n    width: -webkit-max-content;\r\n    width: max-content;\r\n    padding: 0.5rem 2rem;\r\n    overflow-x: hidden;\r\n    transform: rotate(180deg);\r\n}\r\n.nav__link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\r\n    display: block;\r\n    color: #fff;\r\n    font-size: 1.6rem;\r\n    font-weight: 500;\r\n    letter-spacing: 0.25rem;\r\n    cursor: pointer;\r\n    position: relative;\r\n    transition: 0.3s linear;\r\n}\r\n.nav__link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before{\r\n    content: \"\";\r\n    position: absolute;\r\n    top: 50%;\r\n    left: 50%;\r\n    transform: translate(-100px,-50%);\r\n    width: 0px;\r\n    height: 1px;\r\n    background-color: #fff;\r\n    transition: 0.3s linear;\r\n}\r\n.nav__link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::after{\r\n    content: \"\";\r\n    position: absolute;\r\n    bottom: -1px;\r\n    left: 50%;\r\n    transform: translateX(-50%);\r\n    width: 0;\r\n    height: 1px;\r\n    background-color: #fff;\r\n    transition: 0.3s linear;\r\n}\r\nli.active__link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::after{\r\n    width: 100%;\r\n}\r\n.nav__link[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]::before{\r\n    width: 200px;\r\n}\r\n.nav__link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]::before{\r\n    width: 0!important;\r\n}\r\n.nav__link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{\r\n    font-weight: bold;\r\n}\r\n.nav__menu[_ngcontent-%COMP%]{\r\n    display: none;\r\n    flex-direction: column;\r\n    width: 30px;\r\n    height: 30px;\r\n    position: fixed;\r\n    z-index: 12;\r\n    bottom: 30px;\r\n    left: 35px;\r\n}\r\n.nav__menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    display: block;\r\n    width: 30px;\r\n    height: 2px;\r\n    background-color: #fff;\r\n    margin: 3px 0;\r\n    transition: 0.5s ease-in-out;\r\n}\r\n.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(1){\r\n    transform: rotate(405deg) translate(6px,6px);\r\n    background-color: #fff;\r\n}\r\n.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(2){\r\n    opacity: 0;\r\n}\r\n.active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(3){\r\n    transform: rotate(-45deg) translate(5px,-6px);\r\n    background-color: #fff;\r\n}\r\n.nav__music[_ngcontent-%COMP%]{\r\n    display: block;\r\n    position: fixed;\r\n    bottom: 30px;\r\n    right: 35px;\r\n    z-index: 9;\r\n    width: 30px;\r\n    height: 30px;\r\n    text-align: center;\r\n}\r\n.nav__music[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n    text-align: center;\r\n    font-size: 2.5rem;\r\n    color: #fff;\r\n    cursor: pointer;\r\n    transition: all 0.5s linear;\r\n}\r\n.nav__music[_ngcontent-%COMP%]   .none[_ngcontent-%COMP%]{\r\n    color: #808080;\r\n}\r\n.nav__music[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{\r\n    transition: 0.3s linear;\r\n    font-weight: bold;\r\n}\r\n.nav__top[_ngcontent-%COMP%]{\r\n    display: block;\r\n    position: fixed;\r\n    top: 50%;\r\n    right: 50px;\r\n    transform: translateX(50%) rotate(-90deg);\r\n    z-index: 9;\r\n}\r\n.nav__top[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    display: block;\r\n    font-size: 1.6rem;\r\n}\r\n.scrollTop[_ngcontent-%COMP%]{\r\n    transition: 0.3s ease-in;\r\n    transform: translateX(-40px);\r\n    visibility: hidden;\r\n    opacity: 0; \r\n    color: #fff;\r\n}\r\n.toTop[_ngcontent-%COMP%] {\r\n    visibility: visible;\r\n    opacity: 1;\r\n    transform: translateX(0px); \r\n}\r\n.nav__top[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:hover{\r\n    transition: 0.3s linear;\r\n    font-weight: bold;\r\n}\r\nspan.black[_ngcontent-%COMP%]{\r\n    color: #000;\r\n}\r\n.black[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n    color: #000;\r\n}\r\n.black[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{\r\n    color: #121212;\r\n}\r\n.black[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n    color: #000;\r\n    background-color: #000;\r\n}\r\n.black[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::before{\r\n    background-color: #000;\r\n}\r\n.black[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]::after{\r\n    background-color: #000;\r\n}\r\n@media only screen and (max-width: 1024px){\r\n\r\n    .nav__link[_ngcontent-%COMP%]{\r\n        width: 100%;\r\n        height: 100%;\r\n        transform: none;\r\n        left: 0;\r\n        top: 0;\r\n        pointer-events: none;\r\n    }\r\n    .nav__link[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{ \r\n        position: absolute;\r\n        top: 0;\r\n        left: 0;\r\n        height: 100%;\r\n        width: 100%;\r\n        display: flex;\r\n        flex-direction: column;\r\n        align-items: center;\r\n        justify-content: center;\r\n        background-color: #000;\r\n        transform: none;\r\n        transition: all 0.3s ease-in;\r\n        z-index: 11;\r\n        pointer-events: auto;\r\n    }\r\n    .nav__link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{\r\n        transform: none;\r\n        padding: 2rem;\r\n    }\r\n    .nav__link[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{\r\n        color: #fff;\r\n    }\r\n    .nav__link[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]:hover   a[_ngcontent-%COMP%]{\r\n        color: #fff;\r\n    }\r\n\r\n    .nav__link[_ngcontent-%COMP%]   ul.none[_ngcontent-%COMP%] {\r\n        width: 0!important;\r\n        overflow: hidden;\r\n        transition: all 0.3s ease-in;\r\n    }\r\n\r\n    .nav__menu[_ngcontent-%COMP%] {\r\n        display: flex;\r\n    }\r\n    .nav__top[_ngcontent-%COMP%]{\r\n        right: 20px;\r\n    }\r\n    .nav__top[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n        font-size: 1rem;\r\n    }\r\n\r\n}\r\n@media only screen and (max-width: 768px){\r\n    .nav__music[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\r\n        font-size: 1rem;\r\n    }\r\n    .nav__menu[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{\r\n        width: 17px;\r\n        height: 1px;\r\n        margin: 2px 0;\r\n    }\r\n    .active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(1){\r\n        transform: rotate(405deg) translate(6px,6px);\r\n    }\r\n    .active[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]:nth-of-type(3){\r\n        transform: rotate(-45deg) translate(1px,-1px);\r\n    }\r\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2L25hdi5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixRQUFRO0lBQ1IsVUFBVTtJQUNWLDJCQUEyQjtJQUMzQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLGFBQWE7SUFDYixZQUFZO0lBQ1osOEJBQThCO0lBQzlCLHdCQUF3QjtBQUM1QjtBQUVBO0lBQ0ksY0FBYztJQUNkLDBCQUFrQjtJQUFsQixrQkFBa0I7SUFDbEIsb0JBQW9CO0lBQ3BCLGtCQUFrQjtJQUNsQix5QkFBeUI7QUFDN0I7QUFFQTtJQUNJLGNBQWM7SUFDZCxXQUFXO0lBQ1gsaUJBQWlCO0lBQ2pCLGdCQUFnQjtJQUNoQix1QkFBdUI7SUFDdkIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLFdBQVc7SUFDWCxrQkFBa0I7SUFDbEIsUUFBUTtJQUNSLFNBQVM7SUFDVCxpQ0FBaUM7SUFDakMsVUFBVTtJQUNWLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsdUJBQXVCO0FBQzNCO0FBRUE7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLFlBQVk7SUFDWixTQUFTO0lBQ1QsMkJBQTJCO0lBQzNCLFFBQVE7SUFDUixXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLHVCQUF1QjtBQUMzQjtBQUNBO0lBQ0ksV0FBVztBQUNmO0FBRUE7SUFDSSxZQUFZO0FBQ2hCO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFFQTtJQUNJLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksYUFBYTtJQUNiLHNCQUFzQjtJQUN0QixXQUFXO0lBQ1gsWUFBWTtJQUNaLGVBQWU7SUFDZixXQUFXO0lBQ1gsWUFBWTtJQUNaLFVBQVU7QUFDZDtBQUNBO0lBQ0ksY0FBYztJQUNkLFdBQVc7SUFDWCxXQUFXO0lBQ1gsc0JBQXNCO0lBQ3RCLGFBQWE7SUFDYiw0QkFBNEI7QUFDaEM7QUFDQTtJQUNJLDRDQUE0QztJQUM1QyxzQkFBc0I7QUFDMUI7QUFDQTtJQUNJLFVBQVU7QUFDZDtBQUNBO0lBQ0ksNkNBQTZDO0lBQzdDLHNCQUFzQjtBQUMxQjtBQUlBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixZQUFZO0lBQ1osV0FBVztJQUNYLFVBQVU7SUFDVixXQUFXO0lBQ1gsWUFBWTtJQUNaLGtCQUFrQjtBQUN0QjtBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtJQUNqQixXQUFXO0lBQ1gsZUFBZTtJQUNmLDJCQUEyQjtBQUMvQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGVBQWU7SUFDZixRQUFRO0lBQ1IsV0FBVztJQUNYLHlDQUF5QztJQUN6QyxVQUFVO0FBQ2Q7QUFDQTtJQUNJLGNBQWM7SUFDZCxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLHdCQUF3QjtJQUN4Qiw0QkFBNEI7SUFDNUIsa0JBQWtCO0lBQ2xCLFVBQVU7SUFDVixXQUFXO0FBQ2Y7QUFDQTtJQUNJLG1CQUFtQjtJQUNuQixVQUFVO0lBQ1YsMEJBQTBCO0FBQzlCO0FBQ0E7SUFDSSx1QkFBdUI7SUFDdkIsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxXQUFXO0FBQ2Y7QUFDQTtJQUNJLFdBQVc7QUFDZjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksV0FBVztJQUNYLHNCQUFzQjtBQUMxQjtBQUVBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxzQkFBc0I7QUFDMUI7QUFLQTs7SUFFSTtRQUNJLFdBQVc7UUFDWCxZQUFZO1FBQ1osZUFBZTtRQUNmLE9BQU87UUFDUCxNQUFNO1FBQ04sb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxrQkFBa0I7UUFDbEIsTUFBTTtRQUNOLE9BQU87UUFDUCxZQUFZO1FBQ1osV0FBVztRQUNYLGFBQWE7UUFDYixzQkFBc0I7UUFDdEIsbUJBQW1CO1FBQ25CLHVCQUF1QjtRQUN2QixzQkFBc0I7UUFDdEIsZUFBZTtRQUNmLDRCQUE0QjtRQUM1QixXQUFXO1FBQ1gsb0JBQW9CO0lBQ3hCO0lBQ0E7UUFDSSxlQUFlO1FBQ2YsYUFBYTtJQUNqQjtJQUNBO1FBQ0ksV0FBVztJQUNmO0lBQ0E7UUFDSSxXQUFXO0lBQ2Y7O0lBRUE7UUFDSSxrQkFBa0I7UUFDbEIsZ0JBQWdCO1FBQ2hCLDRCQUE0QjtJQUNoQzs7SUFFQTtRQUNJLGFBQWE7SUFDakI7SUFDQTtRQUNJLFdBQVc7SUFDZjtJQUNBO1FBQ0ksZUFBZTtJQUNuQjs7QUFFSjtBQUdBO0lBQ0k7UUFDSSxlQUFlO0lBQ25CO0lBQ0E7UUFDSSxXQUFXO1FBQ1gsV0FBVztRQUNYLGFBQWE7SUFDakI7SUFDQTtRQUNJLDRDQUE0QztJQUNoRDtJQUNBO1FBQ0ksNkNBQTZDO0lBQ2pEO0FBQ0oiLCJmaWxlIjoic3JjL2FwcC9uYXYvbmF2LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2X19saW5rIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICBsZWZ0OiA1MHB4O1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKC01MCUpO1xyXG4gICAgei1pbmRleDogMTA7XHJcbn1cclxuLm5hdl9fbGluayB1bHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICB3aWR0aDogNTAwcHg7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbn1cclxuXHJcbi5uYXZfX2xpbmsgbGl7XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiBtYXgtY29udGVudDtcclxuICAgIHBhZGRpbmc6IDAuNXJlbSAycmVtO1xyXG4gICAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoMTgwZGVnKTtcclxufVxyXG5cclxuLm5hdl9fbGluayBhIHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgY29sb3I6ICNmZmY7XHJcbiAgICBmb250LXNpemU6IDEuNnJlbTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICBsZXR0ZXItc3BhY2luZzogMC4yNXJlbTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgbGluZWFyO1xyXG59XHJcbi5uYXZfX2xpbmsgYTo6YmVmb3Jle1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNTAlO1xyXG4gICAgbGVmdDogNTAlO1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTEwMHB4LC01MCUpO1xyXG4gICAgd2lkdGg6IDBweDtcclxuICAgIGhlaWdodDogMXB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgbGluZWFyO1xyXG59XHJcblxyXG4ubmF2X19saW5rIGE6OmFmdGVye1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIGJvdHRvbTogLTFweDtcclxuICAgIGxlZnQ6IDUwJTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNTAlKTtcclxuICAgIHdpZHRoOiAwO1xyXG4gICAgaGVpZ2h0OiAxcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcyBsaW5lYXI7XHJcbn1cclxubGkuYWN0aXZlX19saW5rIGE6OmFmdGVye1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbn1cclxuXHJcbi5uYXZfX2xpbmsgdWw6aG92ZXIgYTo6YmVmb3Jle1xyXG4gICAgd2lkdGg6IDIwMHB4O1xyXG59XHJcbi5uYXZfX2xpbmsgbGk6aG92ZXIgYTo6YmVmb3Jle1xyXG4gICAgd2lkdGg6IDAhaW1wb3J0YW50O1xyXG59XHJcblxyXG4ubmF2X19saW5rIGxpOmhvdmVyIGF7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxufVxyXG4ubmF2X19tZW51e1xyXG4gICAgZGlzcGxheTogbm9uZTtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICB3aWR0aDogMzBweDtcclxuICAgIGhlaWdodDogMzBweDtcclxuICAgIHBvc2l0aW9uOiBmaXhlZDtcclxuICAgIHotaW5kZXg6IDEyO1xyXG4gICAgYm90dG9tOiAzMHB4O1xyXG4gICAgbGVmdDogMzVweDtcclxufVxyXG4ubmF2X19tZW51IHNwYW57XHJcbiAgICBkaXNwbGF5OiBibG9jaztcclxuICAgIHdpZHRoOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG4gICAgbWFyZ2luOiAzcHggMDtcclxuICAgIHRyYW5zaXRpb246IDAuNXMgZWFzZS1pbi1vdXQ7XHJcbn1cclxuLmFjdGl2ZSBzcGFuOm50aC1vZi10eXBlKDEpe1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDA1ZGVnKSB0cmFuc2xhdGUoNnB4LDZweCk7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xyXG59XHJcbi5hY3RpdmUgc3BhbjpudGgtb2YtdHlwZSgyKXtcclxuICAgIG9wYWNpdHk6IDA7XHJcbn1cclxuLmFjdGl2ZSBzcGFuOm50aC1vZi10eXBlKDMpe1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoNXB4LC02cHgpO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2ZmZjtcclxufVxyXG5cclxuXHJcblxyXG4ubmF2X19tdXNpY3tcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgYm90dG9tOiAzMHB4O1xyXG4gICAgcmlnaHQ6IDM1cHg7XHJcbiAgICB6LWluZGV4OiA5O1xyXG4gICAgd2lkdGg6IDMwcHg7XHJcbiAgICBoZWlnaHQ6IDMwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5uYXZfX211c2ljIGkge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgZm9udC1zaXplOiAyLjVyZW07XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjVzIGxpbmVhcjtcclxufVxyXG4ubmF2X19tdXNpYyAubm9uZXtcclxuICAgIGNvbG9yOiAjODA4MDgwO1xyXG59XHJcbi5uYXZfX211c2ljIGk6aG92ZXJ7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGxpbmVhcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbi5uYXZfX3RvcHtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgcG9zaXRpb246IGZpeGVkO1xyXG4gICAgdG9wOiA1MCU7XHJcbiAgICByaWdodDogNTBweDtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCg1MCUpIHJvdGF0ZSgtOTBkZWcpO1xyXG4gICAgei1pbmRleDogOTtcclxufVxyXG4ubmF2X190b3Agc3BhbntcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgZm9udC1zaXplOiAxLjZyZW07XHJcbn1cclxuLnNjcm9sbFRvcHtcclxuICAgIHRyYW5zaXRpb246IDAuM3MgZWFzZS1pbjtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgtNDBweCk7XHJcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XHJcbiAgICBvcGFjaXR5OiAwOyBcclxuICAgIGNvbG9yOiAjZmZmO1xyXG59XHJcbi50b1RvcCB7XHJcbiAgICB2aXNpYmlsaXR5OiB2aXNpYmxlO1xyXG4gICAgb3BhY2l0eTogMTtcclxuICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWCgwcHgpOyBcclxufSBcclxuLm5hdl9fdG9wIHNwYW46aG92ZXJ7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzIGxpbmVhcjtcclxuICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG59XHJcbnNwYW4uYmxhY2t7XHJcbiAgICBjb2xvcjogIzAwMDtcclxufVxyXG4uYmxhY2sgYXtcclxuICAgIGNvbG9yOiAjMDAwO1xyXG59XHJcbi5ibGFjayBpe1xyXG4gICAgY29sb3I6ICMxMjEyMTI7XHJcbn1cclxuLmJsYWNrIHNwYW57XHJcbiAgICBjb2xvcjogIzAwMDtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcbi5ibGFjayBhOjpiZWZvcmV7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDAwO1xyXG59XHJcbi5ibGFjayBhOjphZnRlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbn1cclxuXHJcblxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTAyNHB4KXtcclxuXHJcbiAgICAubmF2X19saW5re1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGhlaWdodDogMTAwJTtcclxuICAgICAgICB0cmFuc2Zvcm06IG5vbmU7XHJcbiAgICAgICAgbGVmdDogMDtcclxuICAgICAgICB0b3A6IDA7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IG5vbmU7XHJcbiAgICB9XHJcbiAgICAubmF2X19saW5rIHVseyBcclxuICAgICAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICAgICAgdG9wOiAwO1xyXG4gICAgICAgIGxlZnQ6IDA7XHJcbiAgICAgICAgaGVpZ2h0OiAxMDAlO1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICMwMDA7XHJcbiAgICAgICAgdHJhbnNmb3JtOiBub25lO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjNzIGVhc2UtaW47XHJcbiAgICAgICAgei1pbmRleDogMTE7XHJcbiAgICAgICAgcG9pbnRlci1ldmVudHM6IGF1dG87XHJcbiAgICB9XHJcbiAgICAubmF2X19saW5rIGxpe1xyXG4gICAgICAgIHRyYW5zZm9ybTogbm9uZTtcclxuICAgICAgICBwYWRkaW5nOiAycmVtO1xyXG4gICAgfVxyXG4gICAgLm5hdl9fbGluayBhe1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG4gICAgLm5hdl9fbGluayBsaTpob3ZlciBhe1xyXG4gICAgICAgIGNvbG9yOiAjZmZmO1xyXG4gICAgfVxyXG5cclxuICAgIC5uYXZfX2xpbmsgdWwubm9uZSB7XHJcbiAgICAgICAgd2lkdGg6IDAhaW1wb3J0YW50O1xyXG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XHJcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIDAuM3MgZWFzZS1pbjtcclxuICAgIH1cclxuXHJcbiAgICAubmF2X19tZW51IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgfVxyXG4gICAgLm5hdl9fdG9we1xyXG4gICAgICAgIHJpZ2h0OiAyMHB4O1xyXG4gICAgfVxyXG4gICAgLm5hdl9fdG9wIHNwYW57XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuXHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpe1xyXG4gICAgLm5hdl9fbXVzaWMgaSB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4gICAgfVxyXG4gICAgLm5hdl9fbWVudSBzcGFue1xyXG4gICAgICAgIHdpZHRoOiAxN3B4O1xyXG4gICAgICAgIGhlaWdodDogMXB4O1xyXG4gICAgICAgIG1hcmdpbjogMnB4IDA7XHJcbiAgICB9XHJcbiAgICAuYWN0aXZlIHNwYW46bnRoLW9mLXR5cGUoMSl7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoNDA1ZGVnKSB0cmFuc2xhdGUoNnB4LDZweCk7XHJcbiAgICB9XHJcbiAgICAuYWN0aXZlIHNwYW46bnRoLW9mLXR5cGUoMyl7XHJcbiAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoLTQ1ZGVnKSB0cmFuc2xhdGUoMXB4LC0xcHgpO1xyXG4gICAgfVxyXG59Il19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-nav',
                templateUrl: './nav.component.html',
                styleUrls: ['./nav.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "vY5A":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "tyNb");




const routes = [];
class AppRoutingModule {
}
AppRoutingModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppRoutingModule });
AppRoutingModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppRoutingModule_Factory(t) { return new (t || AppRoutingModule)(); }, imports: [[_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, { imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]], exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppRoutingModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"].forRoot(routes)],
                exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterModule"]]
            }]
    }], null, null); })();


/***/ }),

/***/ "zUnb":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "fXoL");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "AytR");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "ZAI4");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "jhN1");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ "zn8P":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "zn8P";

/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map