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

// start slider
const slides = document.querySelector(".slides");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
let currentIndex1 = 0;

prevBtn.addEventListener("click", () => {
  currentIndex1 =
    currentIndex1 > 0 ? currentIndex1 - 1 : slides.children.length - 1;
  updateSlidePosition();
});

nextBtn.addEventListener("click", () => {
  currentIndex1 =
    currentIndex1 < slides.children.length - 1 ? currentIndex1 + 1 : 0;
  updateSlidePosition();
});

function updateSlidePosition() {
  slides.style.transform = `translateX(-${currentIndex1 * 100}%)`;
}

// Initialize the first slide position
updateSlidePosition();

//  JavaScript for active link
document.querySelectorAll(".category a").forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior
    document
      .querySelectorAll(".category a")
      .forEach((a) => a.classList.remove("active")); // Remove 'active' class from all links
    this.classList.add("active"); // Add 'active' class to the clicked link
  });
});
