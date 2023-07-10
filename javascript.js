const random = ["rock", "paper", "scissors"];
let computerSelection = getComputerChoice();

function getComputerChoice() {
    return random[Math.floor(Math.random()*random.length)];
}

function getPlayerChoice() {
    return prompt("Rock, Paper or Scissors?").toLowerCase();
}

function playRound(computerSelection) {
    let playerSelection = getPlayerChoice();
    if (playerSelection === computerSelection) {
        console.log("Tie");
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win!");
        } 
    else if (playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "scissors" && computerSelection === "rock" ||
        playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You Lose!");
        } 
  }

function game() {
    for (let i = 0;i < 5; i++) {
        playRound(computerSelection);
        computerSelection = getComputerChoice();
    }
}

game();
