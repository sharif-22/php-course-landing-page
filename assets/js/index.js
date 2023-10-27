// DOM Elements
const year = document.querySelectorAll(".year");
const hammberger = document.querySelector(".hammberger");
const navMenu = document.querySelector(".nav-menu");

// Drop Down Menu
function onClickHammberger() {
  if (navMenu.classList.contains("hidden")) {
    navMenu.classList.remove("hidden");
    hammberger.children[0].classList.replace("bi-list", "bi-x-lg");
  } else {
    hammberger.children[0].classList.replace("bi-x-lg", "bi-list");
    navMenu.classList.add("hidden");
  }
}
hammberger.addEventListener("click", (e) => {
  e.preventDefault();
  onClickHammberger();
});

const navItems = navMenu.children[0].children.length;
for (let index = 0; index < navItems; index++) {
  // console.log(navMenu.children[0].children[index]);

  navMenu.children[0].children[index].addEventListener(
    "click",
    onClickHammberger
  );
}

// getFullYear()
const date = new Date();
// console.log(date.getFullYear());
year.forEach((value) => {
  value.textContent = date.getFullYear() + ".";
});
