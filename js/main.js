let burgerBtn;
let navbarMobile;
let footerYear;
let username;
let userEmail;
let textarea;
let error;
let sendBtn;

const main = () => {
  getElements();
  addEventListeners();
  handleCurrentYear();
} 

const getElements = () => {
  burgerBtn = document.querySelector(".burger-btn");
  navbarMobile = document.querySelector(".nav-mobile");
  footerYear = document.querySelector(".footer__year");
  username = document.querySelector("#name");
  userEmail = document.querySelector("#email");
  textarea = document.querySelector("#message");
  error = document.querySelector(".contact__form-error");
  sendBtn = document.querySelector(".contact__form-btn");
}

const addEventListeners = () => {
  burgerBtn.addEventListener("click", handleToggleNavbar);
  sendBtn.addEventListener("click", handleFormSubmit);
  window.addEventListener("resize", closeNavbar);
}

const handleFormSubmit = (event) => {
  event.preventDefault();

  const formControls = [
    {input: username, minLength: 2},
    {input: userEmail, minLength: 8},
    {input: textarea, minLength: 0}
  ];

  checkFormControls(formControls);
  checkLength(formControls);
}

const checkFormControls = (formControls) => {
  formControls.forEach((control) => {
    if (control.input.value.trim() === "") {
      displayError(control.input, `${control.input.name.charAt(0).toUpperCase() + control.input.name.slice(1)} is required!`);
    } else {
      hideError(control.input);
    }
  })
}

const checkLength = (formControls) => {
  formControls.forEach((control) => {
    if (control.input.value.trim().length < control.minLength) {
      displayError(control.input, `${control.input.name.charAt(0).toUpperCase() + control.input.name.slice(1)} must be at least ${control.minLength} characters long!`);
    }
  });
}

const displayError = (input, message) => {
  input.nextElementSibling.textContent = message;
  input.nextElementSibling.style.display = "block";
}

const hideError = (input) => {
  input.nextElementSibling.style.display = "none";
  input.nextElementSibling.textContent = "";
}

const handleToggleNavbar = () => {
  navbarMobile.classList.toggle("is-active");
  burgerBtn.classList.toggle("is-active");
  burgerBtn.classList.add("animation");
}

const closeNavbar = () => {
  if (window.innerWidth >= 992) {
    navbarMobile.classList.remove("is-active");
    burgerBtn.classList.remove("is-active");
  }
}

const handleCurrentYear = () => {
  const year = new Date().getFullYear();
  footerYear.textContent = year;
}

window.addEventListener("DOMContentLoaded", main);