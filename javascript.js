const random = ["rock", "paper", "scissors"];
let computerSelection = getComputerChoice();
let playerSelection = "hold";
let computerScore = 0;
let playerScore = 0;

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    playerSelection = button.id;
    playRound(computerSelection);
    results();
  });
});

function getComputerChoice() {
    return random[Math.floor(Math.random()*random.length)];
}

function playRound(computerSelection) {
    computerSelection = getComputerChoice();
    if (playerSelection === computerSelection) {
        div3.textContent = "TIE!"
    }
    else if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "scissors" && computerSelection === "paper" ||
        playerSelection === "paper" && computerSelection === "rock") {
        playerScore++;
        div2.textContent = `Player Score: ${playerScore}`;
        div3.textContent = "YOU WIN!";
        } 
    else if (playerSelection === "rock" && computerSelection === "paper" ||
        playerSelection === "scissors" && computerSelection === "rock" ||
        playerSelection === "paper" && computerSelection === "scissors") {
        computerScore++;
        div1.textContent = `Computer Score: ${computerScore}`;
        div3.textContent = "YOU LOSE";
        } 
  }

  function results() {
    const container = document.querySelector("#gameWinner")
    if (playerScore > 4) {
      console.log("YOU WIN THIS GAME!!!")
      div4.textContent = "YOU WIN THIS GAME!";
      container.appendChild(div4);
    }
    else if (computerScore > 4) {
      console.log("YOU LOSE THE GAME :(")
      div4.textContent = "YOU LOSE THE GAME!";
      container.appendChild(div4);
    } else {
      div4.textContent = "";
     container.appendChild(div4);
    }
  }


const div1 = document.querySelector("#computerScore");
const div2 = document.querySelector("#playerScore");
const div3 = document.querySelector("#roundWinner");
const div4 = document.querySelector("#gameWinner")

