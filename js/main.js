let burgerBtn;
let navbarMobile;
let footerYear;

const main = () => {
  getElements();
  addEventListeners();
  handleCurrentYear();
}

const getElements = () => {
  burgerBtn = document.querySelector(".burger-btn");
  navbarMobile = document.querySelector(".nav-mobile");
  footerYear = document.querySelector(".footer__year");
}

const addEventListeners = () => {
  burgerBtn.addEventListener("click", handleToggleNavbar);
}

const handleToggleNavbar = () => {
  navbarMobile.classList.toggle("is-active");
  burgerBtn.classList.toggle("is-active");
  burgerBtn.classList.add("animation");
}

const handleCurrentYear = () => {
  const year = new Date().getFullYear();
  footerYear.textContent = year;
}

window.addEventListener("DOMContentLoaded", main);