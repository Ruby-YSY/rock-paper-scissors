function getComputerChoice() {
  const options = ["Rock", "Paper", "Scissors"];
  return options[Math.floor(Math.random() * 3)];
}

const game = {
  playerScore: 0,
  computerScore: 0,

  beats: {
    Rock: "Scissors",
    Paper: "Rock",
    Scissors: "Paper",
  },

  getRoundResult(playerChoice, computerChoice) {
    if (playerChoice === computerChoice) return "draw";
    return this.beats[playerChoice] === computerChoice ? "win" : "lose";
  },

  updateScore(outcome) {
    if (outcome === "win") {
      this.playerScore++;
    } else if (outcome === "lose") {
      this.computerScore++;
    }
  },

  resetScore() {
    this.playerScore = 0;
    this.computerScore = 0;
  },

  playRound(playerSelection, computerSelection) {
    const outcome = this.getRoundResult(playerSelection, computerSelection);
    this.updateScore(outcome);
    return outcome;
  },
};

const playerSelectionDisplay = document.querySelector("#player-selection");
const computerSelectionDisplay = document.querySelector("#computer-selection");
const playerScoreDisplay = document.querySelector("#player-score");
const computerScoreDisplay = document.querySelector("#computer-score");
const messageDisplay = document.querySelector("#message");

const rpsButtons = document.querySelectorAll(
  "#rock-button, #paper-button, #scissors-button",
);

function getMessage(playerChoice, computerChoice, outcome) {
  if (outcome === "win") {
    return `You've won! ${playerChoice} beats ${computerChoice}.`;
  } else if (outcome === "lose") {
    return `You've lost! ${computerChoice} beats ${playerChoice}.`;
  } else {
    return "Draw!";
  }
}

function updateUI(playerChoice, computerChoice, outcome) {
  playerSelectionDisplay.textContent = `Player: ${playerChoice}`;
  computerSelectionDisplay.textContent = `CPU: ${computerChoice}`;

  messageDisplay.textContent = getMessage(
    playerChoice,
    computerChoice,
    outcome,
  );

  playerScoreDisplay.textContent = game.playerScore;
  computerScoreDisplay.textContent = game.computerScore;
}

function checkGameEnd() {
  if (game.playerScore === 5) {
    messageDisplay.textContent = "You're a winner!";
    game.resetScore();
  } else if (game.computerScore === 5) {
    messageDisplay.textContent = "You're a loser!";
    game.resetScore();
  }

  playerScoreDisplay.textContent = game.playerScore;
  computerScoreDisplay.textContent = game.computerScore;
}

rpsButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const playerChoice = event.target.textContent;
    const computerChoice = getComputerChoice();

    const outcome = game.playRound(playerChoice, computerChoice);

    updateUI(playerChoice, computerChoice, outcome);
    checkGameEnd();
  });
});
