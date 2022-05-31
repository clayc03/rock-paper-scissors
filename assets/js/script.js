const yourChoiceDisplay = document.getElementById('your-choice')
const yourScore = document.getElementById('your-score')
const computerChoiceDisplay = document.getElementById('computer-choice')
const computerScore = document.getElementById('computer-score')
const resultDisplay = document.getElementById('result')
const possibleChoice = document.querySelectorAll('button')
let yourChoice

possibleChoice.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) => {
    yourChoice = e.target.id
    yourChoiceDisplay.innerHTML = userChoice
    generateComputerChoice()
}))



/** Add Event Listeners */

