// JS cho menu mobile

const menuIcon = document.querySelector('.header-button');
const menu = document.querySelector('.header-menu');
const overlay = document.querySelector('.overlay');

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
let slideIndex = 0;
const slides = document.getElementsByClassName('slider-slide');

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

const video = document.getElementById("myVideo");
const playPauseBtn = document.getElementById("playPauseBtn");

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

// JS FAQ

window.addEventListener('DOMContentLoaded', (event) => {
    // Lấy danh sách tab và tab links
    var tabs = document.querySelectorAll(".tab");
    var tabLinks = document.querySelectorAll(".tab-link");

    // Hiển thị nội dung của Tab 1 khi trang được tải và thêm lớp active vào tab link và tab tương ứng
    tabs[0].classList.add("active");
    tabLinks[0].classList.add("active");
});

function changeTab(event, tabId) {
    var tabs = document.querySelectorAll(".tab");
    var tabLinks = document.querySelectorAll(".tab-link");

    // Ẩn tất cả nội dung tab và xóa lớp active khỏi tất cả tab links
    tabs.forEach(tab => tab.classList.remove("active"));
    tabLinks.forEach(link => link.classList.remove("active"));

    // Hiển thị nội dung tab được chọn và thêm lớp active vào tab link tương ứng
    var selectedTab = document.getElementById(tabId);
    var selectedTabLink = event.currentTarget;
    selectedTab.classList.add("active");
    selectedTabLink.classList.add("active");
}

function toggleAnswer(questionNumber) {
    var answer = document.getElementById("answer" + questionNumber);
    var otherAnswers = document.getElementsByClassName("answer");
    var path2s = document.getElementsByClassName("path2");

    for (let i = 0; i < otherAnswers.length; i++) {
        if (otherAnswers[i] !== answer) {
            otherAnswers[i].style.display = "none";
            path2s[i].style.transform = "rotate(90deg)";
        }
    }

    if (answer.style.display === "none") {
        answer.style.display = "block";
        path2s[questionNumber - 1].style.transform = "rotate(0deg)";
    } else {
        answer.style.display = "none";
        path2s[questionNumber - 1].style.transform = "rotate(90deg)";
    }
}


// product detail
// Lấy danh sách ảnh thumb
var thumbs = document.querySelectorAll('.thumb-slider img');

// Lặp qua danh sách ảnh thumb và thêm sự kiện click
for (var i = 0; i < thumbs.length; i++) {
    thumbs[i].addEventListener('click', function () {
        var selectedThumb = this;

        // Xóa lớp active khỏi tất cả ảnh thumb
        for (var j = 0; j < thumbs.length; j++) {
            thumbs[j].classList.remove('active');
        }

        // Thêm lớp active vào ảnh thumb được click
        selectedThumb.classList.add('active');

        // Lấy đường dẫn ảnh lớn tương ứng từ thuộc tính alt
        var largeImagePath = selectedThumb.alt;

        // Lấy tất cả ảnh lớn trong slider
        var largeImages = document.querySelectorAll('.slider img');

        // Ẩn tất cả các ảnh lớn
        for (var k = 0; k < largeImages.length; k++) {
            largeImages[k].style.display = 'none';
        }

        // Hiển thị ảnh lớn tương ứng với ảnh thumb được chọn
        var selectedLargeImage = document.querySelector('.slider img[src="' + largeImagePath + '"]');
        selectedLargeImage.style.display = 'block';
    });
}


// quantity

// Lấy các phần tử DOM
const decreaseBtn = document.querySelector('.decrease');
const increaseBtn = document.querySelector('.increase');
const quantitySpan = document.querySelector('.quantity');

let quantity = 0;

function updateQuantity() {
    quantitySpan.textContent = quantity;
}

decreaseBtn.addEventListener('click', function () {
    if (quantity > 0) {
        quantity--;
        updateQuantity();
    }
});

increaseBtn.addEventListener('click', function () {
    quantity++;
    updateQuantity();
});