const random = ["rock", "paper", "scissors"];
let computerSelection = getComputerChoice();
let playerSelection = "hold";

// buttons is a node list. It looks and acts much like an array.
const buttons = document.querySelectorAll('button');

// we use the .forEach method to iterate through each button
buttons.forEach((button) => {

  // and for each one we add a 'click' listener
  button.addEventListener('click', () => {
    playerSelection = button.id;
    playRound(computerSelection);
  });
});

function getComputerChoice() {
    return random[Math.floor(Math.random()*random.length)];
}

function playRound(computerSelection) {
    computerSelection = getComputerChoice();
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
