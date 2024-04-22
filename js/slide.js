/* This JavaScript controls the slide system. */
/* Author: Yifan Zhu s46703103 TUT01 Flexible */

// Sets global variable of slide page and the list of slide elements.
var slideIndex = 0;
var slides = document.getElementsByClassName("slide");

// display the first slide everytime the page is loaded
window.onload = function() {
    showSlide(0);
}

function showSlide(index) {
    // The function shows the slide of the index number and hide all the others.
    // Hides all slides in the list firstly.
    var i;
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    // If the target slide index exceed the maximum, display the first slide.
    // This happens when nextSlide function is called on the last slide.
    if (index >= slides.length){
        slideIndex = 0;
    }
    // If the target slide index exceed the minimun, display the last slide.
    // This happens when prevSlide function is called on the first slide.
    if (index < 0){
        slideIndex = slides.length -1;
    }
    // Shows the target slide.
    slides[slideIndex].style.display = "flex";
}

function prevSlide() {
    // Switchs to the previous slide.
    showSlide(slideIndex -= 1);
}

function nextSlide() {
    // Switchs to the next slide.
    showSlide(slideIndex += 1);
}