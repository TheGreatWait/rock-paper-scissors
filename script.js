function getComputerChoice() {
    let computerChoice = Math.ceil(Math.random() * 3);

    switch (computerChoice) {
        case 1:
            return "Rock";
        break;
        case 2:
            return "Paper";
        break;
        case 3:
            return "Scissors";
        break;
    }
}

function getPlayerChoice() {

    let playerChoice = prompt("Choose your weapon!");
    playerChoice = playerChoice.toLowerCase();

    let capitalLetter = playerChoice[0];
    capitalLetter = capitalLetter.toUpperCase();
    return playerChoice.replace(playerChoice[0],capitalLetter);

    //    Repeat if it is a bad choice
}

function playRockPaperScissors(computerSelection, playerSelection) {

    if ((computerSelection === "Rock" && playerSelection === "Paper")
    || (computerSelection === "Paper" && playerSelection === "Scissors")
    || (computerSelection === "Scissors" && playerSelection === "Rock")) {
        return `${playerSelection} beats ${computerSelection}! You Win!`;


    } else if ((computerSelection === "Rock" && playerSelection === "Scissors")
    || (computerSelection === "Paper" && playerSelection === "Rock")
    || (computerSelection === "Scissors" && playerSelection === "Paper")) {
        return `${computerSelection} beats ${playerSelection}! You lose!`;

    } else if (computerSelection === playerSelection) {
        return "Tie game!"
    } else {
        return "You did not enter correctly. No game."
    }
}

let computerChoice = getComputerChoice();
let playerChoice = getPlayerChoice();

console.log(computerChoice + " vs. " + playerChoice);


console.log(playRockPaperScissors(computerChoice, playerChoice));

// Add the score to the running score

// Output the score for each round

// Repeat until somebody has five points times

// Output the winner at the end
