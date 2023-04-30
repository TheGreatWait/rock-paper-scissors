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

// Add the score to the running score
function playGame(computerSelection, playerSelection) {

    if ((computerSelection === "Rock" && playerSelection === "Paper")
        || (computerSelection === "Paper" && playerSelection === "Scissors")
        || (computerSelection === "Scissors" && playerSelection === "Rock")) {
        return "Player Wins";
    } else if ((computerSelection === "Rock" && playerSelection === "Scissors")
    || (computerSelection === "Paper" && playerSelection === "Rock")
    || (computerSelection === "Scissors" && playerSelection === "Paper")) {
        return "Computer Wins";

    } else if (computerSelection === playerSelection) {
        return "Tie"
    } else {
        return "You did not enter correctly. No game."
    }
}

let playerScore = 0;
let computerScore = 0;
const maxScore = 5;

while (playerScore < maxScore && computerScore < maxScore) {
    let computerChoice = getComputerChoice();
    let playerChoice = getPlayerChoice();

    console.log(`The player chose ${playerChoice} and the computer chose ${computerChoice}.`);
    switch (playGame(computerChoice, playerChoice)) {
        case ("Player Wins"):
            playerScore += 1;
            console.log(`Player Wins! ${playerChoice} beats ${computerChoice}!`);
            break
        case ("Computer Wins"):
            computerScore += 1;
            console.log(`Computer Wins :(. ${computerChoice} beats ${playerChoice}.`);
            break
        case "Tie":
            console.log("Tie game.");
            break
    }
    console.log(`The score is ${playerScore} to ${computerScore}`);
}

// Output the winner at the end
