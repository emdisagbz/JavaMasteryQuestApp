function openModal(level) {
    document.getElementById("modal").style.display = "block";
    updateFloorTitle(level);
}

function updateFloorTitle(level) {
    let title = "Predefined Methods"; // Adjust this if you have dynamic titles
    document.getElementById("floorTitle").textContent = title;
}

document.getElementById("goButton").addEventListener("click", function() {
    let url = '/Capstone/BW3P3F3Games'; // Adjust the URL if needed
    window.location.href = url;
});

document.getElementById("closeButton").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
});

document.getElementById("backButton").addEventListener("click", function() {
    window.location.href = '/Capstone/BW3Part'; // Adjust the URL if needed
});
