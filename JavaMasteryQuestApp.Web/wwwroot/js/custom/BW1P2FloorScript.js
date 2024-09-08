function openModal(level) {
    document.getElementById("modal").style.display = "block";
    updateFloorTitle(level);
}

function updateFloorTitle(level) {
    let title = "Java Programming";
    document.getElementById("floorTitle").textContent = title;
}

document.getElementById("goButton").addEventListener("click", function () {
    let url = '/Capstone/BW1P2F2Games';
    window.location.href = url;
});

document.getElementById("closeButton").addEventListener("click", function () {
    document.getElementById("modal").style.display = "none";
});

document.getElementById("backButton").addEventListener("click", function () {
    window.location.href = '/Capstone/BW1Part'; // Change this to the appropriate URL
});
