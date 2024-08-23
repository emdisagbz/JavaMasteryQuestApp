const popupContainer = document.getElementById("popupContainer");
const backButton = document.getElementById("backButton");
const goldCount = document.getElementById("goldCount");
const silverCount = document.getElementById("silverCount");
const heartsContainer = document.getElementById("heartsContainer");
const words = [
    'PUBLIC', 'CLASS', 'MAIN', 'STATIC', 'VOID',
    'STRING', 'ARGUMENTS', 'SYSTEM', 'PRINT', 'JAVA', 'PROGRAMMING'
];

const gridSize = 12;
const grid = [];

// Create an empty grid
for (let i = 0; i < gridSize; i++) {
    grid[i] = [];
    for (let j = 0; j < gridSize; j++) {
        grid[i][j] = '';
    }
}

let silverCoins = localStorage.getItem("silverCoins") ? parseInt(localStorage.getItem("silverCoins")) : 0;
let goldCoins = localStorage.getItem("goldCoins") ? parseInt(localStorage.getItem("goldCoins")) : 0;
updateCoinCount();

// Variables for timer
let startTime;
let timerInterval;
let timerStarted = false;

// Mission tracking variables
let firstClickTime = null;
let wrongClick = false;

function startTimer() {
    startTime = Date.now();
    timerInterval = setInterval(updateTimer, 1000); // Update every second
    timerStarted = true;
}

function updateTimer() {
    const currentTime = Date.now();
    const elapsedTime = Math.floor((currentTime - startTime) / 1000); // Calculate elapsed time in seconds
    document.getElementById("timer").textContent = `Time: ${elapsedTime}s`;
}

function stopTimer() {
    clearInterval(timerInterval);
}

// Function to place a word in the grid
function placeWord(word) {
    const directions = [
        { x: 1, y: 0 }, // right
        { x: 0, y: 1 }, // down
        { x: 1, y: 1 }, // diagonal down-right
        { x: -1, y: 0 }, // left
        { x: 0, y: -1 }, // up
        { x: -1, y: -1 }, // diagonal up-left
        { x: 1, y: -1 }, // diagonal up-right
        { x: -1, y: 1 }  // diagonal down-left
    ];

    let placed = false;
    while (!placed) {
        const direction = directions[Math.floor(Math.random() * directions.length)];
        const startX = Math.floor(Math.random() * gridSize);
        const startY = Math.floor(Math.random() * gridSize);

        let x = startX;
        let y = startY;
        let fits = true;

        for (let i = 0; i < word.length; i++) {
            if (x < 0 || x >= gridSize || y < 0 || y >= gridSize || (grid[y][x] !== '' && grid[y][x] !== word[i])) {
                fits = false;
                break;
            }
            x += direction.x;
            y += direction.y;
        }

        if (fits) {
            x = startX;
            y = startY;
            for (let i = 0; i < word.length; i++) {
                grid[y][x] = word[i];
                x += direction.x;
                y += direction.y;
            }
            placed = true;
        }
    }
}

// Place all words in the grid
words.forEach(word => placeWord(word));

// Fill the empty cells with random letters
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        if (grid[i][j] === '') {
            grid[i][j] = alphabet[Math.floor(Math.random() * alphabet.length)];
        }
    }
}

// Render the grid
const wordGrid = document.getElementById('word-grid');
const cellElements = [];
for (let i = 0; i < gridSize; i++) {
    for (let j = 0; j < gridSize; j++) {
        const cell = document.createElement('div');
        cell.textContent = grid[i][j];
        cell.dataset.row = i;
        cell.dataset.col = j;
        wordGrid.appendChild(cell);
        cellElements.push(cell);
    }
}

let firstCell = null;

wordGrid.addEventListener('click', (event) => {
    const cell = event.target;

    if (!firstCell) {
        firstCell = cell;
        cell.classList.add('highlight');
        
        if (!timerStarted) {
            startTimer(); // Start the timer when the first cell is clicked
        }
    } else {
        const startRow = parseInt(firstCell.dataset.row);
        const startCol = parseInt(firstCell.dataset.col);
        const endRow = parseInt(cell.dataset.row);
        const endCol = parseInt(cell.dataset.col);

        highlightWord(startRow, startCol, endRow, endCol);
        firstCell = null;
    }
});

function highlightWord(startRow, startCol, endRow, endCol) {
    let word = '';
    let cellsToHighlight = [];

    // Determine direction
    const rowDirection = endRow > startRow ? 1 : endRow < startRow ? -1 : 0;
    const colDirection = endCol > startCol ? 1 : endCol < startCol ? -1 : 0;

    let row = startRow;
    let col = startCol;

    while (row !== endRow + rowDirection || col !== endCol + colDirection) {
        word += grid[row][col];
        cellsToHighlight.push(document.querySelector(`[data-row='${row}'][data-col='${col}']`));
        row += rowDirection;
        col += colDirection;
    }

    const reversedWord = word.split('').reverse().join('');

    if (words.includes(word) || words.includes(reversedWord)) {
        showPopupMessage(`You found the word: ${word}`);
        cellsToHighlight.forEach(cell => cell.classList.add('highlight'));

        // Highlight the word in the list
        if (words.includes(word)) {
            document.getElementById(word).classList.add('found');
        } else {
            document.getElementById(reversedWord).classList.add('found');
        }

        // Add 50 silver coins for each word found
        silverCoins += 50;
        localStorage.setItem("silverCoins", silverCoins);
        updateCoinCount();

        // Check if all words are found
        checkAllWordsFound();
    } else {
        cellsToHighlight.forEach(cell => cell.classList.remove('highlight'));
        wrongClick = true; // Set wrong click flag
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

function checkAllWordsFound() {
    const foundWords = document.querySelectorAll('#word-list .found');
    if (foundWords.length === words.length) {
        showPopupMessage('Congratulations! You found all the words!');
        stopTimer(); // Stop the timer when all words are found

        // Check missions
        checkMissions();
    }
}

function checkMissions() {
    const missionContainer = document.getElementById('missionStatus');
    missionContainer.innerHTML = ''; // Clear previous content

    // Mission 1: Finding all words within 1 minute
    const elapsedTime = Math.floor((Date.now() - startTime) / 1000);
    const mission1Status = document.createElement('div');
    mission1Status.textContent = `Mission 1: Found all words within 1 minute and 30 seconds - `;
    if (elapsedTime <= 90) {
        mission1Status.innerHTML += `<span class="check">✔️</span>`;
        goldCoins += 100;
    } else {
        mission1Status.innerHTML += `<span class="cross">❌</span>`;
    }
    missionContainer.appendChild(mission1Status);

    // Mission 2: Not clicking the wrong word throughout the game
    const mission2Status = document.createElement('div');
    mission2Status.textContent = `Mission 2: No wrong clicks - `;
    if (!wrongClick) {
        mission2Status.innerHTML += `<span class="check">✔️</span>`;
        goldCoins += 100;
    } else {
        mission2Status.innerHTML += `<span class="cross">❌</span>`;
    }
    missionContainer.appendChild(mission2Status);

    // Mission 3: Finding all words (finishing the game)
    const mission3Status = document.createElement('div');
    mission3Status.textContent = `Mission 3: Found all words - `;
    mission3Status.innerHTML += `<span class="check">✔️</span>`;
    goldCoins += 100;
    missionContainer.appendChild(mission3Status);

    // Update gold coin count in local storage and UI
    localStorage.setItem("goldCoins", goldCoins);
    updateCoinCount();

    // Show mission completion popup
    showMissionCompletionPopup();
}

function showMissionCompletionPopup() {
    const missionCompletionPopup = document.getElementById('missionCompletion');
    missionCompletionPopup.style.display = 'block';

    // Attach event listener to the close button
    const closeButton = document.getElementById('closeMissionPopup');
    closeButton.addEventListener('click', () => {
        missionCompletionPopup.style.display = 'none';
    });
}


function updateCoinCount() {
    goldCount.textContent = goldCoins;
    silverCount.textContent = silverCoins;
}

// Initialize coin counts on page load
document.addEventListener('DOMContentLoaded', () => {
    updateCoinCount();
});
