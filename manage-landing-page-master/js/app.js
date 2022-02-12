const hamburger = document.getElementById("hamburger_icon");

const menu = document.querySelector(".menu");

const overlay = document.querySelector(".overlay");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("open");
  menu.classList.toggle("open");
  overlay.classList.toggle("open");

  if (overlay.classList.contains("open")) {
    overlay.classList.add("fade-in");
    overlay.classList.remove("fade-out");
    menu.classList.add("fade-in");
    menu.classList.remove("fade-out");
    body.classList.add("noscroll");
  } else {
    overlay.classList.remove("fade-in");
    overlay.classList.add("fade-out");
    menu.classList.remove("fade-in");
    menu.classList.add("fade-out");
    body.classList.remove("noscroll");
  }
});

var dot = document.getElementsByClassName("dot");
var slide = document.querySelector(".slider");

dot[0].onclick = function () {
  slide.style.transform = "translateX(0px)";
  for (i = 0; i < 4; i++) {
    dot[i].classList.remove("active");
  }
  this.classList.add("active");
};
dot[1].onclick = function () {
  slide.style.transform = "translateX(-340px)";
  for (i = 0; i < 4; i++) {
    dot[i].classList.remove("active");
  }
  this.classList.add("active");
};
dot[2].onclick = function () {
  slide.style.transform = "translateX(-680px)";
  for (i = 0; i < 4; i++) {
    dot[i].classList.remove("active");
  }
  this.classList.add("active");
};
dot[3].onclick = function () {
  slide.style.transform = "translateX(-1020px)";
  for (i = 0; i < 4; i++) {
    dot[i].classList.remove("active");
  }
  this.classList.add("active");
};
