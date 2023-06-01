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

$(".gmail").on("click", function () {
  var copyText = "lavillajheus10@gmail.com";
  navigator.clipboard.writeText(copyText);
  $(".gmail").attr("data-text", "Email copied.");
});

$(".gmail").on("mouseout", function () {
  $(".gmail").attr("data-text", "lavillajheus10@gmail.com");
});

// we're checking to see if the arrow is up or down, then adding or removing the "lift" class accordingly
var arrowBounce = function () {
  var arrow = $(".arrow");

  if (arrow.hasClass("lift")) {
    arrow.removeClass("lift");
  } else {
    arrow.addClass("lift");
  }
};

// run the arrowBounce function every 800ms
setInterval(arrowBounce, 800);

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
