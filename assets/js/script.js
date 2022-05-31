const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;
//let yourScore = 0;
//let computerScore = 0;

var choices = ["rock", "paper", "scissors"];

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
    getResult()
}))

function generateComputerChoice () {
const randomNumber = Math.floor(Math.random() * 3) + 1

if (randomNumber === 1) {
    computerChoice = 'rock'
}
if (randomNumber === 2) {
    computerChoice = 'paper'
}
if (randomNumber === 3) {
    computerChoice = 'scissors'
}
computerChoiceDisplay.innerHTML = computerChoice
}

function getResult() {
if (userChoice === computerChoice) {
    result = 'Draw!'
    //yourScore += 1;
    //opponentScore += 1;
}
if (userChoice === "rock" && computerChoice === 'paper') {
    result = 'You Lose!'
    //opponentScore += 1;
}
if (userChoice === "rock" && computerChoice=== 'scissors') {
    result = 'You Win!'
    //yourScore += 1;
}
if (userChoice === "paper" && computerChoice === 'scissors') {
    result = 'You Lose!'
    //opponentScore += 1;
}
if (userChoice === "paper" && computerChoice === 'rock') {
    result = 'You Win!'
    //yourScore += 1;
}
if (userChoice === "scissors" && computerChoice === 'rock') {
    result = 'You Lose!'
    //opponentScore += 1;
}
if (userChoice=== "scissors" && computerChoice === 'paper') {
    result = 'You Win!'
    //yourScore += 1;
}
resultDisplay.innerHTML = result
//document.getElementById("your-score").innerText = yourScore;
//document.getElementById("computer-score").innerText = computerScore;
}

/* if (user == computer) {
    yourScore += 1;
    computerScore += 1;
}
else {
    if (user == "rock") {
        if (computer == "scissors") {
            yourScore += 1;
        }
        else if (computer == "paper") {
            computerScore += 1;
        }
    }
    else if (user == "scissors") {
        if (computer == "paper") {
            yourScore += 1;
        }
        else if (computer == "rock") {
            computerScore += 1;
        }
    }
    else if (user == "paper") {
        if (computer == "rock") {
            yourScore += 1;
        }
        else if (computer == "scissors") {
            computerScore += 1;
        }
    }
    document.getElementById("your-score").innerText = yourScore;
    document.getElementById("computer-score").innerText = computerScore;
}

