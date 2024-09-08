document.addEventListener("DOMContentLoaded", function() {
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
    const IceQueenWalk = document.querySelector(".IceQueen-walk");
    const IceQueenIdle = document.querySelector(".IceQueen-idle");
    const IceQueenAttack = document.querySelector(".IceQueen-attack");
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

    const GRangerWalk = document.querySelector(".GRanger-walk");
    const GRangerIdle = document.querySelector(".GRanger-idle");
    const GRangerAttack = document.querySelector(".GRanger-attack");


	
    let currentQuestionIndex = 0;
    let silverCoins = localStorage.getItem("silverCoins") ? parseInt(localStorage.getItem("silverCoins")) : 0;
    let goldCoins = localStorage.getItem("goldCoins") ? parseInt(localStorage.getItem("goldCoins")) : 0;
    let points = localStorage.getItem("points") ? parseInt(localStorage.getItem("points")) : 0; // Initialize points
    let startButtonClicks = 0; // Initialize click counter
    let remainingAttempts = 3; // Initialize attempts
    let currentHintIndex = 0; // Track the current hint index
	let totalHeartsLost = 0; // Initialize total hearts lost
	let totalAttempts = 0; // Initialize total attempts
	let BW2F2totalScore = points; // Initialize total score

	
    updateCoinAndPointCount();
    updateHearts(); // Initialize hearts display
    // Initially display the idle animation BEFORE QUESTIONS
    GRangerIdle.style.visibility = "visible";
    GRangerIdle.style.opacity = "1";
    const questions = [
        {
            type: "Identification",
            points: 3,
            question: "Name the control structure used for making selections in Java based on conditions.",
            answer: "if...else",
            hints: [
                "Hint 1: It involves decision-making.",
                "Hint 2: It can handle both single and multiple conditions.",
                "Hint 3: The structure is `if...else`."
            ],

        },

        {
            type: "Identification",
            points: 3,
            question: "What keyword is used in Java to define a switch structure?",
            answer: "switch",
            hints: [
                "Hint 1: It is used for multi-way branching.",
                "Hint 2: It selects one of many possible cases.",
                "Hint 3: The keyword is `switch`."
            ],

        },

        {
            type: "Identification",
            points: 3,
            question: "In a switch structure, what keyword is used to exit the switch statement immediately?",
            answer: "break",
            hints: [
                "Hint 1: It prevents the execution of subsequent cases.",
                "Hint 2: It’s often placed at the end of each case block.",
                "Hint 3: The keyword is `break`."
            ],

        },

        {
            type: "Identification",
            points: 3,
            question: "Which reserved word is used in Java to provide a default case in a switch structure?",
            answer: "default",
            hints: [
                "Hint 1: It handles cases that don't match any specific value.",
                "Hint 2: It acts as a catch-all case.",
                "Hint 3: The reserved word is `default`."
            ],

        },

        {
            type: "Multiple Choice",
            points: 2,
            question: "What are the three ways a computer can process a program?",
            choices: [
                "A. Selection, Loop, Switch",
                "B. Sequence, Selection, Repetition",
                "C. Sequence, Branch, Iteration",
                "D. Selection, Iteration, Switch"
            ],
            answer: "B",
            hints: [
                "Hint 1: One of them is Sequence.",
                "Hint 2: It involves branching and looping.",
                "Hint 3: The three ways are Sequence, Selection, and Repetition.."
            ]
        },

        {
            type: "Multiple Choice",
            points: 2,
            question: "Which control structure in Java is used for one-way selection?",
            choices: [
                "A. if...else",
                "B. switch",
                "C. if",
                "D. for"
            ],
            answer: "C",
            hints: [
                "Hint 1: It is the simplest form of decision-making.",
                "Hint 2: It only executes a block if the condition is true.",
                "Hint 3: The control structure is `if`."
            ]
        },

        {
            type: "Multiple Choice",
            points: 2,
            question: "What is the syntax of a two-way selection in Java?",
            choices: [
                "A. if (expression) { statements; }",
                "B. if (expression) { statements; } else { statements; }",
                "C. switch (expression) { case value: statements; break; }",
                "D. while (expression) { statements; }"
            ],
            answer: "B",
            hints: [
                "Hint 1: It involves two blocks of code.",
                "Hint 2: It uses `else` to specify an alternative block.",
                "Hint 3: The syntax is `if (expression) { statements; } else { statements; }`."
            ]
        },

        {
            type: "Multiple Choice",
            points: 2,
            question: "Which keyword is used to create a block of statements in Java?",
            choices: [
                "A. do",
                "B. loop",
                "C. case",
                "D. {}"
            ],
            answer: "D",
            hints: [
                "Hint 1: It’s not a word but a symbol.",
                "Hint 2: It is used to group multiple statements.",
                "Hint 3: The symbols are `{}`."
            ]
        },

        {
            type: "Multiple Choice",
            points: 2,
            question: "What is the purpose of the break statement in a switch structure?",
            choices: [
                "A. To continue the next iteration of the loop",
                "B. To exit the switch structure immediately",
                "C. To evaluate the next case",
                "D. To skip to the default case"
            ],
            answer: "B",
            hints: [
                "Hint 1: It prevents the fall-through behavior.",
                "Hint 2: It exits the switch case immediately.",
                "Hint 3: The purpose is to exit the switch structure."
            ]
        },

        {
            type: "Multiple Choice",
            points: 2,
            question: "How does Java associate an else with an if in nested if statements?",
            choices: [
                "A. The else is paired with the nearest preceding if",
                "B. The else is paired with the first if in the block",
                "C. The else is paired with the last if in the block",
                "D. The else is paired randomly with any if"
            ],
            answer: "A",
            hints: [
                "Hint 1: It pairs the else with the nearest unpaired if.",
                "Hint 2: It follows a specific order of evaluation.",
                "Hint 3: The else is paired with the nearest preceding if."
            ]
        },

        {
            type: "Multiple Choice",
            points: 2,
            question: "What is short-circuit evaluation in Java?",
            choices: [
                "A. Evaluating expressions from right to left",
                "B. Evaluating expressions based on the operator precedence",
                "C. Evaluating logical expressions from left to right and stopping as soon as the result is determined",
                "D. Evaluating all expressions regardless of their values"
            ],
            answer: "C",
            hints: [
                "Hint 1: It involves logical operators.",
                "Hint 2: It stops evaluating as soon as the result is known.",
                "Hint 3: It evaluates expressions from left to right and stops when the result is determined."
            ]
        },

        {
            type: "Multiple Choice",
            points: 2,
            question: "Which of the following is a valid switch expression in Java?",
            choices: [
                "A. switch (expression) { case value: statements; break; }",
                "B. switch (expression) { if (value) { statements; break; } }",
                "C. switch (expression) { while (value) { statements; break; } }",
                "D.  switch (expression) { for (value) { statements; break; } }"
            ],
            answer: "A",
            hints: [
                "Hint 1: It uses case labels to define branches.",
                "Hint 2: It includes the keyword `case`.",
                "Hint 3: he valid expression is `switch (expression) { case value: statements; break; }`."
            ]
        },

        {
            type: "Multiple Choice",
            points: 2,
            question: "Which data types are allowed for the switch expression in Java?",
            choices: [
                "A. int, byte, short, char",
                "B. int, float, double, char",
                "C. int, long, short, boolean",
                "D. int, string, boolean, char"
            ],
            answer: "A",
            hints: [
                "Hint 1: They must be integral types or characters.",
                "Hint 2: They include `int`, `byte`, `short`, and `char`.",
                "Hint 3: The allowed types are `int`, `byte`, `short`, and `char`."
            ]
        },

        {
            type: "Multiple Choice",
            points: 2,
            question: "What will be the output of the following code if ‘grade = 'B'?’",
            choices: [
                "A. The grade is A",
                "B. The grade is B",
                "C. The grade is C",
                "D. The grade is invalid"
            ],
            answer: "B",
            hints: [
                "Hint 1: It evaluates a character value.",
                "Hint 2: The output corresponds to the matching case.",
                "Hint 3: The output is `The grade is B`."
            ],
            image: "/image/Custom/BW2P2F2PIC.jpg"
        },

        {
            type: "Identification",
            points: 3,
            question: "What is the process called when the computer evaluates a logical expression from left to right and stops as soon as the value of the expression is determined?",
            answer: "Short-circuit evaluation",
            hints: [
                "Hint 1: It optimizes logical operations.",
                "Hint 2: It stops evaluating once the result is known.",
                "Hint 3: The process is called short-circuit evaluation."
            ]
        }


];
    function stopTimer() {
        clearInterval(timer);
    }

let timer; // Holds the timer reference
let timeLeft = 600; // 5 minutes = 300 seconds
let timerStarted = false; // Track if the timer has started
const circle = document.querySelector("#timerCircle svg circle");
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;

circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = 0;

function startTimer() {
    timer = setInterval(function() {
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
        // Apply a grayscale filter to the entire document body
        document.body.style.filter = "grayscale(100%)";

        // Select all inputs, buttons, and textarea elements
        const inputs = document.querySelectorAll("input, button, textarea");

        inputs.forEach(input => {
            if (input !== backButton) {
                input.disabled = true; // Disable all inputs except the backButton
                input.style.backgroundColor = "red"; // Turn the button background color to red
            }
        });

        // Remove grayscale filter from the backButton
        backButton.style.filter = "none";
        backButton.style.backgroundColor = ""; // Optional: Reset any background color changes to the backButton

        showPopupMessage("Time's up! You can no longer answer the questions.");

        // Ensure backButton is enabled
        backButton.disabled = false;
    }

    goButton.addEventListener("click", function () {
        if (!timerStarted) {
            startTimer();
            timerStarted = true;
        }
        // Hide idle and show attack animation
        const GRangerIdle = document.querySelector(".GRanger-idle");
        const GRangerAttack = document.querySelector(".GRanger-attack");

        GRangerIdle.style.visibility = "hidden";
        GRangerIdle.style.opacity = "0";

        GRangerAttack.style.visibility = "visible";
        GRangerAttack.style.opacity = "1";

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
    localStorage.setItem("BW2F2totalScore", points); // Update total score in localStorage
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

	
	finishButton.addEventListener("click", function() {
        finishPopup.classList.remove("hidden");
    });

    confirmFinishButton.addEventListener("click", function() {
        window.location.href = '/Capstone/BW2P2Floor';
    });

    cancelFinishButton.addEventListener("click", function() {
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
        BW2F2totalScore = points;
        updateCoinAndPointCount();
        showPopupMessage(`Correct! You got ${pointsEarned} points and 100 silver coins`);
        gameContainer.classList.add("hidden");
        GRangerAttack.style.visibility = "hidden";
        GRangerAttack.style.opacity = "0";
        GRangerIdle.style.visibility = "visible";
        GRangerIdle.style.opacity = "1";

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
            GRangerAttack.style.visibility = "hidden";
            GRangerAttack.style.opacity = "0";
            GRangerIdle.style.visibility = "visible";
            GRangerIdle.style.opacity = "1";

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
                GRangerAttack.style.visibility = "hidden";
                GRangerAttack.style.opacity = "0";
                GRangerIdle.style.visibility = "visible";
                GRangerIdle.style.opacity = "1";
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

            const GRangerWalk = document.querySelector('.GRanger-walk');
            const land = document.querySelector('.land');


            // Hide idle and show walk animation
            GRangerIdle.style.visibility = "hidden";
            GRangerIdle.style.opacity = "0";
            GRangerWalk.style.visibility = "visible";
            GRangerWalk.style.opacity = "1";
            GRangerWalk.classList.add('character-walk');
            land.classList.add('animate');

            // When the land animation ends, switch the walk back to idle
            land.addEventListener('animationend', function () {
                land.classList.remove('animate');
                GRangerWalk.style.visibility = "hidden";
                GRangerWalk.style.opacity = "0";
                GRangerIdle.style.visibility = "visible";
                GRangerIdle.style.opacity = "1";

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
            SlimeWalk4.classList.add("animateSlimeWalk4");
            SlimeWalk4.addEventListener('animationend', function() {
                SlimeWalk4.style.visibility = "visible";
                SlimeWalk4.style.opacity = "1";
                goButton.classList.remove("hidden");
            }, { once: true });
        } else if (currentQuestionIndex === 5) {
            SlimeWalk5.classList.add("animateSlimeWalk5");
            SlimeWalk5.addEventListener('animationend', function() {
                SlimeWalk5.style.visibility = "visible";
                SlimeWalk5.style.opacity = "1";
                goButton.classList.remove("hidden");
            }, { once: true });
        } else if (currentQuestionIndex === 6) {
            SlimeWalk6.classList.add("animateSlimeWalk6");
            SlimeWalk6.addEventListener('animationend', function() {
                SlimeWalk6.style.visibility = "visible";
                SlimeWalk6.style.opacity = "1";
                goButton.classList.remove("hidden");
            }, { once: true });
        } else if (currentQuestionIndex === 7) {
            SlimeWalk7.classList.add("animateSlimeWalk7");
            SlimeWalk7.addEventListener('animationend', function() {
                SlimeWalk7.style.visibility = "visible";
                SlimeWalk7.style.opacity = "1";
                goButton.classList.remove("hidden");
            }, { once: true });
        } else if (currentQuestionIndex === 8) {
            SlimeWalk8.classList.add("animateSlimeWalk8");
            SlimeWalk8.addEventListener('animationend', function() {
                SlimeWalk8.style.visibility = "visible";
                SlimeWalk8.style.opacity = "1";
                goButton.classList.remove("hidden");
            }, { once: true });
        } else if (currentQuestionIndex === 9) {
            SlimeWalk9.classList.add("animateSlimeWalk9");
            SlimeWalk9.addEventListener('animationend', function() {
                SlimeWalk9.style.visibility = "visible";
                SlimeWalk9.style.opacity = "1";
                goButton.classList.remove("hidden");
            }, { once: true });
        } else if (currentQuestionIndex === 10) {
            SlimeWalk10.classList.add("animateSlimeWalk10");
            SlimeWalk10.addEventListener('animationend', function() {
                SlimeWalk10.style.visibility = "visible";
                SlimeWalk10.style.opacity = "1";
                goButton.classList.remove("hidden");
            }, { once: true });
        } else if (currentQuestionIndex === 11) {
            SlimeWalk11.classList.add("animateSlimeWalk11");
            SlimeWalk11.addEventListener('animationend', function() {
                SlimeWalk11.style.visibility = "visible";
                SlimeWalk11.style.opacity = "1";
                goButton.classList.remove("hidden");
            }, { once: true });
        } else if (currentQuestionIndex === 12) {
            SlimeWalk12.classList.add("animateSlimeWalk12");
            SlimeWalk12.addEventListener('animationend', function() {
                SlimeWalk12.style.visibility = "visible";
                SlimeWalk12.style.opacity = "1";
                goButton.classList.remove("hidden");
            }, { once: true });
        } else if (currentQuestionIndex === 13) {
            SlimeWalk13.classList.add("animateSlimeWalk13");
            SlimeWalk13.addEventListener('animationend', function() {
                SlimeWalk13.style.visibility = "visible";
                SlimeWalk13.style.opacity = "1";
                goButton.classList.remove("hidden");
            }, { once: true });
        }else if (currentQuestionIndex === 14) {
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
            IceQueenWalk.classList.add("animateWalk1");
            IceQueenWalk.style.visibility = "visible";
            IceQueenWalk.style.opacity = "1";

            IceQueenWalk.addEventListener('animationend', function() {
                console.log("Walk animation ended");
				IceQueenWalk.style.visibility = "hidden";
                IceQueenWalk.style.opacity = "0";
                IceQueenIdle.classList.add("animateIdle1");
                IceQueenIdle.style.visibility = "visible";
                IceQueenIdle.style.opacity = "1";

                IceQueenIdle.addEventListener('animationend', function() {
                    console.log("Idle animation ended");
                    IceQueenIdle.style.visibility = "hidden";
                    IceQueenIdle.style.opacity = "0";
                    IceQueenAttack.classList.add("animateAttack1");
                    IceQueenAttack.style.visibility = "visible";
                    IceQueenAttack.style.opacity = "1";

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

    BW2F2totalScore = localStorage.getItem("BW2F2totalScore") ? parseInt(localStorage.getItem("BW2F2totalScore")) : 0;

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
		BW2F2totalScore = points; // Record the total score

		localStorage.setItem("totalAttempts", totalAttempts);
		localStorage.setItem("BW2F2totalScore", BW2F2totalScore);
	}

    startButton.addEventListener("click", function() {
        startSequence();
        bookModule.disabled = true;
    });

    goButton.addEventListener("click", function() {
        gameContainer.classList.remove("hidden");
        goButton.classList.add("hidden");
        displayQuestion();
    });

    backButton.addEventListener("click", function() {
        window.location.href = '/Capstone/BW2P2Floor';
    });

    submitAnswerButton.addEventListener("click", function() {
        checkAnswer();
    });

    hintButton.addEventListener("click", function() {
        showHint();
    });
	
document.getElementById('bookModule').addEventListener('click', function(event) {
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

document.addEventListener('click', function(event) {
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


