// Variabler
var terjeImg = "img/terje.png";
var eskilImg = "img/eskil.png";
var geirImg = "img/geir.png";
var activePlayer = "geir";
var roundCheck = true;
var counter = 0;
var roundCounter = 1;
var winningText = document.getElementById("winning-text");
var finalWinningText = document.getElementById("final-winning-text");
var nextButton = document.getElementById("next-button");
var restartButton = document.getElementById("restart-button");

// Utfører spillrunde. Sjekker spiller etter tur (altså Geir og Eskil) ved å bruke boolean (true eller false)
// Sjekker om aktiv spiller er Geir, om Geir da er den aktive spilleren så endres aktiv spiller til Eskil etter klikk
// Vi bruker en variabel for å sjekke om en runde er utført ved å gi den true/false og sjekker runde etter dette. Setter omvendt verdi etter fullført runde
function playerTurn() {
    if (activePlayer === "geir" && roundCheck === true) {
        activePlayer = "eskil";
        roundCheck = false;
    } else {
        activePlayer = "geir";
        roundCheck = true;
    }
}

// Funksjon som endrer til bilde av Geir og Eskil annenhver gang
function changeOnClick(element) {
    if (activePlayer === "geir") {
        element.style.backgroundImage = 'url("' + geirImg + '")';
        playerTurn();
    } else {
        element.style.backgroundImage = 'url("' + eskilImg + '")';
        playerTurn();
    }

    if (counter === 8 && roundCounter < 3) {
        winningText.style.display = "inherit";
        roundCounter++;
    } else if (counter === 8 && roundCounter === 3) {
        finalWinningText.style.display = "inherit";
    } else {
        counter++;
    }

}

// Gå til neste runde ved å trykke på knapp
nextButton.onclick = function() {
    if (roundCounter === 2) {
        document.getElementById("round-1").style.display = "none";
        document.getElementById("round-2").style.display = "inherit";
        winningText.style.display = "none";
        counter = 0;
    } else if (roundCounter === 3) {
        document.getElementById("round-2").style.display = "none";
        document.getElementById("round-3").style.display = "inherit";
        winningText.style.display = "none";
        counter = 0;
    }
}

// Restart spill, omdiriger nettleser til index.html (tilbake til forsiden)
restartButton.onclick = function() {
    document.location.href = "index.html";
}