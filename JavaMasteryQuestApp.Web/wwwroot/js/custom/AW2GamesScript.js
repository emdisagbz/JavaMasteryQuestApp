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
    const IceQueenWalk = document.querySelector(".IceQueen-walk");
    const IceQueenIdle = document.querySelector(".IceQueen-idle");
    const IceQueenAttack = document.querySelector(".IceQueen-attack");
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
            question: "An 'Order' object has a list of 'items'. Define a getter method 'getItems' that returns the 'items' list. Fill in the missing code:",
            answer: `class Order {
  constructor(items) {
    this.items = items;
  }

  getItems() {
    return this.items;
  }
}`,
            image: "order-getItems.jpg",
            hints: [
              "Hint 1: Getter methods are used to access object properties.",
              "Hint 2: The 'getItems' method should return the 'items' list.",
              "Hint 3: Use the 'this' keyword to access the object's property.",
            ],
          },
          {
            question: "Create a method 'sayHello' inside the 'Person' class that prints 'Hello!'. Fill in the missing code:",
            answer: `class Person {
  sayHello() {
    console.log('Hello!');
  }
}`,
            image: "person-sayHello.jpg",
            hints: [
              "Hint 1: The 'sayHello' method should print a greeting.",
              "Hint 2: Use the 'console.log' function to print 'Hello!'.",
              "Hint 3: The method does not take any parameters.",
            ],
          },
          {
            question: "Define a method 'getFullName' inside the 'User' class that returns the full name by combining 'firstName' and 'lastName'. Fill in the missing code:",
            answer: `class User {
  constructor(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName() {
    return this.firstName + ' ' + this.lastName;
  }
}`,
            image: "user-getFullName.jpg",
            hints: [
              "Hint 1: The 'getFullName' method should combine 'firstName' and 'lastName'.",
              "Hint 2: Use string concatenation to create the full name.",
              "Hint 3: Return the combined full name.",
            ],
          },
          {
            question: "Define a constructor method inside the 'Car' class that takes the 'make' and 'model' as input and assigns them to the corresponding properties. Fill in the missing code:",
            answer: `class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
}`,
            image: "car-constructor.jpg",
            hints: [
              "Hint 1: The constructor method is called when creating a new object.",
              "Hint 2: The constructor should initialize object properties.",
              "Hint 3: Use the 'this' keyword to access the object's properties.",
            ],
          },
          {
            question: "Create a method 'double' inside the 'NumberUtility' class that takes a number and returns its double. Fill in the missing code:",
            answer: `class NumberUtility {
  double(num) {
    return num * 2;
  }
}`,
            image: "numberUtility-double.jpg",
            hints: [
              "Hint 1: The 'double' method should take a number as input.",
              "Hint 2: Multiply the input number by 2.",
              "Hint 3: Return the doubled value.",
            ],
          },
          {
            question: "We need to define a method named 'calculateArea' inside the 'Square' class. This method should take the 'sideLength' as input and return the area of the square. Fill in the missing code:",
            answer: `class Square {
  constructor(sideLength) {
    this.sideLength = sideLength;
  }

  calculateArea() {
    return this.sideLength * this.sideLength;
  }
}`,
            image: "square-calculateArea.jpg",
            hints: [
              "Hint 1: The 'calculateArea' method should access the 'sideLength' property.",
              "Hint 2: The area of a square is calculated by squaring the side length.",
              "Hint 3: Use the 'return' keyword to specify the calculated area.",
            ],
          },
          {
            question: "An 'Animal' class has a method 'makeSound' that should print a generic sound like 'Moo' or 'Woof' depending on the animal type. Override this method in the 'Dog' class to print 'Woof'. Fill in the missing code:",
            answer: `class Animal {
  makeSound() {
    console.log('Moo');
  }
}

class Dog extends Animal {
  makeSound() {
    console.log('Woof');
  }
}`,
            image: "animal-makeSound.jpg",
            hints: [
              "Hint 1: The 'Dog' class inherits from the 'Animal' class.",
              "Hint 2: Use the 'override' keyword to redefine the 'makeSound' behavior.",
              "Hint 3: Print 'Woof' within the overridden method.",
            ],
          },
          {
            question: "We want to check if a 'BankAccount' object has sufficient funds for a withdrawal. Define a method 'hasEnoughFunds' that takes the withdrawal amount as input and returns true if the balance is greater than or equal to the withdrawal amount. Fill in the missing code:",
            answer: `class BankAccount {
  constructor(balance) {
    this.balance = balance;
  }

  hasEnoughFunds(withdrawalAmount) {
    return this.balance >= withdrawalAmount;
  }
}`,
            image: "bankAccount-hasEnoughFunds.jpg",
            hints: [
              "Hint 1: The method should access the 'balance' property of the object.",
              "Hint 2: Use a comparison operator to check if the balance is sufficient.",
              "Hint 3: The method should return a boolean value (true/false).",
            ],
          },
          {
            question: "Create a method 'greet' inside the 'User' class that takes a name as input and prints a personalized greeting message. Fill in the missing code:",
            answer: `class User {
  greet(name) {
    console.log('Hello, ' + name + '!');
  }
}`,
            image: "user-greet.jpg",
            hints: [
              "Hint 1: The 'greet' method should take a parameter for the name.",
              "Hint 2: Use string concatenation to build the greeting message.",
              "Hint 3: Consider using template literals for a cleaner approach.",
            ],
          },
          {
            question: "Define a static method 'sum' inside the 'MathUtils' class that takes two numbers as input and returns their sum. Fill in the missing code:",
            answer: `class MathUtils {
  static sum(num1, num2) {
    return num1 + num2;
  }
}`,
            image: "mathUtils-sum.jpg",
            hints: [
              "Hint 1: The 'sum' method should be declared as static.",
              "Hint 2: Static methods can be called without creating an object.",
              "Hint 3: Use the arithmetic operator '+' to perform addition.",
            ],
          },
        ];

	document.getElementById('missingButton').addEventListener('click', () => {
                document.getElementById('missingImage').src = questions[currentQuestionIndex].image;
                document.getElementById('missingImage').style.display = 'block';
            });


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
                localStorage.setItem("AW2Completed", "true");
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
                window.location.href = '/Capstone/AdvancedLobby';
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

        const container = document.querySelector('.land');
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
            IceQueenWalk.classList.add("animateWalk");
            IceQueenWalk.style.visibility = "visible";
            IceQueenWalk.style.opacity = "1";

            IceQueenWalk.addEventListener('animationend', function() {
                console.log("Walk animation ended");
                IceQueenIdle.classList.add("animateIdle");
                IceQueenIdle.style.visibility = "visible";
                IceQueenIdle.style.opacity = "1";

                IceQueenIdle.addEventListener('animationend', function() {
                    console.log("Idle animation ended");
                    IceQueenIdle.style.visibility = "hidden";
                    IceQueenIdle.style.opacity = "0";
                    IceQueenAttack.classList.add("animateAttack");
                    IceQueenAttack.style.visibility = "visible";
                    IceQueenAttack.style.opacity = "1";
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
        window.location.href = '/Capstone/AdvancedLobby';
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