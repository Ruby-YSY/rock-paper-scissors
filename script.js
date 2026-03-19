const options = ["Rock", "Paper", "Scissors"];

const beats = {
  Rock: "Scissors",
  Paper: "Rock",
  Scissors: "Paper",
};

function getComputerChoice() {
  return options[Math.floor(Math.random() * 3)];
}

const playerSelectionDisplay = document.querySelector("#player-selection");
const computerSelectionDisplay = document.querySelector("#computer-selection");
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const messageDisplay = document.querySelector("#message");

const rpsButtons = document.querySelectorAll(
  "#rock-button, #paper-button, #scissors-button",
);

rpsButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    playRound(event.target.textContent, getComputerChoice());
  });
});

function getRoundResult(playerChoice, computerChoice) {
  if (playerChoice === computerChoice) return "draw";

  return beats[playerChoice] === computerChoice ? "win" : "lose";
}

function playRound(playerSelection, computerSelection) {
  const outcome = getRoundResult(playerSelection, computerSelection);

  updateUI(playerSelection, computerSelection, outcome);
  updateScore(outcome);
}

function updateUI(playerChoice, computerChoice, outcome) {
  playerSelectionDisplay.textContent = `Player: ${playerChoice}`;
  computerSelectionDisplay.textContent = `CPU: ${computerChoice}`;

  messageDisplay.textContent = getMessage(
    playerChoice,
    computerChoice,
    outcome,
  );
}

function getMessage(playerChoice, computerChoice, outcome) {
  if (outcome === "win") {
    return `You've won! ${playerChoice} beats ${computerChoice}.`;
  } else if (outcome === "lose") {
    return `You've lost! ${computerChoice} beats ${playerChoice}.`;
  } else {
    return "Draw!";
  }
}

let playerScore = 0;
let computerScore = 0;

function updateScore(result) {
  if (result === "win") {
    playerScore++;
    playerScoreDisplay.textContent = playerScore;
  } else if (result === "lose") {
    computerScore++;
    computerScoreDisplay.textContent = computerScore;
  }

  checkGameEnd();
}

function checkGameEnd() {
  if (playerScore === 5) {
    messageDisplay.textContent = "You're a winner!";
    resetScore();
  } else if (computerScore === 5) {
    messageDisplay.textContent = "You're a loser!";
    resetScore();
  }
}

function resetScore() {
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.textContent = playerScore;
  computerScoreDisplay.textContent = computerScore;
}
