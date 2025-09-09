let humanScore = 0;
let computerScore = 0;
let printScore = ``;
let gameActive = false

var main = document.querySelector('main')
var btnArr = Array.from(document.querySelectorAll('.btn'))
var startBtn = document.getElementById("start-btn")
var endBtn = document.getElementById('end-btn')
var rockBtn = document.getElementsByClassName('btn')[0]
var paperBtn = document.getElementsByClassName('btn')[1]
var scissorsBtn = document.getElementsByClassName('btn')[2]

var hmnScore = document.querySelectorAll('.score')[0]
var cmptrScore = document.querySelectorAll('.score')[1]

var displayDiv = document.querySelector('.round-display')
var humanScoreSpan = document.getElementById('humanScore')
var computerScoreSpan = document.getElementById('computerScore')


//

// function checkIfValid(choice) {
//     let choiceInsensitive = choice.toLowerCase();
//     if (choiceInsensitive === 'rock' || choiceInsensitive ===  'paper' || choiceInsensitive === 'scissors')
//         return choiceInsensitive;
//     else return undefined  
// }

function getHumanChoiceFromBtn(buttonId) {

    switch(buttonId) {
        case 'btn1': return 'rock';
        case 'btn2': return 'paper';
        case 'btn3': return 'scissors';
    }
    
}  

function getComputerChoice() {

    let randomInteger = Math.floor(Math.random()*3);

    if (randomInteger == 0) {
        return 'rock';
    } else if (randomInteger == 1) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function gameOutcome(humanChoice, computerChoice) {

        if (humanChoice === computerChoice) return 'Tie.';

        if ((humanChoice === 'rock' && computerChoice === 'scissors') ||
        humanChoice === 'paper' && computerChoice === 'rock' || 
        humanChoice === 'scissors' && computerChoice === 'paper') {
            humanScore++
            return 'Won.';
        } else {
            computerScore++
            return 'Lost.'}
}

function updateScore() {
    
    humanScoreSpan.innerHTML = humanScore
    computerScoreSpan.innerHTML = computerScore
}

function displayRoundOutcome(outcome) {
    displayDiv.innerHTML = outcome
}

function playRound(buttonId) {
    
    // get human choice
    var humanChoice = getHumanChoiceFromBtn(buttonId)
    var computerChoice = getComputerChoice()
    const outcome = gameOutcome(humanChoice, computerChoice)
    console.log(outcome)
    return {
        outcome: outcome,
        humanChoice: humanChoice,
        computerChoice: computerChoice
    }
}

function playGame(event) {
    
    const buttonId = event.target.id
    const roundResult = playRound(buttonId)

    updateScore()
    displayRoundOutcome(roundResult.outcome)

}

// start button (?add finish btn later)
startBtn.addEventListener('click', () => {
    
    console.log("Game started.")

    rockBtn.addEventListener('click', playGame)
    paperBtn.addEventListener('click', playGame)
    scissorsBtn.addEventListener('click', playGame)  
    
})

endBtn.addEventListener('click', () => { 
    console.log("Game ended.")
    humanScore = 0;
    computerScore = 0;
    humanScoreSpan.innerHTML = ''
    computerScoreSpan.innerHTML = ''
    displayDiv.innerHTML = ''
    rockBtn.removeEventListener('click', playGame)
    paperBtn.removeEventListener('click', playGame)
    scissorsBtn.removeEventListener('click', playGame)  
})



    




