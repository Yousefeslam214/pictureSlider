
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

//get the new created ul
var paginationCreatedUL = document.getElementById('pagination-ul')

var paginationsBullets = Array.from(document.querySelectorAll('#pagination-ul li'));


function nextSlide() {
       console.log('next')
}

function prevSlide() {
       console.log('prev')
}
theChecker();
//create checker function
function theChecker() {
       //set The Slide Number
       slideNumberElement.textContent = 'Slide #' + (currentSlide) + ' of ' + (slidesCount);

       //set Active Class on Current ele
       sliderImages[currentSlide-1].classList.add('active');
       
       //set Active Class on Current pagination
       paginationCreatedUL.children[currentSlide-1].classList.add('active');

       //check if Current Slide is the First
       if (currentSlide==1) {
              //Add Disabled Class on Prev button
              prevButton.classList.add('disabled')
       } else{
              //Remove Disabled Class on Prev button
              prevButton.classList.remove('disabled')
       }

       //check if Current Slide is the Last
       if (currentSlide==slidesCount) {
              //Add Disabled Class on Prev button
              nextButton.classList.add('disabled')
       } else{
              //Remove Disabled Class on Prev button
              nextButton.classList.remove('disabled')
       }

       
       removeAllActive();

       function removeAllActive() {

              //Loop Through Images
              sliderImages.forEach(function (img) {
                     img.classList.remove('active')
              })
              //Loop Through Pagination Bullets
              paginationsBullets.forEach(function (bullet) {

                     bullet.classList.remove('active');
              })

       }


}
