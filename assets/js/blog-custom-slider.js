document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".slider");
    const leftArrow = document.querySelector(".left-arrow");
    const rightArrow = document.querySelector(".right-arrow");
    const sliderItems = document.querySelectorAll(".slider-item");
    const itemWidth = sliderItems[0].offsetWidth;
    let currentIndex = 0;

    // Function to move slider
    function moveSlider(index) {
        const maxIndex = sliderItems.length - Math.floor(slider.offsetWidth / itemWidth);
        currentIndex = Math.max(0, Math.min(index, maxIndex)); // Keep within bounds
        slider.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }

    // Add click events to arrows
    leftArrow.addEventListener("click", function () {
        moveSlider(currentIndex - 1);
    });

    rightArrow.addEventListener("click", function () {
        moveSlider(currentIndex + 1);
    });

    // Resize event to recalculate sizes dynamically
    window.addEventListener("resize", function () {
        moveSlider(currentIndex);
    });
});