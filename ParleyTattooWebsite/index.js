//Parley Tattoo Website JS

function addNewBookingTK()
{
    window.open("https://calendly.com/pigmentpirate");
}

function addNewBookingJD()
{
    window.open("https://www.getrawwtalent.com/s/appointments");
}

function addNewBookingSalem()
{
    window.open("https://form.jotform.com/232885389899182");
}

// global variables for image slider
var currentIndex = 0;
// global array of images saved in same directory as HTML, CSS, and JS scripts
var images = ["tattoo1.png", "tattoo2.png", "tattoo3.png", "tattoo4.png", "tattoo5.png", "tattoo6.png", "tattoo7.png", "tattoo8.png", "tattoo9.png", "tattoo10.png"];

function showNextImage() 
{
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
}

function showPreviousImage() 
{
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
}

function updateImage()
{
    var galleryImage = document.getElementById("galleryImage");
    galleryImage.src = images[currentIndex];
}