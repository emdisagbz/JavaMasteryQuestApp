function openModal(level) {
    document.getElementById("modal").style.display = "block";
    updateFloorTitle(level);
}

function updateFloorTitle(level) {
    let title = "Java Inheritance";
    document.getElementById("floorTitle").textContent = title;
}

document.getElementById("goButton").addEventListener("click", function() {
    let url = '/Capstone/AW2P2F3Games';
    window.location.href = url;
});

document.getElementById("closeButton").addEventListener("click", function() {
    document.getElementById("modal").style.display = "none";
});

document.getElementById("backButton").addEventListener("click", function() {
    window.location.href = '/Capstone/AW2Part'; // Change this to the appropriate URL
});
