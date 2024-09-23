document.addEventListener('DOMContentLoaded', function () {
    let nextDom = document.getElementById('next');
    let prevDom = document.getElementById('prev');

    let carouselDom = document.querySelector('.world-container');
    let SliderDom = carouselDom.querySelector('.world-container .list');
    let thumbnailBorderDom = document.querySelector('.world-container .thumbnail');
    let thumbnailItemsDom = thumbnailBorderDom.querySelectorAll('.item');
    let timeDom = document.querySelector('.world-container .time');

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
        let SliderItemsDom = SliderDom.querySelectorAll('.world-container .list .item');
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

// Updated Gold and Silver Coins

document.addEventListener('DOMContentLoaded', function () {
    const silverCount = document.getElementById("silverCount");
    const goldCount = document.getElementById("goldCount");

    const silverCoins = localStorage.getItem("silverCoins") ? parseInt(localStorage.getItem("silverCoins")) : 0;
    const goldCoins = localStorage.getItem("goldCoins") ? parseInt(localStorage.getItem("goldCoins")) : 0;

    silverCount.textContent = silverCoins;
    goldCount.textContent = goldCoins;
});

// Free Coins

document.addEventListener('DOMContentLoaded', function () {
    const freeCoinsButton = document.getElementById("freeCoins");

    freeCoinsButton.addEventListener("click", function () {
        window.location.href = '/Capstone/freeCoins';
    });
});

//WORLD1 - LAVA

document.addEventListener('DOMContentLoaded', function () {
    const particleContainer = document.querySelector('.particle-container');

    // Define particle properties
    const particleCount = 1; // Number of particles
    const minRadius = 3;
    const maxRadius = 4;
    const minSpeed = 2;
    const maxSpeed = 3.5;
    const colors = ['#d43000', '#ff6600', '#ffff00']; // Lava color palette

    let particles = [];

    // Function to create a particle object
    function createParticle() {
        const radius = Math.random() * (maxRadius - minRadius) + minRadius;
        const x = Math.random() * particleContainer.offsetWidth;
        const y = particleContainer.offsetHeight + radius; // Start at the bottom
        const vx = Math.random() * (maxSpeed - minSpeed) + minSpeed;
        const vy = -Math.random() * (maxSpeed - minSpeed); // Move upwards
        const color = colors[Math.floor(Math.random() * colors.length)];

        return {
            radius,
            x,
            y,
            vx,
            vy,
            color,
        };
    }

    // Function to draw a particle with a stronger glow effect
    function drawParticle(particle) {
        const particleElement = document.createElement('div');
        particleElement.classList.add('particle');
        particleElement.style.width = `${particle.radius * 1}px`;
        particleElement.style.height = `${particle.radius * 1}px`;
        particleElement.style.backgroundColor = particle.color;
        particleElement.style.position = 'absolute';
        particleElement.style.borderRadius = '50%';
        particleElement.style.left = `${particle.x}px`;
        particleElement.style.top = `${particle.y}px`;

        // Increased blur radius and lowered outer glow opacity for stronger effect
        particleElement.style.boxShadow = `0 0 0 4px ${particle.color}, 0 0 10px 6px rgba(${particle.color}, 0.3)`;

        particleContainer.appendChild(particleElement);
    }

    // Function to update particle position
    function updateParticle(particle) {
        particle.x += particle.vx;
        particle.y += particle.vy;

        // Check for particle going out of bounds (top)
        if (particle.y < -particle.radius) {
            // Reset particle position at the bottom
            particle.x = Math.random() * particleContainer.offsetWidth;
            particle.y = particleContainer.offsetHeight + particle.radius;
        }
    }

    // Function to animate the particles
    function animate() {
        requestAnimationFrame(animate);

        // Clear the particle container
        particleContainer.innerHTML = '';

        // Update and draw existing particles
        particles.forEach((particle) => {
            updateParticle(particle);
            drawParticle(particle);
        });

        // Create new particles with a delay
        if (Math.random() < 0.1) { // Adjust chance of creating a new particle
            particles.push(createParticle());
        }
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
        particles.push(createParticle());
    }

    animate();
});


//WORLD 2 - SNOW


const iceStorm = document.querySelector('.ice-storm');
for (let i = 0; i < 20; i++) { // Increase the number of ice crystals for denser coverage
    const iceCrystal = document.createElement('div');
    iceCrystal.className = 'ice-crystal';
    iceCrystal.style.left = `${Math.random()}`;
    iceCrystal.style.setProperty('--random-x', Math.random()); // Randomize horizontal position
    iceCrystal.style.animationDuration = `${Math.random() * 3 + 1}s`; // Random duration between 1 and 4 seconds
    iceCrystal.style.animationDelay = `${Math.random() * 2}s`; // Random delay between 0 and 2 seconds
    iceStorm.appendChild(iceCrystal);
}

// WORLD 3 - LEAF

// Set delay in milliseconds
const delay = 1500;

setTimeout(function () {
    // Create multiple leaves
    const leafCount = 7;
    for (let i = 0; i < leafCount; i++) {
        createLeaf();
    }
}, delay);

function createLeaf() {
    const leafContainer = document.querySelector('.leaf-container');
    const leaf = document.createElement('div');
    leaf.classList.add('leaf');
    leafContainer.appendChild(leaf);

    // Set initial and final positions randomly along the X-axis
    const startX = Math.random() * 100;
    const endX = Math.random() * 100;
    leaf.style.setProperty('--startX', startX);
    leaf.style.setProperty('--endX', endX);

    // Set random falling duration and delay
    const duration = (Math.random() * 8 + 4).toFixed(1); // Between 4 and 12 seconds
    const delay = (Math.random() * 4).toFixed(1); // Between 0 and 4 seconds
    leaf.style.setProperty('--duration', `${duration}s`);
    leaf.style.animationDelay = `${delay}s`;
}

// Create multiple leaves
const leafCount = 10;
for (let i = 0; i < leafCount; i++) {
    createLeaf();
}

// MODAL FOR PROFILE

function showModal() {
    document.getElementById('detailsModal').style.display = 'flex';  // Flex to center the modal content
    document.getElementById('modalName').textContent = localStorage.getItem('username');  // Retrieve name from storage
    document.getElementById('modalId').textContent = localStorage.getItem('studentID');  // Retrieve ID from storage
    document.getElementById('modalSection').textContent = localStorage.getItem('section');
    document.getElementById('modalClass').textContent = localStorage.getItem('class');
}

function hideModal() {
    document.getElementById('detailsModal').style.display = 'none';
}

window.onload = function () {
    // Populate fields when the page loads
    document.getElementById('studentName').textContent = localStorage.getItem('username');
    document.getElementById('studentID').textContent = localStorage.getItem('studentID');
    document.getElementById('modalSection').textContent = localStorage.getItem('section');
    document.getElementById('modalClass').textContent = localStorage.getItem('class');
};

function logout() {
    window.location.href = '/Capstone/Home'; // Redirects to Homepage.html
}


// SLIDE FOR WORLD 1

document.getElementById('openDiv1').addEventListener('click', function () {
    document.getElementById('Bslide1').style.right = '0'; // Bring the modal into view
    document.querySelector('.slide1').classList.add('dark'); // Darken and slide the background
    window.location.href = '/Capstone/BW1Part'; // Ensure this URL is correct
});

// Optional: close modal when clicking outside the modal content (advanced behavior)
document.getElementById('Bslide1').addEventListener('click', function (event) {
    if (event.target === this) {
        this.style.right = '-100%'; // Hide the modal
        document.querySelector('.slide1').classList.remove('dark'); // Remove darken and slide effect
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const bSlide1 = document.getElementById('Bslide1');
    const openButton = document.getElementById('openDiv1');

    // Function to open Bslide2
    openButton.addEventListener('click', function () {
        bSlide1.style.right = '0'; // Bring the modal into view
        document.querySelector('.slide1').classList.add('dark'); // Optionally darken and slide the background
    });

    // Function to close Bslide2 if click outside
    document.addEventListener('click', function (event) {
        // Check if the click was outside Bslide2 by seeing if Bslide2 contains the event target
        if (!bSlide1.contains(event.target) && event.target !== openButton) {
            bSlide1.style.right = '-100%'; // Hide the modal
        }
    });

    // Stop propagation of click events inside Bslide2 to prevent them from closing the modal
    bSlide1.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});



// SLIDE FOR WORLD 2

document.getElementById('openDiv2').addEventListener('click', function () {
    document.getElementById('Bslide2').style.right = '0'; // Bring the modal into view

});

// Optional: close modal when clicking outside the modal content (advanced behavior)
document.getElementById('Bslide2').addEventListener('click', function (event) {
    if (event.target === this) {
        this.style.right = '-100%'; // Hide the modal
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const bSlide2 = document.getElementById('Bslide2');
    const openButton = document.getElementById('openDiv2');

    // Function to open Bslide2
    openButton.addEventListener('click', function () {
        bSlide2.style.right = '0'; // Bring the modal into view
    });

    // Function to close Bslide2 if click outside
    document.addEventListener('click', function (event) {
        // Check if the click was outside Bslide2 by seeing if Bslide2 contains the event target
        if (!bSlide2.contains(event.target) && event.target !== openButton) {
            bSlide2.style.right = '-100%'; // Hide the modal
        }
    });

    // Stop propagation of click events inside Bslide2 to prevent them from closing the modal
    bSlide2.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});


// SLIDE FOR WORLD 3

document.getElementById('openDiv3').addEventListener('click', function () {
    document.getElementById('Bslide3').style.right = '0'; // Bring the modal into view
    document.querySelector('.slide3').classList.add('dark'); // Darken and slide the background
});

// Optional: close modal when clicking outside the modal content (advanced behavior)
document.getElementById('Bslide3').addEventListener('click', function (event) {
    if (event.target === this) {
        this.style.right = '-100%'; // Hide the modal
        document.querySelector('.slide3').classList.remove('dark'); // Remove darken and slide effect
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const bSlide3 = document.getElementById('Bslide3');
    const openButton = document.getElementById('openDiv3');

    // Function to open Bslide2
    openButton.addEventListener('click', function () {
        bSlide3.style.right = '0'; // Bring the modal into view
        document.querySelector('.slide3').classList.add('dark'); // Optionally darken and slide the background
    });

    // Function to close Bslide2 if click outside
    document.addEventListener('click', function (event) {
        // Check if the click was outside Bslide3 by seeing if Bslide3 contains the event target
        if (!bSlide3.contains(event.target) && event.target !== openButton) {
            if (document.querySelector('.slide3')) {
                document.querySelector('.slide3').classList.remove('dark');
            }
            bSlide3.style.right = '-100%'; // Hide the modal
        }
    });



    // Stop propagation of click events inside Bslide2 to prevent them from closing the modal
    bSlide3.addEventListener('click', function (event) {
        event.stopPropagation();
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('detailsModal').style.display = 'none';
});


function hideModal() {
    document.getElementById('detailsModal').style.display = 'none';
}

function logout() {
    // Add logout functionality here
    window.location.href = '/Capstone/Home';
}

window.onclick = function (event) {
    const modal = document.getElementById("detailsModal");
    if (event.target === modal) {
        hideModal();
    }
}


function toggleRightContent() {
    var studentRecord = document.getElementById('studentRecord');
    var leaderboard = document.getElementById('leaderboard');
    var saveButton = document.querySelector('saveButton');

    if (studentRecord.classList.contains('hidden')) {
        studentRecord.classList.remove('hidden');
        leaderboard.classList.add('hidden');
        saveButton.textContent = 'Leaderboard';
    } else {
        studentRecord.classList.add('hidden');
        leaderboard.classList.remove('hidden');
        saveButton.textContent = 'Record';
        populateLeaderboards(); // Populate the leaderboard with data when showing it
    }
}

// Function to populate the leaderboard with data
function populateLeaderboards() {
    var data = [
        { name: 'Aniciete, Ricardo Jr. R.', score: 1500, world: 'World 1', floor: 'Floor 1' },
        { name: 'Bayer', score: 1200, world: 'World 1', floor: 'Floor 2' },
        { name: 'Cici', score: 1000, world: 'World 1', floor: 'Floor 3' },
        { name: 'Dave', score: 900, world: 'World 2', floor: 'Floor 1' },
        { name: 'Eep', score: 850, world: 'World 2', floor: 'Floor 2' },
        { name: 'Franky', score: 800, world: 'World 2', floor: 'Floor 3' },
        { name: 'Grasya', score: 750, world: 'World 3', floor: 'Floor 1' },
        { name: 'Hid', score: 700, world: 'World 3', floor: 'Floor 2' },
        { name: 'Shimenet', score: 250, world: 'World 3', floor: 'Floor 3' },
        { name: 'Layk', score: 1300, world: 'World 1', floor: 'Floor 1' },
        { name: 'May', score: 1200, world: 'World 1', floor: 'Floor 2' },
        { name: 'Ans', score: 1100, world: 'World 1', floor: 'Floor 3' },
        { name: 'Ser', score: 940, world: 'World 2', floor: 'Floor 1' },
        { name: 'Heid', score: 350, world: 'World 2', floor: 'Floor 2' },
        { name: 'Firr', score: 600, world: 'World 2', floor: 'Floor 3' },
        { name: 'Gaz', score: 250, world: 'World 3', floor: 'Floor 1' },
        { name: 'Nick', score: 200, world: 'World 3', floor: 'Floor 2' },
        { name: 'Tom', score: 650, world: 'World 3', floor: 'Floor 3' }
    ];

    function populateWorldLeaderboard(worldId, floorFilterId, leaderboardId) {
        var leaderboardTableBody = document.querySelector(leaderboardId + ' tbody');
        var floorFilter = document.getElementById(floorFilterId);

        leaderboardTableBody.innerHTML = '';

        var worldData = data.filter(item => item.world.replace(' ', '-').toLowerCase() === worldId);
        worldData.sort((a, b) => b.score - a.score); // Sort by score descending

        var rank = 1;
        var prevScore = null;

        worldData.forEach(function (item, index) {
            if (item.score !== prevScore) {
                prevScore = item.score;
            }

            var row = document.createElement('tr');
            row.classList.add(item.floor.replace(' ', '-').toLowerCase());

            row.innerHTML = `
            <td>${rank}</td>
            <td>${item.name}</td>
            <td>${item.score}</td>
            <td>${item.floor}</td>
        `;
            leaderboardTableBody.appendChild(row);

            // Increment rank if it's not a tie
            if (index + 1 < worldData.length && worldData[index + 1].score !== item.score) {
                rank++;
            }
        });

        floorFilter.addEventListener('change', function () {
            filterLeaderboard(floorFilterId, leaderboardId);
        });

        filterLeaderboard(floorFilterId, leaderboardId); // Initial filtering
    }


    function filterLeaderboard(floorFilterId, leaderboardId) {
        var selectedFloor = document.getElementById(floorFilterId).value;
        var rows = document.querySelectorAll(leaderboardId + ' tbody tr');
        var rank = 1;

        rows.forEach(function (row) {
            if (selectedFloor === 'all' || row.classList.contains(selectedFloor)) {
                row.style.display = '';
            } else {
                row.style.display = 'none';
            }
        });
    }

    populateWorldLeaderboard('world-1', 'floorFilterWorld1', '#leaderboardTableWorld1');
    populateWorldLeaderboard('world-2', 'floorFilterWorld2', '#leaderboardTableWorld2');
    populateWorldLeaderboard('world-3', 'floorFilterWorld3', '#leaderboardTableWorld3');
}

document.addEventListener('DOMContentLoaded', function () {
    populateLeaderboards();
});

// For demonstration purposes
document.getElementById('detailsModal').style.display = 'flex';

function showLeaderboard() {
    document.querySelector('.right-section').style.display = 'none'; // Hide Student's Record
    document.getElementById('leaderboard').style.display = 'block'; // Show Leaderboard

}

function showRecords() {
    document.querySelector('.right-section').style.display = 'block'; // Show Student's Record
    document.getElementById('leaderboard').style.display = 'none'; // Hide Leaderboard
}


document.addEventListener('DOMContentLoaded', function () {
    const worlds = [
        { id: 'world-1', floors: 3 },
        { id: 'world-2', floors: 3 },
        { id: 'world-3', floors: 3 },
    ];

    worlds.forEach(world => {
        const container = document.getElementById(`${world.id}-floors`);
        let totalPoints = 0;
        let clearedFloors = 0;

        for (let i = 0; i < world.floors; i++) {
            const div = document.createElement('div');
            const floorNumber = document.createElement('div');
            floorNumber.textContent = `Floor ${i + 1}`;
            floorNumber.classList.add('floor-number');
            const floorPoints = document.createElement('div');

            if (world.id === 'world-1') {
                const floorScores = [
                    localStorage.getItem('BW1F1totalScore'),
                    localStorage.getItem('BW1F2totalScore'),
                    localStorage.getItem('BW1F3totalScore')

                ];
                const score = floorScores[i] ? parseInt(floorScores[i]) : 0;
                floorPoints.textContent = `${score} points`;
                totalPoints += score;
            } else if (world.id === 'world-2') {
                const floorScores = [
                    localStorage.getItem('BW2F1totalScore'),
                    localStorage.getItem('BW2F2totalScore'),
                    localStorage.getItem('BW2F3totalScore'),
                    localStorage.getItem('BW2F4totalScore')
                ];
                const score = floorScores[i] ? parseInt(floorScores[i]) : 0;
                floorPoints.textContent = `${score} points`;
                totalPoints += score;
            } else if (world.id === 'world-3') {
                const floorScores = [
                    localStorage.getItem('BW3F1totalScore'),
                    localStorage.getItem('BW3F2totalScore'),
                    localStorage.getItem('BW3F3totalScore')
                ];
                const score = floorScores[i] ? parseInt(floorScores[i]) : 0;
                floorPoints.textContent = `${score} points`;
                totalPoints += score;
            } else {
                floorPoints.textContent = '0 points'; // Placeholder
            }

            div.appendChild(floorNumber);
            div.appendChild(floorPoints);
            container.appendChild(div);
            clearedFloors++;
        }

        document.getElementById(`${world.id}-total`).textContent = totalPoints;
        document.getElementById(`${world.id}-cleared`).textContent = clearedFloors;
    });
    document.getElementById('profile-link').addEventListener('click', function () {
        document.getElementById('profile').classList.remove('hidden');
        document.getElementById('records').classList.add('hidden');
    });

    document.getElementById('records-link').addEventListener('click', function () {
        document.getElementById('records').classList.remove('hidden');
        document.getElementById('profile').classList.add('hidden');
    });


});
