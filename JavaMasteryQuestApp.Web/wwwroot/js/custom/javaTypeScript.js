// Preload images
const leftImage = new Image();
leftImage.src = "/image/custom/left.jpg";

const rightImage = new Image();
rightImage.src = "/image/custom/right.jpg";

// Add mouseover event listeners after images are preloaded
document.querySelector('.left-half a').addEventListener('mouseover', function() {
    document.querySelector('.left-half').style.backgroundImage = "url('/image/custom/left.jpg')";
    document.querySelector('.left-half').style.backgroundPosition = "left center";
});

document.querySelector('.left-half a').addEventListener('mouseout', function() {
    document.querySelector('.left-half').style.backgroundImage = "url('/image/custom/BNW_left.jpg')";
    document.querySelector('.left-half').style.backgroundPosition = "left center"; /* Reset background position */
});

document.querySelector('.right-half a').addEventListener('mouseover', function() {
    document.querySelector('.right-half').style.backgroundImage = "url('/image/custom/right.jpg')";
    document.querySelector('.right-half').style.backgroundPosition = "right center";
});

document.querySelector('.right-half a').addEventListener('mouseout', function() {
    document.querySelector('.right-half').style.backgroundImage = "url('/image/custom/BNW_right.jpg')";
    document.querySelector('.right-half').style.backgroundPosition = "right center"; /* Reset background position */
});

//backButton.addEventListener("click", function (){
//    window.location.href = "/User/studentLogin";
//});

$('#backButton').click(function () {
    window.location.href = '/Capstone/Home';
})
