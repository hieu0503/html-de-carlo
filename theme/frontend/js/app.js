// JS cho menu mobile

var menuIcon = document.querySelector('.header-button');
var menu = document.querySelector('.header-menu');
var overlay = document.querySelector('.overlay');

menuIcon.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuIcon.classList.toggle('change');
    overlay.classList.toggle('active');
});
overlay.addEventListener('click', () => {
    menu.classList.toggle('active');
    menuIcon.classList.toggle('change');
    overlay.classList.toggle('active');
})

// JavaScript cho slider
var slideIndex = 0;
var slides = document.getElementsByClassName('slider-slide');

showSlide(slideIndex);

function changeSlide(n) {
    showSlide(slideIndex += n);
}

function showSlide(n) {
    if (n >= slides.length) {
        slideIndex = 0;
    } else if (n < 0) {
        slideIndex = slides.length - 1;
    }

    for (var i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }

    slides[slideIndex].style.display = 'block';
}

// JS video

var video = document.getElementById("myVideo");
var playPauseBtn = document.getElementById("playPauseBtn");

function togglePlayPause() {
    if (video.paused) {
        video.play();
        playPauseBtn.textContent = "Pause";
    } else {
        video.pause();
        // playPauseBtn.textContent = "Play";
        playPauseBtn.innerHTML = '<img src="./theme/frontend/images/play.png" alt="" class="btn-video">';
    }
}

playPauseBtn.addEventListener("click", togglePlayPause);