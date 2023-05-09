
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

var slidesCount = sliderImages.length;

var currentSlide = 1;

var slideNumberElement = document.getElementById('slide-number');

var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

function nextSlide() {
       console.log('next')
}

function prevSlide() {
       console.log('prev')
}
