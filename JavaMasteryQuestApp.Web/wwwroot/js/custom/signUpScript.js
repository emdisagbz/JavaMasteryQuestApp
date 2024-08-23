document.getElementById('userButton').addEventListener('click', function() {
    var card = document.getElementById('card');
    if (card.style.transform === "rotateY(180deg)") {
        card.style.transform = "rotateY(0deg)";
    } else {
        card.style.transform = "rotateY(180deg)";
    }
});

document.getElementById('userButton1').addEventListener('click', function() {
    var card = document.getElementById('card');
    if (card.style.transform === "rotateY(180deg)") {
        card.style.transform = "rotateY(0deg)";
    } else {
        card.style.transform = "rotateY(180deg)";
    }
});
