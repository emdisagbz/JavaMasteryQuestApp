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
    const GuardianNatureWalk = document.querySelector(".GuardianNature-walk");
    const GuardianNatureIdle = document.querySelector(".GuardianNature-idle");
    const GuardianNatureAttack = document.querySelector(".GuardianNature-attack");
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

    // Check BW1 completion status and unlock BW2Games if completed
   

    const questions = [
  {
    question: "Create a method 'calculateArea' inside the 'Rectangle' class. This method should take 'length' and 'width' as input and return the area of the rectangle. Write the code:",
    answer: `class Rectangle {
  calculateArea(length, width) {
    return length * width;
  }
}`,
    
    hints: [
      "Hint 1: The 'calculateArea' method should take two parameters, 'length' and 'width'.",
      "Hint 2: Use the formula for finding the area of a rectangle: length * width.",
      "Hint 3: Return the calculated area.",
    ],
  },
  {
    question: "Define a method 'play' inside the 'Game' class that takes no parameters and prints 'Playing game...'. Write the code:",
    answer: `class Game {
  play() {
    console.log('Playing game...');
  }
}`,
    
    hints: [
      "Hint 1: The 'play' method should have no parameters.",
      "Hint 2: Use 'console.log' to print 'Playing game...'.",
      "Hint 3: The method body contains a single line of code.",
    ],
  },
  {
    question: "Create a method 'getArea' inside the 'Circle' class that takes the radius as input and returns the area of the circle. Write the code:",
    answer: `class Circle {
  getArea(radius) {
    return Math.PI * radius * radius;
  }
}`,
    
    hints: [
      "Hint 1: The 'getArea' method should take the radius as input.",
      "Hint 2: Use the formula for finding the area of a circle: π * r^2.",
      "Hint 3: You can access the value of π using 'Math.PI'.",
    ],
  },
  {
    question: "Define a method 'setPrice' inside the 'Product' class that takes a price as input and sets the 'price' property of the object. Write the code:",
    answer: `class Product {
  setPrice(price) {
    this.price = price;
  }
}`,
    
    hints: [
      "Hint 1: The 'setPrice' method should take a price as input.",
      "Hint 2: Use the 'this' keyword to set the 'price' property of the object.",
      "Hint 3: The method should only assign the price to the 'price' property.",
    ],
  },
  {
    question: "An 'Employee' class has a 'name' property. Define a method 'getName' that returns the 'name' of the employee. Write the code:",
    answer: `class Employee {
  constructor(name) {
    this.name = name;
  }

  getName() {
    return this.name;
  }
}`,
    image: "employee-getName.jpg",
    hints: [
      "Hint 1: The 'getName' method should not take any parameters.",
      "Hint 2: Use the 'return' keyword to return the 'name' property.",
      "Hint 3: The 'name' property is initialized in the constructor.",
    ],
  },
  {
    question: "Create a method 'toggle' inside the 'Switch' class that changes the state of the switch. If it's 'on', it should change to 'off', and vice versa. Write the code:",
    answer: `class Switch {
  constructor() {
    this.state = 'off';
  }

  toggle() {
    this.state = (this.state === 'on') ? 'off' : 'on';
  }
}`,
    
    hints: [
      "Hint 1: The 'toggle' method should change the state of the switch.",
      "Hint 2: Use conditional (ternary) operator to toggle between 'on' and 'off'.",
      "Hint 3: Access and update the 'state' property of the switch.",
    ],
  },
  {
    question: "Define a method 'setName' inside the 'Person' class that takes a name as input and sets the 'name' property. Write the code:",
    answer: `class Person {
  setName(name) {
    this.name = name;
  }
}`,
    
    hints: [
      "Hint 1: The 'setName' method should take a name as input.",
      "Hint 2: Use the 'this' keyword to set the 'name' property of the object.",
      "Hint 3: The method should only assign the name to the 'name' property.",
    ],
  },
  {
    question: "Create a method 'isEven' inside the 'NumberUtility' class that takes a number and returns true if it's even, otherwise false. Write the code:",
    answer: `class NumberUtility {
  isEven(num) {
    return num % 2 === 0;
  }
}`,
    
    hints: [
      "Hint 1: The 'isEven' method should take a number as input.",
      "Hint 2: Use the modulo operator (%) to check if the number is even.",
      "Hint 3: The method should return a boolean value.",
    ],
  },
  {
    question: "An 'Email' class has a 'subject' property. Define a method 'getSubject' that returns the 'subject' of the email. Write the code:",
    answer: `class Email {
  constructor(subject) {
    this.subject = subject;
  }

  getSubject() {
    return this.subject;
  }
}`,
    
    hints: [
      "Hint 1: The 'getSubject' method should not take any parameters.",
      "Hint 2: Use the 'return' keyword to return the 'subject' property.",
      "Hint 3: The 'subject' property is initialized in the constructor.",
    ],
  },
  {
    question: "Define a method 'setAge' inside the 'Person' class that takes an age as input and sets the 'age' property. Write the code:",
    answer: `class Person {
  setAge(age) {
    this.age = age;
  }
}`,
    
    hints: [
      "Hint 1: The 'setAge' method should take an age as input.",
      "Hint 2: Use the 'this' keyword to set the 'age' property of the object.",
      "Hint 3: The method should only assign the age to the 'age' property.",
    ],
  },
];

	const answerElement = document.getElementById("answer");

            answerElement.addEventListener('keydown', function(event) {
                if (event.key === 'Tab') {
                    event.preventDefault();
                    const start = this.selectionStart;
                    const end = this.selectionEnd;

                    // Insert 2 spaces for the tab
                    this.value = this.value.substring(0, start) + '  ' + this.value.substring(end);

                    // Move the caret
                    this.selectionStart = this.selectionEnd = start + 2;
                }
            });

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
    const answerElement = questionContainer.querySelector("#answer");
    if (!answerElement) {
        console.error("Answer element not found");
        return;
    }

    const answer = answerElement.value.trim().replace(/\s+/g, '').toLowerCase();
    const correctAnswer = randomQuestions[currentQuestionIndex].answer.trim().replace(/\s+/g, '').toLowerCase();

    if (answer === "") {
        showPopupMessage("Please put an answer");
        return; // Exit the function early
    }

    if (answer === correctAnswer) {
        // Store the index of the answered question
        const answeredQuestions = JSON.parse(localStorage.getItem("answeredQuestions")) || [];
        if (!answeredQuestions.includes(currentQuestionIndex)) {
            answeredQuestions.push(currentQuestionIndex);
        }
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
                localStorage.setItem("AW3Completed", "true");
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
                window.location.href = "AdvancedLobby.html";
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

        const container = document.querySelector('.container');
        container.classList.add('animate');

        container.addEventListener('animationend', function() {
            container.classList.remove('animate');
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
            GuardianNatureWalk.classList.add("animateWalk");
            GuardianNatureWalk.style.visibility = "visible";
            GuardianNatureWalk.style.opacity = "1";

            GuardianNatureWalk.addEventListener('animationend', function() {
                console.log("Walk animation ended");
                GuardianNatureIdle.classList.add("animateIdle");
                GuardianNatureIdle.style.visibility = "visible";
                GuardianNatureIdle.style.opacity = "1";

                GuardianNatureIdle.addEventListener('animationend', function() {
                    console.log("Idle animation ended");
                    GuardianNatureIdle.style.visibility = "hidden";
                    GuardianNatureIdle.style.opacity = "0";
                    GuardianNatureAttack.classList.add("animateAttack");
                    GuardianNatureAttack.style.visibility = "visible";
                    GuardianNatureAttack.style.opacity = "1";
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
        window.location.href = "AdvancedLobby.html";
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