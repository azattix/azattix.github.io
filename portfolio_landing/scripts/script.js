$(function () {
  const hamburger = document.querySelector(".hamburger");
  const navMenu = document.querySelector(".nav-menu");

  hamburger.addEventListener("click", mobileMenu);

  function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
  }

  const navLink = document.querySelectorAll(".nav-link");

  navLink.forEach((n) => n.addEventListener("click", closeMenu));

  function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }

  function navScroll() {
    if ($(window).scrollTop() > 50) {
      $(".header").addClass("header__theme-dark");
      $(".bar").addClass("bar__theme-dark");
    } else {
      $(".header").removeClass("header__theme-dark");
      $(".bar").removeClass("bar__theme-dark");
    }
  }

  navScroll();

  $(window).on("scroll", navScroll);
});
