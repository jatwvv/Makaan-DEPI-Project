// navigation movment
window.addEventListener("scroll", function () {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});

//scroll up button
const scrollTop = function () {
  //create a button in html page
  const scrollBtn = document.createElement("button");
  scrollBtn.innerHTML = "&uarr;";
  scrollBtn.setAttribute("id", "scroll-btn");
  document.body.appendChild(scrollBtn);
  //scroll function
  const scrollBtnDisplay = function () {
    window.scrollY > window.innerHeight
      ? scrollBtn.classList.add("show")
      : scrollBtn.classList.remove("show");
  };
  window.addEventListener("scroll", scrollBtnDisplay);
  //add the functionality
  const scrollWindow = function () {
    if (window.scrollY != 0) {
      setTimeout(function () {
        window.scrollTo(0, window.scrollY - 50);
        scrollWindow();
      }, 10);
    }
  };
  scrollBtn.addEventListener("click", scrollWindow);
};

scrollTop();

let currentIndex = 0;

function updateSliderPosition() {
  const slider = document.querySelector(".testimonial-wrapper");
  const cardWidth = document.querySelector(".testimonial-card").clientWidth;
  slider.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
}

function nextSlide() {
  const slides = document.querySelectorAll(".testimonial-card");
  if (currentIndex < slides.length - 2) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  updateSliderPosition();
}

function prevSlide() {
  const slides = document.querySelectorAll(".testimonial-card");
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = slides.length - 2;
  }
  updateSliderPosition();
}

document.addEventListener("DOMContentLoaded", function () {
  document.querySelector(".next").addEventListener("click", nextSlide);
  document.querySelector(".prev").addEventListener("click", prevSlide);

  // Automatically slide every 5 seconds
  setInterval(nextSlide, 5000);
});

window.addEventListener('load', () => {
  const loader = document.getElementById('loader');
  const content = document.getElementById('container');
  setTimeout(() => {
    loader.style.display = 'none';
    content.style.display = 'block';
}, 500);
});
