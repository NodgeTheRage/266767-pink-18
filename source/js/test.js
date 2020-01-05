var burger = document.querySelector(".page-nav__toggle");
var menuShow = document.querySelector(".nav-list");
var header = document.querySelector(".page-header");

document.addEventListener("DOMContentLoaded", function(){
    menuShow.classList.toggle("nav-list--show");
    burger.classList.toggle("page-nav__toggle--cross");
    header.classList.toggle("page-header--menu");
    header.classList.toggle("page-header--inactive");
});
burger.addEventListener("click", function (evt) {
    menuShow.classList.toggle("nav-list--show");
    burger.classList.toggle("page-nav__toggle--cross");
    header.classList.toggle("page-header--menu");
    header.classList.toggle("page-header--inactive");
});