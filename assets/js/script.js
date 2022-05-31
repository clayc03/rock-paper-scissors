const userChoiceDisplay = document.getElementById("user-choice");
const computerChoiceDisplay = document.getElementById("computer-choice");
const resultDisplay = document.getElementById("result");
const possibleChoices = document.querySelectorAll("button");
let userChoice;
let computerChoice;
let result;

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
}
if (userChoice === "rock" && computerChoice === 'paper') {
    result = 'You Lose!'
    addPoint("computer")
}
if (userChoice === "rock" && computerChoice=== 'scissors') {
    result = 'You Win!'
    addPoint("user")
}
if (userChoice === "paper" && computerChoice === 'scissors') {
    result = 'You Lose!'
    addPoint("computer")
}
if (userChoice === "paper" && computerChoice === 'rock') {
    result = 'You Win!'
    addPoint("user")
}
if (userChoice === "scissors" && computerChoice === 'rock') {
    result = 'You Lose!'
    addPoint("computer")
}
if (userChoice=== "scissors" && computerChoice === 'paper') {
    result = 'You Win!'
    addPoint("user")
}
resultDisplay.innerHTML = result
}

function addPoint(winner) {
    let scoreBoard;
    if (winner === "computer"){
        scoreBoard = document.getElementById("computer-score");
    }else if (winner === "user"){
        scoreBoard = document.getElementById("user-score");
    }
    let currentScore = parseInt(scoreBoard.innerText);
    currentScore +=1;
    scoreBoard.innerText = currentScore;
    if (checkForWinner(currentScore)){
        if (winner === "computer"){
            alert("You Lose!");
            location.reload();
        }else if (winner === "user"){
            alert("You Win!");
            location.reload();
        }
    }
}

function checkForWinner(currentScore) {
    if (currentScore == 5) {
        return true;
    } else{
        return false;
    }
}