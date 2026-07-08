const carousel = document.getElementById("carousel");
const slides = carousel.children;

const nextBtn = document.getElementById("next");
const prevBtn = document.getElementById("prev");

const indicators = document.querySelectorAll(".indicator");

let index = 0;
const totalSlides = slides.length;

function updateCarousel() {
  carousel.style.transform = `translateX(-${index * 100}%)`;
  updateIndicators();
}

function updateIndicators() {
  indicators.forEach((dot, i) => {
    dot.classList.remove("bg-accent");
    dot.classList.add("bg-gray-400/50");

    if (i === index) {
      dot.classList.remove("bg-gray-400/50");
      dot.classList.add("bg-accent");
    }
  });
}

nextBtn.addEventListener("click", nextSlide);
prevBtn.addEventListener("click", prevSlide);

function nextSlide() {
  index++;
  updateCarousel();
}

function prevSlide() {
  if (index === 0) {
    index = totalSlides - 2;
    carousel.style.transition = "none";
    updateCarousel();

    setTimeout(() => {
      carousel.style.transition = "transform 700ms ease-in-out";
      index--;
      updateCarousel();
    }, 50);
  } else {
    index--;
    updateCarousel();
  }
}

carousel.addEventListener("transitionend", () => {
  if (index === totalSlides - 1) {
    carousel.style.transition = "none";
    index = 0;
    updateCarousel();

    setTimeout(() => {
      carousel.style.transition = "transform 700ms ease-in-out";
    }, 50);
  }
});

indicators.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    index = i;
    updateCarousel();
  });
});

updateIndicators();
