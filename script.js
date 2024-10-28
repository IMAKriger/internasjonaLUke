// JavaScript for slideshow
let slideIndex = 1;
showSlides(slideIndex);

// Function to move to the next/previous slide using arrows
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Function to show the current slide
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}

// JavaScript for hamburger menu
document.querySelector('.hamburger-menu').addEventListener('click', function () {
    let sideMenu = document.querySelector('.side-menu');
    sideMenu.style.display = sideMenu.style.display === 'block' ? 'none' : 'block';
});
