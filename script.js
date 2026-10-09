const startButton = document.querySelector("#start-button");
const intro = document.querySelector("#intro");
const crimeScene = document.querySelector("#crime-scene");

const suspectsButton = document.querySelector("#suspects-button");
const suspectsScene = document.querySelector("#suspects-scene");

startButton.addEventListener("click", function () {
    intro.hidden = true;
    crimeScene.hidden = false;
});

suspectsButton.addEventListener("click", function () {
    crimeScene.hidden = true;
    suspectsScene.hidden = false;
});
