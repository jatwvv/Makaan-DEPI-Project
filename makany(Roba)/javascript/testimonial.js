

let currentIndex = 0;

function updateSliderPosition() {
    const slider = document.querySelector('.testimonial-wrapper');
    const cardWidth = document.querySelector('.testimonial-card').clientWidth;
    slider.style.transform = `translateX(${-currentIndex * cardWidth}px)`;
}

function nextSlide() {
    const slides = document.querySelectorAll('.testimonial-card');
    if (currentIndex < slides.length - 2) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSliderPosition();
}

function prevSlide() {
    const slides = document.querySelectorAll('.testimonial-card');
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = slides.length - 2;
    }
    updateSliderPosition();
}

document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.next').addEventListener('click', nextSlide);
    document.querySelector('.prev').addEventListener('click', prevSlide);

    // Automatically slide every 5 seconds
    setInterval(nextSlide, 5000);
});
