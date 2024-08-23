document.addEventListener("DOMContentLoaded", function() {
    const silverCount = document.getElementById("silverCount");
    const goldCount = document.getElementById("goldCount");
    const backButton = document.getElementById('backButton');

    let silverCoins = localStorage.getItem("silverCoins") ? parseInt(localStorage.getItem("silverCoins")) : 0;
    let goldCoins = localStorage.getItem("goldCoins") ? parseInt(localStorage.getItem("goldCoins")) : 0;

    function updateCoinCount() {
        silverCount.textContent = silverCoins;
        goldCount.textContent = goldCoins;
        localStorage.setItem("silverCoins", silverCoins);
        localStorage.setItem("goldCoins", goldCoins);
    }

    updateCoinCount();

    // Back to Basic Lobby
    backButton.addEventListener('click', function() {
        window.location.href = 'BasicLobby.html';
    });

    const container = document.querySelector('.container');

    function createBubble() {
        const bubble = document.createElement('div');
        bubble.classList.add('bubble');
        console.log("Creating bubble");
        bubble.style.left = Math.random() * 100 + 'vw'; // Random horizontal position
        bubble.style.width = Math.random() * 40 + 20 + 'px'; // Random size between 20px and 60px
        container.appendChild(bubble);
    }

    setInterval(createBubble, 1000); // Create a new bubble every second
});
