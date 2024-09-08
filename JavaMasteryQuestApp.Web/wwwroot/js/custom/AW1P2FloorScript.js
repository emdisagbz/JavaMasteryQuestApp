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
            title = "Java Method Overloading";
            break;
        default:
            title = "Instructions";
            break;
    }
    document.getElementById("floorTitle").textContent = title;
}

document.getElementById("goButton").addEventListener("click", function() {
    let url = '/Capstone/AW1P2F6Games';
    window.location.href = url;
});

document.getElementById("closeButton").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
});

document.getElementById("backButton").addEventListener("click", function() {
    window.location.href = '/Capstone/AW1Part'; // Change this to the appropriate URL
});
