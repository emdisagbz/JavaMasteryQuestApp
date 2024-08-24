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
            title = "Static";
            break;
        case 2:
            title = "Public";
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
            url = "AW2P1F1Games.html";
            break;
        case 2:
            url = "AW2P1F2Games.html";
            break;
        default:
            url = "#";
            break;
    }
    window.location.href = url;
});

document.getElementById("closeButton").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
});

document.getElementById("backButton").addEventListener("click", function() {
    window.location.href = "AW2Part.html"; // Change this to the appropriate URL
});
