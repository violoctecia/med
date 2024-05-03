const sliderr3 = document.getElementById("sliderr2");
const arrowLeftt3 = document.querySelector(".arrow-leftt2");
const arrowRightt3 = document.querySelector(".arrow-rightt2");
const slidess3 = document.querySelectorAll(".slidee2");

let currentSlideIndex3 = 0;
const totalSlides3 = slidess3.length;
const slideWidth = 280; // Ширина слайда
const intervalDuration3 = 7000; // Продолжительность интервала для автопрокрутки

function showSlide3() {
  const offset = -currentSlideIndex3 * slideWidth;
  sliderr3.style.transform = `translateX(${offset}px)`;
}

function nextSlide3() {
  if (currentSlideIndex3 < totalSlides3 - 1) {
    currentSlideIndex3++;
  } else {
    currentSlideIndex3 = 0;
  }
  showSlide3();
}

function previousSlide3() {
  if (currentSlideIndex3 > 0) {
    currentSlideIndex3--;
  } else {
    currentSlideIndex3 = totalSlides3 - 1;
  }
  showSlide3();
}

arrowLeftt3.addEventListener("click", previousSlide3);
arrowRightt3.addEventListener("click", nextSlide3);

function startAutoSlide3() {
  setInterval(() => {
    nextSlide3();
  }, intervalDuration3);
}

function checkScreenSize3() {
  // Проверка на размер экрана может быть реализована по вашему усмотрению
}

window.addEventListener("DOMContentLoaded", checkScreenSize3);
window.addEventListener("resize", checkScreenSize3);

startAutoSlide3();
