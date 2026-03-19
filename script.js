function getComputerChoice() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return "Rock";

    case 1:
      return "Paper";

    case 2:
      return "Scissors";
  }
}

function getHumanChoice() {
  return prompt("Choose Rock, Paper or Scissors:");
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
  playRound(getComputerChoice(), event.target.textContent);
});
paperButton.addEventListener("click", (event) => {
  playRound(getComputerChoice(), event.target.textContent);
});
scissorsButton.addEventListener("click", (event) => {
  playRound(getComputerChoice(), event.target.textContent);
});

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
  playerSelectionDisplay.textContent = `Player: ${playerSelection}`;
  computerSelectionDisplay.textContent = `CPU: ${computerSelection}`;

  function result(isPlayerWinner) {
    if (isPlayerWinner) {
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

  if (playerSelection === computerSelection) {
    messageDisplay.textContent = "Draw!";
  } else if (playerSelection === "Rock") {
    if (computerSelection === "Scissors") {
      result(true);
    } else {
      result(false);
    }
  } else if (playerSelection === "Paper") {
    if (computerSelection === "Rock") {
      result(true);
    } else {
      result(false);
    }
  } else if (playerSelection === "Scissors") {
    if (computerSelection === "Paper") {
      result(true);
    } else {
      result(false);
    }
  }

  if (playerScore === 5) {
    messageDisplay.textContent = "You're a winner!";
    resetScore();
  } else if (computerScore === 5) {
    messageDisplay.textContent = "You're a loser!";
    resetScore();
  }
}
