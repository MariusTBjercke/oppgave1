// Variabler
var terjeImg = "img/terje.png";
var eskilImg = "img/eskil.png";
var geirImg = "img/geir.png";
var activePlayer = "geir";
var counter = 0;
var roundCounter = 1;
var winningText = document.getElementById("winning-text");
var finalWinningText = document.getElementById("final-winning-text");
var nextButton = document.getElementById("next-button");
var restartButton = document.getElementById("restart-button");

// Funksjon som endrer til bilde av Geir og Eskil annenhver gang
function changeOnClick(element) {
    if (activePlayer === "geir") {
        element.style.backgroundImage = 'url("' + geirImg + '")';
        activePlayer = "eskil";
    } else {
        element.style.backgroundImage = 'url("' + eskilImg + '")';
        activePlayer = "geir";
    }

    if (counter === 8 && roundCounter < 3) {
        winningText.style.display = "block";
        roundCounter++;
    } else if (counter === 8 && roundCounter === 3) {
        finalWinningText.style.display = "block";
    } else {
        counter++;
    }

}

nextButton.onclick = function() {
    if (roundCounter === 2) {
        document.getElementById("round-1").style.display = "none";
        document.getElementById("round-2").style.display = "block";
        winningText.style.display = "none";
        counter = 0;
    } else if (roundCounter === 3) {
        document.getElementById("round-2").style.display = "none";
        document.getElementById("round-3").style.display = "block";
        winningText.style.display = "none";
        counter = 0;
    }
}

// Restart spill, omdiriger nettleser til index.html
restartButton.onclick = function() {
    document.location.href = "index.html";
}