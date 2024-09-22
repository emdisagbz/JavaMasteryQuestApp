let selectedLevel = null;

function openModal(level) {
    selectedLevel = level;
    document.getElementById("modal").style.display = "block";
    updateFloorTitle(level);
}

function updateFloorTitle(level) {
    let title = "";
    switch (level) {
        case 1:
            title = "Methods";
            break;
        case 2:
            title = "Calling a Method";
            break;
        case 3:
            title = "Parameters and Arguments";
            break;
        case 4:
            title = "Return Values";
            break;
        case 5:
            title = "Condition Statements";
            break;
        default:
            title = "Instructions";
            break;
    }
    document.getElementById("floorTitle").textContent = title;
}

document.getElementById("goButton").addEventListener("click", function() {
    let url = "";
    switch (selectedLevel) {
        case 1:
            url = '/Capstone/AW1Games';
            break;
        case 2:
            url = '/Capstone/AW1F2Games';
            break;
        case 3:
            url = '/Capstone/AW1F3Games';
            break;
        case 4:
            url = '/Capstone/AW1F4Games';
            break;
        case 5:
            url = '/Capstone/AW1F5Games';
            break;
        default:
            console.error("Invalid level:", selectedLevel);
            return;
    }
    window.location.href = url;
});

document.getElementById("closeButton").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
});

document.getElementById("backButton").addEventListener("click", function() {
    window.location.href = '/Capstone/AW1Part'; // Change this to the appropriate URL
});
