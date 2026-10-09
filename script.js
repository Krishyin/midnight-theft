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
const eleanorButton = document.querySelector("#eleanor-button");
const eleanorScene = document.querySelector("#eleanor-scene");
const backToSuspects = document.querySelector("#back-to-suspects");

eleanorButton.addEventListener("click", function () {
    suspectsScene.hidden = true;
    eleanorScene.hidden = false;
});

backToSuspects.addEventListener("click", function () {
    eleanorScene.hidden = true;
    suspectsScene.hidden = false;
});
