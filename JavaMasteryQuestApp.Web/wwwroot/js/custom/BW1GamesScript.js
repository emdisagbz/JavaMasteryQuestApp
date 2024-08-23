document.addEventListener("DOMContentLoaded", function() {
    const startButton = document.getElementById("startButton");
    const goButton = document.getElementById("goButton");
    const backButton = document.getElementById("backButton");
    const gameContainer = document.getElementById("gameContainer");
    const questionContainer = document.getElementById("questionContainer");
    const submitAnswerButton = document.getElementById("submitAnswer");
    const goldCount = document.getElementById("goldCount");
    const silverCount = document.getElementById("silverCount");
    const warningScreen = document.getElementById("warningScreen");
    const completionWarning = document.getElementById("completionWarning");
    const LavaPrinceWalk = document.querySelector(".LavaPrince-walk");
    const LavaPrinceIdle = document.querySelector(".LavaPrince-idle");
    const LavaPrinceAttack = document.querySelector(".LavaPrince-attack");
    const SlimeWalk0 = document.querySelector(".Slime-walk0");
    const SlimeWalk1 = document.querySelector(".Slime-walk1");
    const SlimeWalk2 = document.querySelector(".Slime-walk2");
    const SlimeWalk3 = document.querySelector(".Slime-walk3");
    const popupContainer = document.getElementById("popupContainer");
    const heartsContainer = document.getElementById("heartsContainer");
    const hintButton = document.getElementById("hintButton");
	
    let currentQuestionIndex = 0;
    let silverCoins = localStorage.getItem("silverCoins") ? parseInt(localStorage.getItem("silverCoins")) : 0;
    let goldCoins = localStorage.getItem("goldCoins") ? parseInt(localStorage.getItem("goldCoins")) : 0;
    let startButtonClicks = 0; // Initialize click counter
    let remainingAttempts = 3; // Initialize attempts
    let currentHintIndex = 0; // Track the current hint index

    updateCoinCount();
    updateHearts(); // Initialize hearts display

    const questions = [
        { question: "The word 'poly' means many and 'morphs' means ____", answer: "forms", hints: ["Hint 1: It's related to shapes.", "Hint 2: Think about transformation.", "Hint 3: It's a synonym for shapes."] },
        { question: "To inherit from a class, use a ____ keyword", answer: "extends", hints: ["Hint 1: It's a keyword in Java.", "Hint 2: It's used to inherit properties.", "Hint 3: Starts with 'e'."] },
        { question: "A ____ is a collection of statements that are grouped together to perform an operation", answer: "method", hints: ["Hint 1: Common in object-oriented programming.", "Hint 2: It's like a function.", "Hint 3: Starts with 'm'."] },
        { question: "OOP stands for ____", answer: "Object-Oriented Programming", hints: ["Hint 1: It's a paradigm in programming.", "Hint 2: It's about objects and classes.", "Hint 3: Abbreviation of a programming concept."] },
        { question: "It is used to store a sequence of characters in most programming languages", answer: "string", hints: ["Hint 1: Think of text.", "Hint 2: Sequence of characters.", "Hint 3: Starts with 's'."] },
        { question: "It is a data type that is used to represent whole numbers without a fractional part", answer: "int", hints: ["Hint 1: Common in many programming languages.", "Hint 2: It's an abbreviation.", "Hint 3: Short for integer."] },
        { question: "A data type that can only store true or false", answer: "boolean", hints: ["Hint 1: It's a binary state.", "Hint 2: True or false.", "Hint 3: Starts with 'b'."] },
        { question: "A data type that can store a single character only", answer: "char", hints: ["Hint 1: It's short for character.", "Hint 2: Stores only one letter.", "Hint 3: Starts with 'c'."] },
        { question: "What is the process called to connect two string words", answer: "concatenation", hints: ["Hint 1: Joining strings.", "Hint 2: Think of '+'.", "Hint 3: Starts with 'c'."] },
        { question: "It is an access modifier that can be used to all", answer: "public", hints: ["Hint 1: It's about access control.", "Hint 2: Opposite of private.", "Hint 3: Starts with 'p'."] }
    ];

    function selectRandomQuestions() {
        // Shuffle questions
        questions.sort(() => Math.random() - 0.5);
        // Select the first 5 questions after shuffling
        return questions.slice(0, 5);
    }

    const randomQuestions = selectRandomQuestions();

    function displayQuestion() {
        const currentQuestion = randomQuestions[currentQuestionIndex];
        questionContainer.querySelector("#question").textContent = currentQuestion.question;
        questionContainer.querySelector("#answer").value = "";
        currentHintIndex = 0; // Reset hint index for each new question
    }

    function updateCoinCount() {
        silverCount.textContent = silverCoins;
        goldCount.textContent = goldCoins;
        localStorage.setItem("silverCoins", silverCoins);
        localStorage.setItem("goldCoins", goldCoins);
    }

    function updateHearts() {
        heartsContainer.innerHTML = ""; // Clear previous hearts
        for (let i = 0; i < remainingAttempts; i++) {
            const heart = document.createElement("span");
            heart.className = "heart";
            heart.textContent = "❤️";
            heartsContainer.appendChild(heart);
        }
    }

    function showPopupMessage(message) {
        const popup = document.createElement("div");
        popup.className = "popup-message";
        popup.textContent = message;
        popupContainer.appendChild(popup);

        setTimeout(() => {
            popup.remove();
        }, 4000);
    }

    function fadeOutCharacter(characterElement) {
        let opacity = 1;
        const fadeEffect = setInterval(() => {
            if (opacity <= 0.1) {
                clearInterval(fadeEffect);
                characterElement.style.opacity = 0;
                characterElement.classList.add('hidden');
            } else {
                opacity -= 0.1;
                characterElement.style.opacity = opacity;
            }
        }, 100); // Adjust the interval for smoother or faster fading
    }

    function checkAnswer() {
    console.log("checkAnswer() function called");
    const answer = questionContainer.querySelector("#answer").value.trim().toLowerCase();
    
    if (answer === "") {
        showPopupMessage("Please put an answer");
        return; // Exit the function early
    }

    if (answer === randomQuestions[currentQuestionIndex].answer.toLowerCase()) {
        // Store the index of the answered question
        const answeredQuestions = JSON.parse(localStorage.getItem("answeredQuestions")) || [];
        answeredQuestions.push(currentQuestionIndex);
        localStorage.setItem("answeredQuestions", JSON.stringify(answeredQuestions));

        silverCoins += 100;
        updateCoinCount();
        showPopupMessage("+100 silver coin");
        gameContainer.classList.add("hidden");

        // Fade out the current character and prepare for the next question
        if (currentQuestionIndex === 0) {
            fadeOutCharacter(SlimeWalk0);
        } else if (currentQuestionIndex === 1) {
            fadeOutCharacter(SlimeWalk1);
        } else if (currentQuestionIndex === 2) {
            fadeOutCharacter(SlimeWalk2);
        } else if (currentQuestionIndex === 3) {
            fadeOutCharacter(SlimeWalk3);
        }

        currentQuestionIndex++;
        updateHearts();

        if (currentQuestionIndex < randomQuestions.length) {
            goButton.classList.remove("hidden");
        } else {
            goldCoins += 100;
            updateCoinCount();
            showPopupMessage("+100 gold coin");

            // Update completion status for BW1 games
            const answeredAllQuestions = JSON.stringify(answeredQuestions.sort()) === JSON.stringify(Array.from({ length: randomQuestions.length }, (_, i) => i).sort());
            if (answeredAllQuestions) {
                localStorage.setItem("BW1Completed", "true");
            }

            // Show completion warning
            showCompletionWarning();
        }
    } else {
        remainingAttempts--;
        updateHearts();
        if (remainingAttempts > 0) {
            showPopupMessage("Incorrect answer. Try again.");
        } else {
            showPopupMessage("You Lose!");
            setTimeout(() => {
                window.location.href = "BasicLobby.html";
            }, 2000); // Redirect after 2 seconds
        }
    }
        goButton.classList.add("hidden");
   }

    const startButtonClicked = new Array(randomQuestions.length).fill(false);

function startSequence() {
    // Check if the start button has not been clicked for the current question index
    if (!startButtonClicked[currentQuestionIndex]) {
        startButtonClicked[currentQuestionIndex] = true; // Mark the start button as clicked for the current question index

        const land = document.querySelector('.land');
        land.classList.add('animate');

        land.addEventListener('animationend', function() {
            land.classList.remove('animate');
            animateCharacters();
        }, { once: true });
    }
}

    function animateCharacters() {
        if (currentQuestionIndex === 0) {
            SlimeWalk0.classList.add("animateSlimeWalk0");
            SlimeWalk0.addEventListener('animationend', function() {
                SlimeWalk0.style.visibility = "visible";
                SlimeWalk0.style.opacity = "1";
                goButton.classList.remove("hidden");
            }, { once: true });
        } else if (currentQuestionIndex === 1) {
            SlimeWalk1.classList.add("animateSlimeWalk1");
            SlimeWalk1.addEventListener('animationend', function() {
                SlimeWalk1.style.visibility = "visible";
                SlimeWalk1.style.opacity = "1";
                goButton.classList.remove("hidden");
            }, { once: true });
        } else if (currentQuestionIndex === 2) {
            SlimeWalk2.classList.add("animateSlimeWalk2");
            SlimeWalk2.addEventListener('animationend', function() {
                SlimeWalk2.style.visibility = "visible";
                SlimeWalk2.style.opacity = "1";
                goButton.classList.remove("hidden");
            }, { once: true });
        } else if (currentQuestionIndex === 3) {
            SlimeWalk3.classList.add("animateSlimeWalk3");
            SlimeWalk3.addEventListener('animationend', function() {
                SlimeWalk3.style.visibility = "visible";
                SlimeWalk3.style.opacity = "1";
                goButton.classList.remove("hidden");
            }, { once: true });
        } else if (currentQuestionIndex === 4) {
            showWarningWithGlitters();
        }
    }

    function showWarningWithGlitters() {
        createGlitters();
        warningScreen.style.visibility = "visible";
        warningScreen.style.opacity = "1";
        setTimeout(function() {
            warningScreen.style.visibility = "hidden";
            warningScreen.style.opacity = "0";
            LavaPrinceWalk.classList.add("animateWalk1");
            LavaPrinceWalk.style.visibility = "visible";
            LavaPrinceWalk.style.opacity = "1";

            LavaPrinceWalk.addEventListener('animationend', function() {
                console.log("Walk animation ended");
                LavaPrinceIdle.classList.add("animateIdle1");
                LavaPrinceIdle.style.visibility = "visible";
                LavaPrinceIdle.style.opacity = "1";

                LavaPrinceIdle.addEventListener('animationend', function() {
                    console.log("Idle animation ended");
                    LavaPrinceIdle.style.visibility = "hidden";
                    LavaPrinceIdle.style.opacity = "0";
                    LavaPrinceAttack.classList.add("animateAttack1");
                    LavaPrinceAttack.style.visibility = "visible";
                    LavaPrinceAttack.style.opacity = "1";
                }, { once: true });
                goButton.classList.remove("hidden");
            }, { once: true });
        }, 3000);
    }

    function createGlitters() {
        var glittersContainer = document.querySelector('.glitters');
        glittersContainer.innerHTML = ''; // Clear previous glitters
        for (var i = 0; i < 50; i++) {
            var glitter = document.createElement('div');
            glitter.classList.add('glitter');
            glitter.style.top = Math.random() * 100 + '%';
            glitter.style.left = Math.random() * 100 + '%';
            glitter.style.animationDelay = Math.random() * 2 + 's';
            glittersContainer.appendChild(glitter);
        }
    }

    function showCompletionWarning() {
        console.log("Showing completion message with glitter effect");
        createGlitters();
        completionWarning.classList.remove('hidden');
        completionWarning.classList.add('visible');
        setTimeout(function() {
            completionWarning.classList.remove('visible');
            completionWarning.classList.add('hidden');
        }, 10000);
    }

    function showHint() {
        const currentQuestion = randomQuestions[currentQuestionIndex];
        if (currentHintIndex < currentQuestion.hints.length) {
            if (currentHintIndex === 0) {
                showPopupMessage(currentQuestion.hints[currentHintIndex]);
                currentHintIndex++;
            } else if (currentHintIndex > 0 && currentHintIndex < 3) {
                if (silverCoins >= 100) {
                    silverCoins -= 100;
                    updateCoinCount();
                    showPopupMessage(currentQuestion.hints[currentHintIndex]);
                    currentHintIndex++;
                } else {
                    showPopupMessage("Not enough silver coins for a hint.");
                }
            }
        } else {
            showPopupMessage("No more hints available.");
        }
    }

    startButton.addEventListener("click", function() {
        startSequence();
    });

    goButton.addEventListener("click", function() {
        gameContainer.classList.remove("hidden");
        goButton.classList.add("hidden");
        displayQuestion();
    });

    backButton.addEventListener("click", function() {
        window.location.href = "BasicLobby.html";
    });

    submitAnswerButton.addEventListener("click", function() {
        checkAnswer();
    });

    hintButton.addEventListener("click", function() {
        showHint();
    });
	
	document.getElementById('bookModule').addEventListener('click', function(event) {
    const slidingDiv = document.getElementById('slidingDiv');
    slidingDiv.classList.toggle('visible');
    slidingDiv.classList.toggle('hidden');

    // Toggle sliding-in class to trigger sliding animation
    slidingDiv.classList.toggle('sliding-in');

    // Calculate the left position to center the slidingDiv horizontally
    const windowWidth = window.innerWidth;
    const slidingDivWidth = slidingDiv.offsetWidth;
    const leftPosition = (windowWidth - slidingDivWidth) / 2;

    slidingDiv.style.left = leftPosition + 'px';

    // Set the height of the slidingDiv to 90% of the viewport height
    slidingDiv.style.height = '90vh';

    event.stopPropagation(); // Prevent the click event from propagating to the document
});

document.addEventListener('click', function(event) {
    const slidingDiv = document.getElementById('slidingDiv');
    if (!slidingDiv.contains(event.target)) {
        // Add sliding-out class to trigger sliding animation when hiding
        slidingDiv.classList.add('sliding-out');
        slidingDiv.classList.remove('sliding-in');
        setTimeout(() => {
            slidingDiv.classList.add('hidden');
            slidingDiv.classList.remove('visible', 'sliding-out');
        }, 500); // Wait for the animation to finish before hiding
    }
});
	
});