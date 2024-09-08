document.addEventListener("DOMContentLoaded", function() {
    const silverCount = document.getElementById("silverCount");
    const goldCount = document.getElementById("goldCount");
    const cardContainer = document.querySelector('.card-container');
    const glowButton = document.getElementById('glowButton');
    const backButton = document.getElementById('backButton');
    const rewardMessage = document.getElementById('rewardMessage');

    let silverCoins = localStorage.getItem("silverCoins") ? parseInt(localStorage.getItem("silverCoins")) : 0;
    let goldCoins = localStorage.getItem("goldCoins") ? parseInt(localStorage.getItem("goldCoins")) : 0;

    // Get the timestamp of the last reward obtained from local storage
    let lastRewardObtained = localStorage.getItem("lastRewardObtained") ? parseInt(localStorage.getItem("lastRewardObtained")) : 0;

    const rewards = [
        { type: 'silverCoin', amount: 100, imageUrl: '100_silver.png' },
        { type: 'silverCoin', amount: 50, imageUrl: '50_silver.png' },
        { type: 'silverCoin', amount: 10, imageUrl: '10_silver.png' },
        { type: 'silverCoin', amount: 30, imageUrl: '30_silver.png' },
        { type: 'goldCoin', amount: 100, imageUrl: '100_gold.png' },
        { type: 'goldCoin', amount: 50, imageUrl: '50_gold.png' },
        { type: 'goldCoin', amount: 10, imageUrl: '10_gold.png' },
        { type: 'goldCoin', amount: 30, imageUrl: '30_gold.png' }
    ];

    function updateCoinCount() {
        silverCount.textContent = silverCoins;
        goldCount.textContent = goldCoins;
        localStorage.setItem("silverCoins", silverCoins);
        localStorage.setItem("goldCoins", goldCoins);
    }

    function shuffle(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    }

    function generateCards() {
        console.log("Generating cards...");
        shuffle(rewards);
        rewards.forEach((reward, index) => {
            const card = document.createElement('div');
            card.classList.add('card');

            const front = document.createElement('div');
            front.classList.add('front');
            front.textContent = "Card";

            const back = document.createElement('div');
            back.classList.add('back');
            back.textContent = `${reward.type === 'silverCoin' ? 'Silver' : 'Gold'}: ${reward.amount}`;

            card.appendChild(front);
            card.appendChild(back);

            card.addEventListener('click', function() {
                const currentTime = new Date();
                const currentHour = currentTime.getHours();

                // Check if the current hour is between 7 am to 7 pm (inclusive)
                if (currentHour >= 7 && currentHour < 19) {
                    // Check if enough time has passed since the last reward obtained
                    const elapsedTime = currentTime.getTime() - lastRewardObtained;
                    const elapsedHours = elapsedTime / (1000 * 60 * 60);
                    
                    if (elapsedHours >= 12) {
                        if (!card.classList.contains('flipped')) {
                            card.classList.add('flipped');

                            if (reward.type === 'silverCoin') {
                                silverCoins += reward.amount;
                            } else {
                                goldCoins += reward.amount;
                            }

                            updateCoinCount();

                            // Disable all other cards
                            const cards = document.querySelectorAll('.card');
                            cards.forEach(card => card.style.pointerEvents = 'none');

                            // Set reward obtained message and disable further card selection
                            rewardMessage.textContent = "Reward already obtained. Comeback again after 12 hours!";
                            glowButton.style.display = 'none';
                            backButton.style.display = 'block';

                            // Store the timestamp when the reward was obtained
                            localStorage.setItem("lastRewardObtained", currentTime.getTime());
                        }
                    } else {
                        // Show message if already obtained a reward within the last 12 hours
                        rewardMessage.textContent = "Reward already obtained. Comeback again after 12 hours!";
                    }
                } else {
                    // Show message if not within 7 am to 7 pm
                    rewardMessage.textContent = "Rewards are only available from 7 am to 7 pm!";
                }
            });

            cardContainer.appendChild(card);
        });
    }

    updateCoinCount();

    // Show cards when the glow button is clicked
    glowButton.addEventListener('click', function() {
        console.log("Glow button clicked!");
        const cardContainer = document.querySelector('.card-container');
        cardContainer.style.opacity = 1;
        glowButton.style.display = 'none';
        generateCards();
    });

    // Back to Basic Lobby
    backButton.addEventListener('click', function() {
        window.location.href = '/Capstone/AdvancedLobby';
    });
});
	
	// JavaScript code to fade out the h2 element when the glowing button is clicked
	const glowButton = document.getElementById('glowButton');
	const h2Element = document.getElementById('title');
	
	
		glowButton.addEventListener('click', function() {
		  h2Element.classList.add('fade-out');
	
		});