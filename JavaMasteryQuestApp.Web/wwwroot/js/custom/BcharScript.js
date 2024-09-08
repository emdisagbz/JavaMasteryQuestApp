document.addEventListener('DOMContentLoaded', function () {
    let nextDom = document.getElementById('next');
    let prevDom = document.getElementById('prev');

    let carouselDom = document.querySelector('.carousel');
    let SliderDom = carouselDom.querySelector('.carousel .list');
    let thumbnailBorderDom = document.querySelector('.carousel .thumbnail');
    let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
    let timeDom = document.querySelector('.carousel .time');

    // Initial setup for thumbnails
    thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);

    let timeRunning = 3000;
    let runTimeOut;


    nextDom.onclick = function () {
        showSlider('next');
    }

    prevDom.onclick = function () {
        showSlider('prev');
    }

    function showSlider(type) {
        let SliderItemsDom = SliderDom.querySelectorAll('.carousel .list .item');
        let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');

        if (type === 'next') {
            SliderDom.appendChild(SliderItemsDom[0]);
            thumbnailBorderDom.appendChild(thumbnailItemsDom[0]);
            carouselDom.classList.add('next');
        } else {
            SliderDom.prepend(SliderItemsDom[SliderItemsDom.length - 1]);
            thumbnailBorderDom.prepend(thumbnailItemsDom[thumbnailItemsDom.length - 1]);
            carouselDom.classList.add('prev');
        }

        clearTimeout(runTimeOut);
        runTimeOut = setTimeout(() => {
            carouselDom.classList.remove('next');
            carouselDom.classList.remove('prev');
        }, timeRunning);
    }
});
// CHARACTER AVAILABLE
function selectCharacter(element) {
    const characterName = element.parentElement.parentElement.querySelector('.title').textContent;

    // Check if the selected character is RangerGirl
    if (characterName === "ELARA") {
        // Redirect to the lobby
        window.location.href = element.getAttribute("href");
    } else {
        // Show a message for unavailable characters
        alert("This character is not yet available!");
    }
}

// CHARACTER SPRITE SHEET VIEWING

// Function to show sprite sheet animation in the modal
function showSpriteSheet(imageSrc, sheetWidth, sheetHeight, frameCount) {
    var modal = document.getElementById("spriteModal");
    var spriteContainer = document.getElementById("spriteContainer");

    // Remove any previous content
    spriteContainer.innerHTML = '';

    // Create the new sprite sheet element
    const spriteSheet = document.createElement('div');
    spriteSheet.classList.add('sprite-sheet');
    spriteSheet.style.width = sheetWidth + 'px';
    spriteSheet.style.height = sheetHeight / frameCount + 'px';  // Single frame height
    spriteSheet.style.backgroundImage = `url(${imageSrc})`;
    spriteSheet.style.backgroundSize = `${sheetWidth}px ${sheetHeight}px`; // Full sprite sheet size

    spriteContainer.appendChild(spriteSheet);
    modal.style.display = "block";

    // Start animating the sprite sheet (frame animation)
    let frameIndex = 0;
    const frameHeight = sheetHeight / frameCount;  // Calculate height of each frame
    setInterval(() => {
        spriteSheet.style.backgroundPosition = `0px -${frameIndex * frameHeight}px`;  // Move the background vertically
        frameIndex = (frameIndex + 1) % frameCount;  // Loop through the frames
    }, 100); // Adjust the speed of frame change (100 ms per frame)
}

// Function to close the modal
function closeModal() {
    var modal = document.getElementById("spriteModal");
    modal.style.display = "none";
}

document.addEventListener('click', function (event) {
    var modal = document.getElementById("spriteModal");
    var spriteSheetContainer = document.querySelector("#spriteModal .sprite-sheet-container"); // Adjust this selector if necessary

    // Close the modal if the click is outside the sprite-sheet container
    if (modal && !spriteSheetContainer.contains(event.target) && event.target === modal) {
        closeModal();
    }
});



backButton.addEventListener("click", function () {
    window.location.href = '/Capstone/Home';
});
