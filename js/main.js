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
        // Teller oppover for hvert trykk (+1)
        counter++;
    }

}

// Gå til neste runde ved å trykke på knapp
nextButton.onclick = function() {
    // Hvis roundCounter er 2 så setter vi style "display" til "none" på runden som var og setter "display" til "inherit" på neste runde for at den skal vises.
    if (roundCounter === 2) {
        document.getElementById("round-1").style.display = "none";
        document.getElementById("round-2").style.display = "block";
        // Skjuler "Runden ble fullført!" teksten
        winningText.style.display = "none";
        // Nullstiller counter slik at man kan starte spillet på nytt
        counter = 0;
    } else if (roundCounter === 3) {
        document.getElementById("round-2").style.display = "none";
        document.getElementById("round-3").style.display = "block";
        winningText.style.display = "none";
        counter = 0;
    }
}

// Restart spill, omdiriger nettleser til index.html (tilbake til forsiden)
restartButton.onclick = function() {
    document.location.href = "index.html";
}