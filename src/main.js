const $ = document;
const menuBtn = $.querySelector(".nav__hamburger-container");
const navList = $.querySelector(".nav__list");
const samplesItems = $.querySelectorAll(".samples__item");
let menuOpen = false;
menuBtn.addEventListener("click", () => {
  if (!menuOpen) {
    menuBtn.classList.add("open");
    navList.classList.add("open-list");
    menuOpen = true;
  } else {
    menuBtn.classList.remove("open");
    navList.classList.remove("open-list");
    menuOpen = false;
  }
});
