const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const worlds = document.querySelectorAll(".world");
const backgrounds = [
	'radial-gradient(circle at 50%, #d40000 0%, #ff6600 30%, #ffff00 50%, #ff6600 70%, #d40000 100%)',
    'radial-gradient(circle at 50%, #9999e0 0%, #a3c4e8 30%, #4768a3 50%, #a3c4e8 70%, #e0efff 100%)',
    'radial-gradient(circle at 50%, #94d486 0%, #68b36b 30%, #2c6630 50%, #68b36b 70%, #aeeea0 100%)',
    'radial-gradient(circle at 50%, #536872 0%, #475b5a 30%, #303c3b 50%, #475b5a 70%, #536872 100%)',
    'radial-gradient(circle at 50%, #2c3e50 0%, #34495e 30%, #7f8c8d 50%, #34495e 70%, #2c3e50 100%)',
    'radial-gradient(circle at 50%, #ffebcc 0%, #ffd699 30%, #c57b00 50%, #ffd699 70%, #cc9966 100%)'
];

let activeWorldIndex = 0;

function updateWorldVisibility(worldIndex) {
  worlds.forEach((world, index) => {
    world.style.opacity = index === worldIndex ? 1 : 0;
  });
}

function goToNextWorld() {
  activeWorldIndex = (activeWorldIndex + 1) % backgrounds.length;
  updateWorldVisibility(activeWorldIndex);
  document.body.style.background = backgrounds[activeWorldIndex]; // Set body background based on active world index
}

function goToPrevWorld() {
  activeWorldIndex = (activeWorldIndex - 1 + backgrounds.length) % backgrounds.length;
  updateWorldVisibility(activeWorldIndex);
  document.body.style.background = backgrounds[activeWorldIndex]; // Set body background based on active world index
}

prevBtn.addEventListener("click", goToPrevWorld);
nextBtn.addEventListener("click", goToNextWorld);

updateWorldVisibility(activeWorldIndex); // Show the initial world at index 0

// w2-Falling Snow
const iceStorm = document.querySelector('.ice-storm');
for (let i = 0; i < 200; i++) { // Increase the number of ice crystals for denser coverage
  const iceCrystal = document.createElement('div');
  iceCrystal.className = 'ice-crystal';
  iceCrystal.style.left = `${Math.random()}`;
  iceCrystal.style.setProperty('--random-x', Math.random()); // Randomize horizontal position
  iceCrystal.style.animationDuration = `${Math.random() * 3 + 1}s`; // Random duration between 1 and 4 seconds
  iceCrystal.style.animationDelay = `${Math.random() * 2}s`; // Random delay between 0 and 2 seconds
  iceStorm.appendChild(iceCrystal);
}

// w1-Flame

document.addEventListener('DOMContentLoaded', function () {
  const particleContainer = document.querySelector('.particle-container');

  // Define particle properties
  const particleCount = 100; // Number of particles
  const minRadius = 5;
  const maxRadius = 10;
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

  // Function to draw a particle
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

// w3-Leaf

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
const leafCount = 50;
for (let i = 0; i < leafCount; i++) {
  createLeaf();
}

// w4-Ghost

/*var ghost = document.getElementById('ghost');
var ghostX = 0;
var ghostY = 0;

const handleMouseMove = (event) => {
  ghost.classList.add("active");
  
  var eventDoc, doc, body;

  event = event || window.event;
  if (event.pageX == null && event.clientX != null) {
      eventDoc = (event.target && event.target.ownerDocument) || document;
      doc = eventDoc.documentElement;
      body = eventDoc.body;

      event.pageX = event.clientX +
        (doc && doc.scrollLeft || body && body.scrollLeft || 0) -
        (doc && doc.clientLeft || body && body.clientLeft || 0);
      event.pageY = event.clientY +
        (doc && doc.scrollTop  || body && body.scrollTop  || 0) -
        (doc && doc.clientTop  || body && body.clientTop  || 0 );
  }
  
  followCursor(event.pageX, event.pageY)
}

const followCursor = (pageX, pageY) => {
  
 const diffX = pageX - ghostX;
  const diffY = pageY - ghostY;
  const skewX = diffX / 16;
  const scale = diffY / 16;

  ghostX += diffX / 8;
  ghostY += diffY / 8;

  const skewDegrees = countShift(skewX, 0, 50, 0, -25);
  const scaleYValue = countShift(scale, 0, 50, 1, 2.0);

  ghost.style.transform = `translate(${ghostX}px, ${ghostY}px) skew(${skewDegrees}deg) rotate(${-skewDegrees}deg) scaleY(${scaleYValue})`;
}

const countShift = (value, inMin, inMax, outMin, outMax) => 
 ((value - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;


document.addEventListener("mousemove", event => handleMouseMove(event));

document.addEventListener("mouseleave", event => {
   ghost.classList.remove('active');
   ghost.style.animation="none";
});
*/

// New Frame

function showModal() {
    const studentName = document.querySelector('.username span').textContent;
    const studentId = document.querySelector('.username .studID').textContent;

    document.getElementById('modalName').textContent = `Name: ${studentName}`;
    document.getElementById('modalId').textContent = `ID: ${studentId}`;

    document.getElementById('detailsModal').style.display = 'flex';
}

function hideModal() {
    document.getElementById('detailsModal').style.display = 'none';
}

function logout() {
    window.location.href = 'Home.html'; // Redirects to Homepage.html
}


// script.js
document.addEventListener('DOMContentLoaded', function() {
    const crumbles = document.querySelectorAll('.crumble');

    function startCrumbling() {
        crumbles.forEach((crumble, index) => {
            setTimeout(() => {
                crumble.style.opacity = '1';
                crumble.style.transform = `translateY(${(-20 - index * 5)}px) translateX(${(index % 2 * 2 - 1) * (10 + index * 5)}px)`;
                
                // Let crumbles fall
                setTimeout(() => {
                    crumble.style.transform = `translateY(150px) translateX(${(index % 2 * 2 - 1) * (20 + index * 10)}px)`;
                    crumble.style.opacity = '0';
                }, 2000);
            }, index * 100);
        });
    }

    setInterval(() => {
        startCrumbling(); // Start crumbling every 5 seconds
    }, 5000);
});
