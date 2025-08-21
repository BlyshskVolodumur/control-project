export function slider() {
  const slides = document.querySelector(".slides");
  const slide = document.querySelectorAll(".slide");
  const prev = document.getElementById("prev");
  const next = document.getElementById("next");

  let index = 0;

  function showSlide(i) {
    if (i < 0) {
      index = slide.length - 1;
    } else if (i >= slide.length) {
      index = 0;
    } else {
      index = i;
    }
    slides.style.transform = `translateX(${-index*256}px)`
  }
  prev.addEventListener("click", () => showSlide(index - 1));
  next.addEventListener("click", () => showSlide(index + 1));
}
