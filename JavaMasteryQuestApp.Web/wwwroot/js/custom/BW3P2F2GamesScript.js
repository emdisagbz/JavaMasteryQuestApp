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
    const GuardianNatureWalk = document.querySelector(".GuardianNature-walk");
    const GuardianNatureIdle = document.querySelector(".GuardianNature-idle");
    const GuardianNatureAttack = document.querySelector(".GuardianNature-attack");
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
	let BW3F2totalScore = points; // Initialize total score

	
    updateCoinAndPointCount();
    updateHearts(); // Initialize hearts display
    // Initially display the idle animation BEFORE QUESTIONS
    GRangerIdle.style.visibility = "visible";
    GRangerIdle.style.opacity = "1";


    const questions = [
        {
            type: "Identification",
            points: 3,
            question: "Identify the code to allocate memory to a one-dimensional array.",
            answer: "intArray = new int[];",
            hints: [
                "Hint 1: It uses the `new` keyword.",
                "Hint 2: The array size must be specified.",
                "Hint 3: The code is `intArray = new int[];`."
            ],

        },

        {
            type: "Identification",
            points: 3,
            question: "Identify the code to declare a two-dimensional array of floats.",
            answer: "float[][] floatArray;",
            hints: [
                "Hint 1: It uses double square brackets.",
                "Hint 2: It declares a 2D array.",
                "Hint 3: The code is `float[][] floatArray;`."
            ],

        },

        {
            type: "Identification",
            points: 3,
            question: "Identify the code to sort an array.",
            answer: "Arrays.sort(array);",
            hints: [
                "Hint 1: It belongs to the `Arrays` class.",
                "Hint 2: It sorts elements in ascending order.",
                "Hint 3: The code is `Arrays.sort(array);`."
            ],

        },

        {
            type: "Identification",
            points: 3,
            question: "Identify the code to fill an array with a specific value.",
            answer: "Arrays.fill(array, value);",
            hints: [
                "Hint 1: It is a method in the `Arrays` class.",
                "Hint 2: It assigns a value to all elements.",
                "Hint 3: The code is `Arrays.fill(array, value);`."
            ],

        },

        {
            type: "Multiple Choice",
            points: 2,
            question: "What is an array in Java?",
            choices: [
                "A. A collection of different data types",
                "B. A collection of elements of the same data type",
                "C. A collection of variables with different names",
                "D. A single variable that can hold multiple values"
            ],
            answer: "B",
            hints: [
                "Hint 1: It stores multiple elements of the same type.",
                "Hint 2: It is indexed starting from 0.",
                "Hint 3: It’s a collection of elements of the same data type."
            ]
        },

        {
            type: "Multiple Choice",
            points: 2,
            question: "How do you declare a one-dimensional array in Java?",
            choices: [
                "A. intArray[] int;",
                "B. int intArray[];",
                "C. array int intArray;",
                "D. array intArray[];"
            ],
            answer: "B",
            hints: [
                "Hint 1: The brackets can come after the type or the variable name.",
                "Hint 2: It is an array of integers.",
                "Hint 3: The correct syntax is `int[] intArray;` or `int intArray[];`."
            ]
        },

        {
            type: "Multiple Choice",
            points: 2,
            question: "What is the correct way to allocate memory to an array in Java?",
            choices: [
                "A. intArray = allocate int[20];",
                "B. intArray = int[20];",
                "C. intArray = new int[20];",
                "D. intArray = int allocate[20];"
            ],
            answer: "c",
            hints: [
                "Hint 1: It uses the `new` keyword.",
                "Hint 2: You must specify the array size.",
                "Hint 3: The correct syntax is `intArray = new int[20];`."
            ]
        },

        {
            type: "Multiple Choice",
            points: 2,
            question: "How are elements in an array accessed?",
            choices: [
                "A. Using a unique identifier",
                "B. Using the array's length",
                "C. Using an index starting from 1",
                "D. Using an index starting from 0"
            ],
            answer: "D",
            hints: [
                "Hint 1: It uses an index.",
                "Hint 2: The index starts from a specific number.",
                "Hint 3: They are accessed using an index starting from `0`."
            ]
        },

        {
            type: "Multiple Choice",
            points: 2,
            question: "What is a two-dimensional array in Java?",
            choices: [
                "A. An array of arrays",
                "B. A single array with two indexes",
                "C. A collection of single arrays",
                "D. An array with two elements"
            ],
            answer: "A",
            hints: [
                "Hint 1: It has rows and columns.",
                "Hint 2: It is an array of arrays",
                "Hint 3: It’s an array where each element is another array."
            ]
        },

        {
            type: "Multiple Choice",
            points: 2,
            question: "How do you declare a two-dimensional array in Java?",
            choices: [
                "A. int [][] array_name = new int[row][column];",
                "B. int array_name[row][column];",
                "C. array_name[][] int = new array[row][column];",
                "D. new int [][] array_name;"
            ],
            answer: "A",
            hints: [
                "Hint 1: It uses double square brackets.",
                "Hint 2: It’s declared with two sizes: row and column.",
                "Hint 3: The correct syntax is `int [][] array_name = new int[row][column];`."
            ]
        },

        {
            type: "Multiple Choice",
            points: 2,
            question: "What is the result of the following code snippet?",
            choices: [
                "A. 0",
                "B. Null",
                "C. 1",
                "D. Compilation error"
            ],
            answer: "A",
            hints: [
                "Hint 1: ",
                "Hint 2: ",
                "Hint 3: "
            ],
            image: "/image/Custom/BW3P2F2PIC.jpg"
        },

        {
            type: "Multiple Choice",
            points: 2,
            question: "Which method is used to sort an array in Java?",
            choices: [
                "A. Collections.sort(array);",
                "B. Array.sort(array);",
                "C. Arrays.sort(array);",
                "D. sort(array);"
            ],
            answer: "C",
            hints: [
                "Hint 1: It belongs to the `Arrays` class.",
                "Hint 2: It sorts elements in ascending order.",
                "Hint 3: The method is `Arrays.sort(array);`."
            ]
        },

        {
            type: "Multiple Choice",
            points: 2,
            question: "What does the Arrays.binarySearch method return if the key is not found in the array?",
            choices: [
                "A. -1",
                "B. The index of the first element greater than the key",
                "C. The index of the last element less than the key",
                "D. A negative insertion point minus one"
            ],
            answer: "D",
            hints: [
                "Hint 1: It returns a negative value.",
                "Hint 2: It returns the position where the element should be inserted.",
                "Hint 3: It returns a negative insertion point minus one."
            ]
        },

        {
            type: "Multiple Choice",
            points: 2,
            question: "What does the Arrays.equals method return if two arrays are equal?",
            choices: [
                "A. TRUE",
                "B. FALSE",
                "C. NULL",
                "D. The index of the first mismatched element"
            ],
            answer: "A",
            hints: [
                "Hint 1: It returns a boolean value.",
                "Hint 2: It returns `true` if both arrays have the same elements.",
                "Hint 3: The method returns `true`."
            ]
        },

        {
            type: "Identification",
            points: 3,
            question: "Identify the code to declare a one-dimensional array of integers.",
            answer: " int[] intArray;",
            hints: [
                "Hint 1: It uses square brackets.",
                "Hint 2: It declares an array variable.",
                "Hint 3: The code is `int[] intArray;`."
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
    localStorage.setItem("BW3F2totalScore", points); // Update total score in localStorage
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
        window.location.href = '/Capstone/BW3P2Floor';
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
        BW3F2totalScore = points;
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
            GuardianNatureWalk.classList.add("animateWalk1");
            GuardianNatureWalk.style.visibility = "visible";
            GuardianNatureWalk.style.opacity = "1";

            GuardianNatureWalk.addEventListener('animationend', function() {
                console.log("Walk animation ended");
				GuardianNatureWalk.style.visibility = "hidden";
                GuardianNatureWalk.style.opacity = "0";
                GuardianNatureIdle.classList.add("animateIdle1");
                GuardianNatureIdle.style.visibility = "visible";
                GuardianNatureIdle.style.opacity = "1";

                GuardianNatureIdle.addEventListener('animationend', function() {
                    console.log("Idle animation ended");
                    GuardianNatureIdle.style.visibility = "hidden";
                    GuardianNatureIdle.style.opacity = "0";
                    GuardianNatureAttack.classList.add("animateAttack1");
                    GuardianNatureAttack.style.visibility = "visible";
                    GuardianNatureAttack.style.opacity = "1";

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

    BW3F2totalScore = localStorage.getItem("BW3F2totalScore") ? parseInt(localStorage.getItem("BW3F2totalScore")) : 0;

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
		BW3F2totalScore = points; // Record the total score

		localStorage.setItem("totalAttempts", totalAttempts);
		localStorage.setItem("BW3F2totalScore", BW3F2totalScore);
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
        window.location.href = '/Capstone/BW3P2Floor';
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


