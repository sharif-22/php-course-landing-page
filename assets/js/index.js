// DOM Elements
const year = document.querySelectorAll(".year");
const hammberger = document.querySelector(".hammberger");
const navMenu = document.querySelector(".nav-menu");

// Drop Down Menu
hammberger.addEventListener("click", () => {
  if (navMenu.classList.contains("hidden")) {
    navMenu.classList.remove("hidden");
    hammberger.children[0].classList.replace("bi-list", "bi-x-lg");
  } else {
    hammberger.children[0].classList.replace("bi-x-lg", "bi-list");
    navMenu.classList.add("hidden");
  }
});

// getFullYear()
const date = new Date();
// console.log(date.getFullYear());
year.forEach((value) => {
  value.textContent = date.getFullYear() + ".";
});
