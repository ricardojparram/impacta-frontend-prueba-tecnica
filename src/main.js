import Swiper from "swiper/bundle";
import "swiper/css/bundle";
const swiper = new Swiper(".swiper", {
  pagination: {
    el: ".swiper-pagination",
  },
});

document.addEventListener("DOMContentLoaded", function () {
  const navbarToggle = document.querySelector(".navbar-toggle");
  const navbarMenu = document.querySelector(".navbar-menu");
  const body = document.body;

  const overlay = document.createElement("div");
  overlay.className = "menu-overlay";
  body.appendChild(overlay);

  function toggleMenu() {
    navbarToggle.classList.toggle("active");
    navbarMenu.classList.toggle("active");
    overlay.classList.toggle("active");

    if (navbarMenu.classList.contains("active")) {
      body.style.overflow = "hidden";
    } else {
      body.style.overflow = "";
    }
  }

  navbarToggle.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", toggleMenu);

  const navLinks = document.querySelectorAll(".navbar-links a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (navbarMenu.classList.contains("active")) {
        toggleMenu();
      }
    });
  });

  window.addEventListener("resize", function () {
    if (window.innerWidth > 756 && navbarMenu.classList.contains("active")) {
      toggleMenu();
    }
  });
});
