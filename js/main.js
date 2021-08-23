// Variabler
var terjeImg = "img/terje.png";
var eskilImg = "img/eskil.png";
var geirImg = "img/geir.png";
var activePlayer = "geir";
var roundCheck = true;
var counter = 0;
var winningText = document.getElementById("winning-text");

// Utfører spillrunde. Sjekker spiller etter tur (altså Geir eller Eskil) ved å bruke boolean. 
// Sjekker om aktiv spiller er lik Geir, om Geir da er den aktive spilleren så endres aktiv spiller til Eskil. 
// Vi bruker en variabel for å sjekke om en runde er utført ved å gi den true/false og sjekker runde etter dette. Setter omvendt verdi etter fullført runde.
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

    if (counter === 8) {
        winningText.style.display = "inherit";
    } else {
        counter++;
    }

}