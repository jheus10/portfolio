const spotlightSize = 200;
document.addEventListener(
  "mousemove",
  function (event) {
    if (window.event) {
      event = window.event;
    }
    let titleRect = document
      .querySelector(".name-transparent")
      .getBoundingClientRect();
    let mouseX = event.clientX;
    let spotlightX = mouseX - spotlightSize / 2 - titleRect.left;
    let mouseY = event.clientY;
    let spotlightY = mouseY - spotlightSize / 2 - titleRect.top;
    const element = document.querySelector(".name-transparent");
    element.style.backgroundPosition = spotlightX + "px " + spotlightY + "px";
  },
  false
);

const items = document.querySelectorAll(".nav-link");
items.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector("a.active").classList.remove("active");
    item.classList.add("active");
  });
});



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


