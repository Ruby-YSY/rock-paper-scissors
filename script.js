function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random() * 3)];
}

const rockButton = document.querySelector("#rock-button");
const paperButton = document.querySelector("#paper-button");
const scissorsButton = document.querySelector("#scissors-button");

const playerSelectionDisplay = document.querySelector("#player-selection");
const computerSelectionDisplay = document.querySelector("#computer-selection");
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const messageDisplay = document.querySelector("#message");

rockButton.addEventListener("click", (event) => {
  playRound(event.target.textContent, getComputerChoice());
});
paperButton.addEventListener("click", (event) => {
  playRound(event.target.textContent, getComputerChoice());
});
scissorsButton.addEventListener("click", (event) => {
  playRound(event.target.textContent, getComputerChoice());
});

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  playerSelectionDisplay.textContent = `Player: ${playerSelection}`;
  computerSelectionDisplay.textContent = `CPU: ${computerSelection}`;

  function isPlayerWinner(result) {
    if (result) {
      messageDisplay.textContent = `You've won! ${playerSelection} beats ${computerSelection}.`;
      playerScoreDisplay.textContent = ++playerScore;
    } else {
      messageDisplay.textContent = `You've lost! ${computerSelection} beats ${playerSelection}.`;
      computerScoreDisplay.textContent = ++computerScore;
    }
  }

  function resetScore() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
  }

  const beats = {
    Rock: "Scissors",
    Paper: "Rock",
    Scissors: "Paper",
  };

  if (playerSelection === computerSelection) {
    messageDisplay.textContent = "Draw!";
  } else {
    isPlayerWinner(beats[playerSelection] === computerSelection);
  }

  if (playerScore === 5) {
    messageDisplay.textContent = "You're a winner!";
    resetScore();
  } else if (computerScore === 5) {
    messageDisplay.textContent = "You're a loser!";
    resetScore();
  }
}
