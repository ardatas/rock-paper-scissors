let humanScore = 0;
let computerScore = 0;
let printScore = ``;

function checkIfValid(choice) {
    let choiceInsensitive = choice.toLowerCase();
    if (choiceInsensitive === 'rock' || choiceInsensitive ===  'paper' || choiceInsensitive === 'scissors')
        return choiceInsensitive;
    else return undefined  
}

function getHumanChoice() {
    let humanChoice;
    while (true) {
        humanChoice = prompt("Rock, Paper or Scissors: ");
        let validChoice = checkIfValid(humanChoice);
        if (validChoice !== undefined) {
            return validChoice;
        } else {
            alert('Invalid input. Type again.')
        }
    } return humanChoice;
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

    if (humanChoice === computerChoice) {
        return 'Tie.'; 
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        computerScore++;
        return 'Computer won.';
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        humanScore++;
        return 'You won.';
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++;
        return 'You won.';
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        computerScore++;
        return 'Computer won.';
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        humanScore++;
        return 'You won.';
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        computerScore++;
        return 'Computer won.';
    }
}

function playRound(selection1, selection2) {
    alert(gameOutcome(selection1, selection2));
}

function playGame(count) {

    for (let i=0; i<count; i++) {
        let humanSelection = getHumanChoice();
        let computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection)
        console.log(`Human: ${humanScore} Computer: ${computerScore}`);

        printScore = `<p>You: ${humanScore}, Computer ${computerScore}</p>`;

        document.getElementById('score').innerHTML = printScore;
    }
}



