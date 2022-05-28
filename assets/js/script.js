/**
 * Const for DOM Elements
 */

const buttons = document.getElementsByClassName("button");
const playerScore = document.getElementById("your-score");
const computerScore = document.getElementById("computer-score");
const yourChoice = document.getElementById("your-choice");
const computerChoice = document.getElementById("computer-choice");
const gameResult = document.getElementById("game-result");
const yourPick = ["rock", "paper", "scissors"];

/** Event Listeners for buttons */
for (let button of buttons) {
    button.addEventListener("click", function () {
        let yourChoice = this.getAttribute("data-choice");
        playGame(yourChoice)
    });
}

/** Game function */

function playGame(yourChoice) {

    yourChoice.src = `assets/images/${choices[yourChoice]}.png`;
    yourChoice.alt = choices[yourChoice];

    let computerChoice = Math.floor(Math.random() * 3);

    computerChoice.src = `assets/images/${choices[computerChoice]}.png`;
    computerChoice.alt
}