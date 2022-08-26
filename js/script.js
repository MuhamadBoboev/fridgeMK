"use strict";
const telProgForm = document.querySelector("[data-prog");
const selected = document.querySelector(".form-block__selected");
const optionContainer = document.querySelector(
  ".form-block__options-container"
);

let salom = document.querySelector("#telegram");

const mediaQuery = window.matchMedia("(max-width: 768px)");
function handleTabletChange(e) {
  if (e.matches) {
    document.querySelectorAll(".header__icon").forEach(function (event) {
      event.setAttribute("transform", "scale(1.6)");
    });
  } else {
    document.querySelectorAll(".header__icon").forEach(function (event) {
      event.setAttribute("transform", "scale(1)");
    });
  }
}
mediaQuery.addListener(handleTabletChange);
handleTabletChange(mediaQuery);

const tellFormBlock = document.querySelectorAll(".form-block__input_tell");

tellFormBlock.forEach(function (event) {
  event.addEventListener("focus", () => {
    event.setAttribute("value", "+7");
  });
  event.addEventListener("blur", () => {
    event.removeAttribute("value", "+7");
  });
});

let galleryTop = new Swiper(".gallery-top", {
  spaceBetween: 10,
  // loop: true,
  loopedSlides: 5, //looped slides should be the same
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: "swiper-pagination",
    clickable: true,
  },
  observer: true,
  observeParents: true,
  observeSlideChildren: true,
});
