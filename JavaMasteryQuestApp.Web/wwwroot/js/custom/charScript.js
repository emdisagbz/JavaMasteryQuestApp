document.addEventListener('DOMContentLoaded', function() {
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
    

    nextDom.onclick = function() {
        showSlider('next');
    }

    prevDom.onclick = function() {
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

//LOGIN FORM
document.addEventListener('DOMContentLoaded', function() {
    // Access the modal and the close button
    var modal = document.getElementById('formModal');
    var closeBtn = document.querySelector('.close');

    // Function to open modal
    function openModal(event) {
        event.preventDefault(); // Prevent the link from directing immediately
        modal.style.display = 'block';
    }

    // Close the modal when the close button is clicked
    closeBtn.onclick = function() {
        modal.style.display = 'none';
    }

    // Close the modal on outside click
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    }

    // Attach openModal function to each SELECT button
    document.querySelectorAll('.buttons a').forEach(function(element) {
        element.onclick = openModal;
    });

    // Handle form submission
    document.getElementById('userInfoForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const studentID = document.getElementById('studentID').value;
		const section = document.getElementById('section').value;

        // Save data to localStorage
        localStorage.setItem('username', username);
        localStorage.setItem('studentID', studentID);
		localStorage.setItem('section', section);

        // Close the modal
        modal.style.display = 'none';

        // Redirect to Lobby.html
        window.location.href = '/Capstone/BasicLobby';
    });
});


