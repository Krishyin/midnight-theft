const startButton = document.querySelector("#start-button");
const intro = document.querySelector("#intro");
const crimeScene = document.querySelector("#crime-scene");

startButton.addEventListener("click", function () {
    intro.hidden = true;
    crimeScene.hidden = false;
});
