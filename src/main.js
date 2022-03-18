const menuBtn = document.querySelector(".nav__hamburger-container");
const navList = document.querySelector(".nav__list");
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
