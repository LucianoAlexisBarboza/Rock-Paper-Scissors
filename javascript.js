const random = ["rock", "paper", "scissors"];
let computerSelection = getComputerChoice();
let playerSelection = "hold";

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
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
        div1.textContent = "Tie";
        document.body.appendChild(div1);
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win!");
        div1.textContent = "You win!";
        document.body.appendChild(div1);
        } 
    else if (playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "scissors" && computerSelection === "rock" ||
        playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You Lose!");
        div1.textContent = "You lose!";
        document.body.appendChild(div1);
        } 
  }


const div1 = document.createElement("div");
div1.style.color = "blue";
