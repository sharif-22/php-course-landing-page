// DOM Elements
const year = document.querySelectorAll(".year");
const hammberger = document.querySelector(".hammberger");
const mobileNavMenu = document.querySelector("#mobileNavMenu");
// Drop Down Menu
function onClickHammberger() {
  // if 🍔 change to ❌ and displaying 📱 menue
  if (hammberger.children[0].classList.contains("bi-list")) {
    hammberger.children[0].classList.replace("bi-list", "bi-x-lg");

    // changing the nav item to mobile friendly
    mobileNavMenu.classList.remove("hidden");
    mobileNavMenu.classList.add(
      "absolute",
      "top-16",
      "bg-slate-800",
      "h-screen",
      "w-full",
      "m-0",
      "flex",
      "flex-col",
      "justify-center",
      "items-center",
      "text-white"
      // "z-20"
    );
  } else {
    mobileNavMenu.classList.add("hidden");
    hammberger.children[0].classList.replace("bi-x-lg", "bi-list");
  }
}
hammberger.addEventListener("click", (e) => {
  e.preventDefault();
  collapseMobileMenu();
  onClickHammberger();
});

function collapseMobileMenu() {
  // removeing mobile nav menu after every click of the menu
  const mobileNavMenuChild = mobileNavMenu.children;
  for (let index = 0; index < mobileNavMenuChild.length; index++) {
    const navAnchor = mobileNavMenuChild[index].children[0];
    // removeing mobile nav menu after user click the menu
    navAnchor.addEventListener("click", onClickHammberger);
  }
}

// getFullYear()
const date = new Date();
// console.log(date.getFullYear());
year.forEach((value) => {
  value.textContent = date.getFullYear() + ".";
});

// dynamic nav styles
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav ol li a");
const nav = document.querySelector("nav");

window.onscroll = () => {
  sections.forEach((section) => {
    let navHeight = nav.offsetHeight;
    let top = window.scrollY;
    let offset = section.offsetTop;
    let height = section.offsetHeight;
    let id = section.getAttribute("id");

    if (top >= offset - navHeight && top < offset - navHeight + height) {
      navLinks.forEach((link) => {
        link.classList.remove("active");
        document
          .querySelector(`nav ol li a[href*= "#${id}"]`)
          .classList.add("active");

        document
          .querySelector(`nav ol li a[href*= "#${id}"]`)
          .classList.remove("text-gray-400");
      });
    }
  });
};
