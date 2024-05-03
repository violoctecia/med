const sliderr2 = document.getElementById("sliderr");
const arrowLeftt2 = document.querySelector(".arrow-leftt");
const arrowRightt2 = document.querySelector(".arrow-rightt");
const slidess2 = document.querySelectorAll(".slidee");

let currentSlideIndex2 = 0;
const totalSlides = slidess2.length;
let visibleSlides = 7;
const intervalDuration = 7000;

function showSlide2() {
  const slideWidth = slidess2[0].offsetWidth;
  let offset = -currentSlideIndex2 * slideWidth;
  sliderr2.style.transform = `translateX(${offset}px)`;
}

function nextSlide2() {
  if (currentSlideIndex2 + visibleSlides >= totalSlides) {
    currentSlideIndex2 = 0;
  } else {
    currentSlideIndex2++;
  }
  showSlide2();
}

function previousSlide2() {
  if (currentSlideIndex2 === 0) {
    currentSlideIndex2 = totalSlides - visibleSlides;
  } else {
    currentSlideIndex2--;
  }
  showSlide2();
}

arrowLeftt2.addEventListener("click", previousSlide2);
arrowRightt2.addEventListener("click", nextSlide2);

function startAutoSlide() {
  setInterval(() => {
    nextSlide2();
  }, intervalDuration);
}

function checkScreenSize() {
  visibleSlides = window.innerWidth < 900 ? 3 : 7;
  showSlide2();
}

window.addEventListener("DOMContentLoaded", checkScreenSize);
window.addEventListener("resize", checkScreenSize);

startAutoSlide();
