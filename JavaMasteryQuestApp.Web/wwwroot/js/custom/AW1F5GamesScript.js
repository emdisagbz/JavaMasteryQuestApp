﻿document.addEventListener("DOMContentLoaded", function () {
    const startButton = document.getElementById("startButton");
    const goButton = document.getElementById("goButton");
    const backButton = document.getElementById("backButton");
    const gameContainer = document.getElementById("gameContainer");
    const questionContainer = document.getElementById("questionContainer");
    const submitAnswerButton = document.getElementById("submitAnswer");
    const goldCount = document.getElementById("goldCount");
    const silverCount = document.getElementById("silverCount");
    const pointCount = document.getElementById("pointCount"); // Element to display points
    const warningScreen = document.getElementById("warningScreen");
    const completionWarning = document.getElementById("completionWarning");
    const LavaPrinceWalk = document.querySelector(".LavaPrince-walk");
    const LavaPrinceIdle = document.querySelector(".LavaPrince-idle");
    const LavaPrinceAttack = document.querySelector(".LavaPrince-attack");
    const SlimeWalk0 = document.querySelector(".Slime-walk0");
    const SlimeWalk1 = document.querySelector(".Slime-walk1");
    const SlimeWalk2 = document.querySelector(".Slime-walk2");
    const SlimeWalk3 = document.querySelector(".Slime-walk3");
    const SlimeWalk4 = document.querySelector(".Slime-walk4");
    const SlimeWalk5 = document.querySelector(".Slime-walk5");
    const SlimeWalk6 = document.querySelector(".Slime-walk6");
    const SlimeWalk7 = document.querySelector(".Slime-walk7");
    const SlimeWalk8 = document.querySelector(".Slime-walk8");
    const SlimeWalk9 = document.querySelector(".Slime-walk9");
    const SlimeWalk10 = document.querySelector(".Slime-walk10");
    const SlimeWalk11 = document.querySelector(".Slime-walk11");
    const SlimeWalk12 = document.querySelector(".Slime-walk12");
    const SlimeWalk13 = document.querySelector(".Slime-walk13");
    const popupContainer = document.getElementById("popupContainer");
    const heartsContainer = document.getElementById("heartsContainer");
    const hintButton = document.getElementById("hintButton");
    const lostPopup = document.getElementById("lostPopup");
    const restartButton = document.getElementById("restartButton");

    const finishButton = document.getElementById("finishButton");
    const finishPopup = document.getElementById("finishPopup");
    const confirmFinishButton = document.getElementById("confirmFinishButton");
    const cancelFinishButton = document.getElementById("cancelFinishButton");


    let currentQuestionIndex = 0;
    let silverCoins = localStorage.getItem("silverCoins") ? parseInt(localStorage.getItem("silverCoins")) : 0;
    let goldCoins = localStorage.getItem("goldCoins") ? parseInt(localStorage.getItem("goldCoins")) : 0;
    let points = localStorage.getItem("points") ? parseInt(localStorage.getItem("points")) : 0; // Initialize points
    let startButtonClicks = 0; // Initialize click counter
    let remainingAttempts = 3; // Initialize attempts
    let currentHintIndex = 0; // Track the current hint index
    let totalHeartsLost = 0; // Initialize total hearts lost
    let totalAttempts = 0; // Initialize total attempts
    let AW1F5totalScore = points; // Initialize total score


    updateCoinAndPointCount();
    updateHearts(); // Initialize hearts display

    const questions = [
        {
            type: "Multiple Choice",
            points: 2,
            question: "What keyword is used to start a conditional statement in Java?",
            choices: [
                "A) for",
                "B) while",
                "C) if",
                "D) switch"
            ],
            answer: "C",
            hints: [
                "Hint 1: It checks whether a condition is true or false before executing a block of code.",
                "Hint 2: It is followed by parentheses containing the condition.",
                "Hint 3: It allows for conditional execution of code based on logical statements."
            ]
        },
        {
            type: "Multiple Choice",
            points: 2,
            question: "Which statement is used to execute some code if a condition is false?",
            choices: [
                "A) else",
                "B) for",
                "C) while",
                "D) break"
            ],
            answer: "A",
            hints: [
                "Hint 1: This statement is optional and follows an if block.",
                "Hint 2: It allows for the execution of code when the if condition is false.",
                "Hint 3: It provides an alternative path of execution in case the condition is not met."
            ]
        },
        {
            type: "Multiple Choice",
            points: 2,
            question: "How do you check multiple conditions in an if statement?",
            choices: [
                "A) Use if multiple times",
                "B) Use && or || operators",
                "C) Use else multiple times",
                "D) Use switch statements"
            ],
            answer: "B",
            hints: [
                "Hint 1: Logical operators are used to combine conditions.",
                "Hint 2: && means 'and' while || means 'or.'",
                "Hint 3: This allows you to check multiple conditions in a single if statement."
            ]
        },
        {
            type: "Identification",
            points: 3,
            question: "The statement used to test a condition in Java.",
            answer: "If statement",
            hints: [
                "Hint 1: It begins with the if keyword.",
                "Hint 2: It evaluates a boolean condition.",
                "Hint 3: If the condition is true, the block of code inside is executed."
            ]
        },
        {
            type: "Identification",
            points: 3,
            question: "The block of code that executes if an if statement's condition is false.",
            answer: "Else statement",
            hints: [
                "Hint 1: It provides an alternative block of code to execute.",
                "Hint 2: It must always follow an if statement.",
                "Hint 3: It does not have a condition of its own, unlike if."
            ]
        },
        {
            type: "Identification",
            points: 3,
            question: "The operators used to combine multiple conditions in a single if statement.",
            answer: "Logical operators",
            hints: [
                "Hint 1: Examples include && and ||.",
                "Hint 2: These operators allow multiple conditions to be checked at once.",
                "Hint 3: They can be used inside the parentheses of an if statement to create complex conditions."
            ]
        },

        {
            type: "Whats the Output",
            points: 3,
            question: "Whats the Output of the Code snippet below?",
            answer: "Greater than 5",
            image: "/image/Custom/AW1F5WTO1.png"
        },
        {
            type: "Whats the Output",
            points: 3,
            question: "Whats the Output of the Code snippet below?",
            answer: "Not greater than 5",
            image: "/image/Custom/AW1F5WTO2.png"
        },
        {
            type: "Whats the Output",
            points: 3,
            question: "Whats the Output of the Code snippet below?",
            answer: "even",
            image: "/image/Custom/AW1F5WTO3.png"
        },
        {
            type: "Whats the Output",
            points: 3,
            question: "Whats the Output of the Code snippet below?",
            answer: "Adult",
            image: "/image/Custom/AW1F5WTO4.png"
        },
        {
            type: "Complete the Code",
            points: 4,
            question: "Supply whats missing the code snippet below",
            answer: "Greater",
            image: "/image/Custom/AW1F5CTC1.png"
        },
        {
            type: "Complete the Code",
            points: 4,
            question: "Supply whats missing the code snippet below",
            answer: "odd",
            image: "/image/Custom/AW1F5CTC2.png"
        },
        {
            type: "Complete the Code",
            points: 4,
            question: "Supply whats missing the code snippet below",
            answer: "Cold",
            image: "/image/Custom/AW1F5CTC3.png"
        },
        {
            type: "Complete the Code",
            points: 4,
            question: "Supply whats missing the code snippet below",
            answer: "B",
            image: "/image/Custom/AW1F5CTC4.png"
        }
    ];

    let timer; // Holds the timer reference
    let timeLeft = 600; // 5 minutes = 300 seconds
    let timerStarted = false; // Track if the timer has started
    const circle = document.querySelector("#timerCircle svg circle");
    const radius = circle.r.baseVal.value;
    const circumference = 2 * Math.PI * radius;

    circle.style.strokeDasharray = circumference;
    circle.style.strokeDashoffset = 0;

    function startTimer() {
        timer = setInterval(function () {
            timeLeft--;
            updateTimerDisplay();
            setProgress((600 - timeLeft) / 600);

            if (timeLeft <= 0) {
                clearInterval(timer);
                disableGame();
            }
        }, 1000);
    }

    function updateTimerDisplay() {
        const minutes = Math.floor(timeLeft / 60);
        const seconds = timeLeft % 60;
        const timerText = document.querySelector("#timerText");
        timerText.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    function setProgress(percent) {
        const offset = circumference * percent; // Now the offset is proportional to the time left
        circle.style.strokeDashoffset = offset;

        // Change color based on percentage
        if (timeLeft <= 10) {
            circle.style.stroke = '#f44336'; // Red for <= 10 seconds
        } else if (percent >= 0.5) {
            circle.style.stroke = '#ffeb3b'; // Yellow for 25% to 50%
        } else {
            circle.style.stroke = '#4caf50'; // Green for 0% to 25%
        }
    }

    function disableGame() {
        const inputs = document.querySelectorAll("input, button, textarea");
        inputs.forEach(input => {
            if (input !== backButton) {
                input.disabled = true; // Disable all inputs except the backButton
            }
        });
        showPopupMessage("Time's up! You can no longer answer the questions.");
        backButton.disabled = false; // Ensure backButton is enabled
    }

    goButton.addEventListener("click", function () {
        if (!timerStarted) {
            startTimer();
            timerStarted = true;
        }
        displayQuestion(); // Assuming this function displays the next question
    });

    function selectRandomQuestions() {
        const shuffledQuestions = questions.slice(0, -3).sort(() => Math.random() - 0.5);

        // Select the first 12 questions from the shuffled array
        const selectedQuestions = shuffledQuestions.slice(0, 12);

        // Add the last three questions back at the end
        return [...selectedQuestions, ...questions.slice(-3)];
    }

    const randomQuestions = selectRandomQuestions();

    function displayQuestion() {
        const currentQuestion = randomQuestions[currentQuestionIndex];
        const questionElement = questionContainer.querySelector("#question");
        const choicesContainer = questionContainer.querySelector("#choices");
        const imageContainer = questionContainer.querySelector("#imageContainer");
        const answerField = questionContainer.querySelector("#answer");
        const answerTextarea = questionContainer.querySelector("#answerTextarea");

        questionElement.textContent = currentQuestion.question;
        choicesContainer.innerHTML = ""; // Clear previous choices

        // Display image if available
        if (currentQuestion.image) {
            imageContainer.innerHTML = `<img src="${currentQuestion.image}" alt="Question Image">`;
        } else {
            imageContainer.innerHTML = ""; // Clear image container if no image
        }

        // Show or hide input fields based on the question type
        if (currentQuestion.type === 'fill_in_the_code' || currentQuestion.type === 'write_the_code') {
            answerField.classList.add("hidden");
            answerTextarea.classList.remove("hidden");
            answerTextarea.value = ""; // Reset text area
        } else {
            answerTextarea.classList.add("hidden");
            answerField.classList.remove("hidden");
            answerField.value = ""; // Reset input field
        }

        if (currentQuestion.choices) {
            currentQuestion.choices.forEach(choice => {
                const choiceElement = document.createElement("div");
                choiceElement.textContent = choice;
                choicesContainer.appendChild(choiceElement);
            });
        }
        currentHintIndex = 0;
    }

    function updateCoinAndPointCount() {
        silverCount.textContent = silverCoins;
        goldCount.textContent = goldCoins;
        pointCount.textContent = points; // Update points display
        localStorage.setItem("silverCoins", silverCoins);
        localStorage.setItem("goldCoins", goldCoins);
        localStorage.setItem("points", points); // Store points
        localStorage.setItem("AW1F5totalScore", points); // Update total score in localStorage
    }

    function updateHearts() {
        heartsContainer.innerHTML = "";
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
        }, 100);
    }

    function showLostPopup() {
        lostPopup.classList.remove("hidden");
    }

    function restartGame() {
        if (timeLeft > 0) { // Ensure the timer hasn't run out
            if (currentQuestionIndex === 14) {
                lostPopup.classList.add("hidden");
                currentQuestionIndex = 14; // Restart at question 14
                goldCoins -= 20;
                updateCoinAndPointCount();
                showPopupMessage("You restarted the Boss' Level. 20 gold coins deducted.");
                remainingAttempts = 3;
                updateHearts();
                displayQuestion();
                gameContainer.classList.remove("hidden");
                startSequence();
            } else {
                console.log("Restart is only allowed at question 14.");
            }
        } else {
            console.log("Cannot restart the game after the timer has ended.");
        }
    }

    restartButton.addEventListener("click", restartGame);


    finishButton.addEventListener("click", function () {
        finishPopup.classList.remove("hidden");
    });

    confirmFinishButton.addEventListener("click", function () {
        window.location.href = '/Capstone/AW1P1Floor';
    });

    cancelFinishButton.addEventListener("click", function () {
        finishPopup.classList.add("hidden");
    });

    function checkAnswer() {
        console.log("checkAnswer() function called");

        // Determine the correct answer element based on question type
        const currentQuestion = randomQuestions[currentQuestionIndex];
        let answerElement;

        if (currentQuestion.type === 'fill_in_the_code' || currentQuestion.type === 'write_the_code') {
            answerElement = questionContainer.querySelector("#answerTextarea");
        } else {
            answerElement = questionContainer.querySelector("#answer");
        }

        if (!answerElement) {
            console.error("Answer element not found");
            return;
        }

        const answer = answerElement.value.trim().replace(/\s+/g, '').toLowerCase();

        if (answer === "") {
            showPopupMessage("Please put an answer");
            return;
        }

        const correctAnswer = currentQuestion.answer.trim().replace(/\s+/g, '').toLowerCase();
        const isChoiceQuestion = !!currentQuestion.choices;

        const answeredQuestions = JSON.parse(localStorage.getItem("answeredQuestions")) || [];

        if (answer === correctAnswer) {
            if (!answeredQuestions.includes(currentQuestionIndex)) {
                answeredQuestions.push(currentQuestionIndex);
            }
            localStorage.setItem("answeredQuestions", JSON.stringify(answeredQuestions));

            silverCoins += 100;

            let pointsEarned = 0;
            if (isChoiceQuestion) {
                pointsEarned = 2;
            } else if (currentQuestion.type === 'fill_in_the_code') {
                pointsEarned = 5;
            } else if (currentQuestion.type === 'write_the_code') {
                pointsEarned = 10;
            } else {
                pointsEarned = 3;
            }

            points += pointsEarned;
            AW1F5totalScore = points;
            updateCoinAndPointCount();
            showPopupMessage(`Correct! You got ${pointsEarned} points and 100 silver coins`);
            gameContainer.classList.add("hidden");

            if (currentQuestionIndex === 0) fadeOutCharacter(SlimeWalk0);
            else if (currentQuestionIndex === 1) fadeOutCharacter(SlimeWalk1);
            else if (currentQuestionIndex === 2) fadeOutCharacter(SlimeWalk2);
            else if (currentQuestionIndex === 3) fadeOutCharacter(SlimeWalk3);
            else if (currentQuestionIndex === 4) fadeOutCharacter(SlimeWalk4);
            else if (currentQuestionIndex === 5) fadeOutCharacter(SlimeWalk5);
            else if (currentQuestionIndex === 6) fadeOutCharacter(SlimeWalk6);
            else if (currentQuestionIndex === 7) fadeOutCharacter(SlimeWalk7);
            else if (currentQuestionIndex === 8) fadeOutCharacter(SlimeWalk8);
            else if (currentQuestionIndex === 9) fadeOutCharacter(SlimeWalk9);
            else if (currentQuestionIndex === 10) fadeOutCharacter(SlimeWalk10);
            else if (currentQuestionIndex === 11) fadeOutCharacter(SlimeWalk11);
            else if (currentQuestionIndex === 12) fadeOutCharacter(SlimeWalk12);
            else if (currentQuestionIndex === 13) fadeOutCharacter(SlimeWalk13);

            currentQuestionIndex++;
            remainingAttempts = 3;
            updateHearts();

            if (currentQuestionIndex < randomQuestions.length) {
                goButton.classList.remove("hidden");
            } else {
                goldCoins += 100;
                updateCoinAndPointCount();
                showPopupMessage("You got 100 gold coins for Completing this Floor!");

                const answeredAllQuestions = JSON.stringify(answeredQuestions.sort()) === JSON.stringify(Array.from({ length: randomQuestions.length }, (_, i) => i).sort());
                console.log("answeredAllQuestions: ", answeredAllQuestions);
                if (answeredAllQuestions) localStorage.setItem("AW1Completed", "true");

                saveTotalStats();
                showCompletionWarning();
                finishButton.classList.remove("hidden");
            }
        } else {
            remainingAttempts--;
            totalHeartsLost++;
            updateHearts();
            if (remainingAttempts > 0) {
                showPopupMessage("Incorrect answer. Try again.");
            } else {
                silverCoins -= 50;
                updateCoinAndPointCount();
                showPopupMessage("You lost all hearts. 50 silver coins deducted.");
                gameContainer.classList.add("hidden");
                if (currentQuestionIndex === 0) fadeOutCharacter(SlimeWalk0);
                else if (currentQuestionIndex === 1) fadeOutCharacter(SlimeWalk1);
                else if (currentQuestionIndex === 2) fadeOutCharacter(SlimeWalk2);
                else if (currentQuestionIndex === 3) fadeOutCharacter(SlimeWalk3);
                else if (currentQuestionIndex === 4) fadeOutCharacter(SlimeWalk4);
                else if (currentQuestionIndex === 5) fadeOutCharacter(SlimeWalk5);
                else if (currentQuestionIndex === 6) fadeOutCharacter(SlimeWalk6);
                else if (currentQuestionIndex === 7) fadeOutCharacter(SlimeWalk7);
                else if (currentQuestionIndex === 8) fadeOutCharacter(SlimeWalk8);
                else if (currentQuestionIndex === 9) fadeOutCharacter(SlimeWalk9);
                else if (currentQuestionIndex === 10) fadeOutCharacter(SlimeWalk10);
                else if (currentQuestionIndex === 11) fadeOutCharacter(SlimeWalk11);
                else if (currentQuestionIndex === 12) fadeOutCharacter(SlimeWalk12);
                else if (currentQuestionIndex === 13) fadeOutCharacter(SlimeWalk13);

                if (currentQuestionIndex === 14) {
                    showLostPopup();
                    return; // Exit the function to avoid further execution
                }

                currentQuestionIndex++;
                remainingAttempts = 3;
                updateHearts();



                if (currentQuestionIndex < randomQuestions.length) {
                    goButton.classList.remove("hidden");
                } else {
                    showCompletionWarning();
                    const answeredAllQuestions = JSON.stringify(answeredQuestions.sort()) === JSON.stringify(Array.from({ length: randomQuestions.length }, (_, i) => i).sort());
                    console.log("answeredAllQuestions: ", answeredAllQuestions);
                    if (answeredAllQuestions) localStorage.setItem("AW1Completed", "true");

                    finishButton.classList.remove("hidden");
                }
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

            land.addEventListener('animationend', function () {
                land.classList.remove('animate');
                animateCharacters();
            }, { once: true });
        }
    }

    function animateCharacters() {
        if (currentQuestionIndex === 0) {
            SlimeWalk0.classList.add("animateSlimeWalk0");
            SlimeWalk0.addEventListener('animationend', function () {
                SlimeWalk0.style.visibility = "visible";
                SlimeWalk0.style.opacity = "1";
                goButton.classList.remove("hidden");
            }, { once: true });
        } else if (currentQuestionIndex === 1) {
            SlimeWalk1.classList.add("animateSlimeWalk1");
            SlimeWalk1.addEventListener('animationend', function () {
                SlimeWalk1.style.visibility = "visible";
                SlimeWalk1.style.opacity = "1";
                goButton.classList.remove("hidden");
            }, { once: true });
        } else if (currentQuestionIndex === 2) {
            SlimeWalk2.classList.add("animateSlimeWalk2");
            SlimeWalk2.addEventListener('animationend', function () {
                SlimeWalk2.style.visibility = "visible";
                SlimeWalk2.style.opacity = "1";
                goButton.classList.remove("hidden");
            }, { once: true });
        } else if (currentQuestionIndex === 3) {
            SlimeWalk3.classList.add("animateSlimeWalk3");
            SlimeWalk3.addEventListener('animationend', function () {
                SlimeWalk3.style.visibility = "visible";
                SlimeWalk3.style.opacity = "1";
                goButton.classList.remove("hidden");
            }, { once: true });
        } else if (currentQuestionIndex === 4) {
            SlimeWalk4.classList.add("animateSlimeWalk4");
            SlimeWalk4.addEventListener('animationend', function () {
                SlimeWalk4.style.visibility = "visible";
                SlimeWalk4.style.opacity = "1";
                goButton.classList.remove("hidden");
            }, { once: true });
        } else if (currentQuestionIndex === 5) {
            SlimeWalk5.classList.add("animateSlimeWalk5");
            SlimeWalk5.addEventListener('animationend', function () {
                SlimeWalk5.style.visibility = "visible";
                SlimeWalk5.style.opacity = "1";
                goButton.classList.remove("hidden");
            }, { once: true });
        } else if (currentQuestionIndex === 6) {
            SlimeWalk6.classList.add("animateSlimeWalk6");
            SlimeWalk6.addEventListener('animationend', function () {
                SlimeWalk6.style.visibility = "visible";
                SlimeWalk6.style.opacity = "1";
                goButton.classList.remove("hidden");
            }, { once: true });
        } else if (currentQuestionIndex === 7) {
            SlimeWalk7.classList.add("animateSlimeWalk7");
            SlimeWalk7.addEventListener('animationend', function () {
                SlimeWalk7.style.visibility = "visible";
                SlimeWalk7.style.opacity = "1";
                goButton.classList.remove("hidden");
            }, { once: true });
        } else if (currentQuestionIndex === 8) {
            SlimeWalk8.classList.add("animateSlimeWalk8");
            SlimeWalk8.addEventListener('animationend', function () {
                SlimeWalk8.style.visibility = "visible";
                SlimeWalk8.style.opacity = "1";
                goButton.classList.remove("hidden");
            }, { once: true });
        } else if (currentQuestionIndex === 9) {
            SlimeWalk9.classList.add("animateSlimeWalk9");
            SlimeWalk9.addEventListener('animationend', function () {
                SlimeWalk9.style.visibility = "visible";
                SlimeWalk9.style.opacity = "1";
                goButton.classList.remove("hidden");
            }, { once: true });
        } else if (currentQuestionIndex === 10) {
            SlimeWalk10.classList.add("animateSlimeWalk10");
            SlimeWalk10.addEventListener('animationend', function () {
                SlimeWalk10.style.visibility = "visible";
                SlimeWalk10.style.opacity = "1";
                goButton.classList.remove("hidden");
            }, { once: true });
        } else if (currentQuestionIndex === 11) {
            SlimeWalk11.classList.add("animateSlimeWalk11");
            SlimeWalk11.addEventListener('animationend', function () {
                SlimeWalk11.style.visibility = "visible";
                SlimeWalk11.style.opacity = "1";
                goButton.classList.remove("hidden");
            }, { once: true });
        } else if (currentQuestionIndex === 12) {
            SlimeWalk12.classList.add("animateSlimeWalk12");
            SlimeWalk12.addEventListener('animationend', function () {
                SlimeWalk12.style.visibility = "visible";
                SlimeWalk12.style.opacity = "1";
                goButton.classList.remove("hidden");
            }, { once: true });
        } else if (currentQuestionIndex === 13) {
            SlimeWalk13.classList.add("animateSlimeWalk13");
            SlimeWalk13.addEventListener('animationend', function () {
                SlimeWalk13.style.visibility = "visible";
                SlimeWalk13.style.opacity = "1";
                goButton.classList.remove("hidden");
            }, { once: true });
        } else if (currentQuestionIndex === 14) {
            showWarningWithGlitters();
        }
    }

    function showWarningWithGlitters() {
        createGlitters();
        warningScreen.style.visibility = "visible";
        warningScreen.style.opacity = "1";
        setTimeout(function () {
            warningScreen.style.visibility = "hidden";
            warningScreen.style.opacity = "0";
            LavaPrinceWalk.classList.add("animateWalk1");
            LavaPrinceWalk.style.visibility = "visible";
            LavaPrinceWalk.style.opacity = "1";

            LavaPrinceWalk.addEventListener('animationend', function () {
                console.log("Walk animation ended");
                LavaPrinceWalk.style.visibility = "hidden";
                LavaPrinceWalk.style.opacity = "0";
                LavaPrinceIdle.classList.add("animateIdle1");
                LavaPrinceIdle.style.visibility = "visible";
                LavaPrinceIdle.style.opacity = "1";

                LavaPrinceIdle.addEventListener('animationend', function () {
                    console.log("Idle animation ended");
                    LavaPrinceIdle.style.visibility = "hidden";
                    LavaPrinceIdle.style.opacity = "0";
                    LavaPrinceAttack.classList.add("animateAttack1");
                    LavaPrinceAttack.style.visibility = "visible";
                    LavaPrinceAttack.style.opacity = "1";

                    // Show the goButton after LavaPrinceIdle animation ends
                    goButton.classList.remove("hidden");
                }, { once: true });
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

        AW1F5totalScore = localStorage.getItem("AW1F5totalScore") ? parseInt(localStorage.getItem("AW1F5totalScore")) : 0;

        // Display completion message
        completionWarning.style.visibility = "visible";
        completionWarning.style.opacity = "1";
        setTimeout(() => {
            completionWarning.style.visibility = "hidden";
            completionWarning.style.opacity = "0";
        }, 5000);
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
                    updateCoinAndPointCount();
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

    function saveTotalStats() {
        totalAttempts = totalHeartsLost; // Record the total attempts as hearts lost
        AW1F5totalScore = points; // Record the total score

        localStorage.setItem("totalAttempts", totalAttempts);
        localStorage.setItem("AW1F5totalScore", AW1F5totalScore);
    }

    startButton.addEventListener("click", function () {
        startSequence();
    });

    goButton.addEventListener("click", function () {
        gameContainer.classList.remove("hidden");
        goButton.classList.add("hidden");
        displayQuestion();
    });

    backButton.addEventListener("click", function () {
        window.location.href = '/Capstone/AW1P1Floor';
    });

    submitAnswerButton.addEventListener("click", function () {
        checkAnswer();
    });

    hintButton.addEventListener("click", function () {
        showHint();
    });

    document.getElementById('bookModule').addEventListener('click', function (event) {
        console.log('bookModule button clicked');

        const slidingDiv = document.getElementById('slidingDiv');
        slidingDiv.classList.toggle('visible');
        slidingDiv.classList.toggle('hidden');

        const moduleContent = document.getElementById('moduleContent');
        const preloadIframe = document.getElementById('preloadIframe');
        moduleContent.innerHTML = ''; // Clear any existing content
        moduleContent.appendChild(preloadIframe); // Move the preloaded iframe to moduleContent
        preloadIframe.style.display = 'block'; // Make sure the iframe is visible
        console.log('Preloaded PDF iframe added to moduleContent');

        const windowWidth = window.innerWidth;
        const slidingDivWidth = slidingDiv.offsetWidth;
        const leftPosition = (windowWidth - slidingDivWidth) / 2;

        slidingDiv.style.left = leftPosition + 'px';
        slidingDiv.style.height = '90vh';

        event.stopPropagation(); // Prevent the click event from propagating to the document
    });

    document.addEventListener('click', function (event) {
        const slidingDiv = document.getElementById('slidingDiv');
        if (!slidingDiv.contains(event.target) && event.target.id !== 'bookModule') {
            slidingDiv.classList.add('hidden');
            slidingDiv.classList.remove('visible');
            const moduleContent = document.getElementById('moduleContent');
            const preloadIframe = document.getElementById('preloadIframe');
            // Move the iframe back to its hidden container to keep it preloaded
            preloadIframe.style.display = 'none';
            document.body.appendChild(preloadIframe);
            console.log('Sliding div hidden and moduleContent cleared');
        }
    });

});

