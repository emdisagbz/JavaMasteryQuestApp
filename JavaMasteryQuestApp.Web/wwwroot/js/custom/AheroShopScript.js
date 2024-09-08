document.addEventListener("DOMContentLoaded", function() {
    const silverCount = document.getElementById("silverCount");
    const goldCount = document.getElementById("goldCount");
    const buyButton = document.getElementById("buyButton");
    const popupContainer = document.getElementById("popupContainer");
    const centralImageContainer = document.getElementById("centralImageContainer");
    const centralImage = document.getElementById("centralImage");

    let selectedCircle = null;
    let silverCoins = localStorage.getItem("silverCoins") ? parseInt(localStorage.getItem("silverCoins")) : 0;
    let goldCoins = localStorage.getItem("goldCoins") ? parseInt(localStorage.getItem("goldCoins")) : 0;

    function updateCoinCount() {
        silverCount.textContent = silverCoins;
        goldCount.textContent = goldCoins;
        localStorage.setItem("silverCoins", silverCoins);
        localStorage.setItem("goldCoins", goldCoins);
    }

    function updatePurchasedState() {
        const purchasedCircles = JSON.parse(localStorage.getItem("purchasedCircles")) || [];
        document.querySelectorAll('.circle').forEach((circle, index) => {
            if (purchasedCircles.includes(index)) {
                circle.classList.add('purchased', 'disabled');
            }
        });
    }

    updateCoinCount(); // Call the updateCoinCount function to update the coin counts when the page loads
    updatePurchasedState(); // Call the updatePurchasedState function to apply the purchased state when the page loads

    document.querySelectorAll('.circle').forEach((circle, index) => {
        circle.addEventListener('click', function() {
            if (!this.classList.contains('disabled')) {
                selectedCircle = this;
                buyButton.style.display = 'block';

                // Display the selected image at the center
                const imgSrc = this.querySelector('img').src;
                centralImage.src = imgSrc;
                centralImageContainer.style.display = 'flex';
            }
        });
    });

    function showPopupMessage(message) {
        const popup = document.createElement("div");
        popup.className = "popup-message";
        popup.textContent = message;
        popupContainer.appendChild(popup);

        setTimeout(() => {
            popup.remove();
        }, 4000);
    }

    buyButton.addEventListener('click', function() {
        if (selectedCircle) {
            const cost = parseInt(selectedCircle.getAttribute('data-cost'));
            const currency = selectedCircle.getAttribute('data-currency');

            if (currency === 'silver' && silverCoins >= cost) {
                silverCoins -= cost;
                updateCoinCount();
                showPopupMessage('Purchase successful with silver coins!');
                selectedCircle.classList.add('purchased', 'disabled');
                savePurchasedState();
            } else if (currency === 'gold' && goldCoins >= cost) {
                goldCoins -= cost;
                updateCoinCount();
                showPopupMessage('Purchase successful with gold coins!');
                selectedCircle.classList.add('purchased', 'disabled');
                savePurchasedState();
            } else {
                showPopupMessage('Not enough coins!');
            }

            buyButton.style.display = 'none';
            selectedCircle = null;
            centralImageContainer.style.display = 'none'; // Hide the image container
        }
    });

    function savePurchasedState() {
        const purchasedCircles = [];
        document.querySelectorAll('.circle').forEach((circle, index) => {
            if (circle.classList.contains('purchased')) {
                purchasedCircles.push(index);
            }
        });
        localStorage.setItem("purchasedCircles", JSON.stringify(purchasedCircles));
    }

    // Back to Basic Lobby
    document.getElementById('backButton').addEventListener('click', function() {
        window.location.href = '/Capstone/AdvancedLobby';
    });

    // Hero Shop
    document.getElementById('skinShopButton').addEventListener('click', function() {
        window.location.href = '/Capstone/AskinShop';
    });
});
