﻿function openModal(level) {
    document.getElementById("modal").style.display = "block";
    updateFloorTitle(level);
}

function updateFloorTitle(level) {
    let title = "Control Structures";
    document.getElementById("floorTitle").textContent = title;
}

document.getElementById("goButton").addEventListener("click", function () {
    let url = "BW2P2F2Games.html";
    window.location.href = url;
});

document.getElementById("closeButton").addEventListener("click", function () {
    document.getElementById("modal").style.display = "none";
});

document.getElementById("backButton").addEventListener("click", function () {
    window.location.href = "BW2Part.html"; // Change this to the appropriate URL
});
