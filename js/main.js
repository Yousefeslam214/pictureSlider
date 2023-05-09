
var sliderImages = Array.from(document.querySelectorAll('.slider-container img'));

// get number of slides
var slidesCount = sliderImages.length;

// set current slide
var currentSlide = 1;

// get number of slide and string
var slideNumberElement = document.getElementById('slide-number');

// previous and next butons
var nextButton = document.getElementById('next');
var prevButton = document.getElementById('prev');

nextButton.onclick = nextSlide;
prevButton.onclick = prevSlide;

//create the Main UL Element
var paginationElement = document.createElement('ul');

//set ID On Created UI Element
paginationElement.setAttribute('id','pagination-ul')

//create List Items Based On Slides Count
for (let i =1; i<=slidesCount;i++) {
       //create li 
       var paginationItem = document.createElement('li')

       //set custom Atrrribute
       paginationItem.setAttribute('data-index', i);


       //set Item Content
       paginationItem.appendChild(document.createTextNode(i));

       //Apend Items to MAin Ul
       paginationElement.appendChild(paginationItem)
}

//add the created ui elemente to the Page
document.getElementById('indicators').appendChild(paginationElement);

function nextSlide() {
       console.log('next')
}

function prevSlide() {
       console.log('prev')
}
