const yourChoiceDisplay = document.getElementById('your-choice')
const yourScore = document.getElementById('your-score')
const computerChoiceDisplay = document.getElementById('computer-choice')
const computerScore = document.getElementById('computer-score')
const resultDisplay = document.getElementById('result')
const possibleChoices = document.querySelectorAll('button')
let userChoice

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
}))
