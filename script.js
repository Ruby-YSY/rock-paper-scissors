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

const rockButton = document.querySelector('#rock-button');
const paperButton = document.querySelector('#paper-button');
const scissorsButton = document.querySelector('#scissors-button');

rockButton.addEventListener('click', (event) => {
  playRound(getComputerChoice(), event.target.innerHTML);
});
paperButton.addEventListener('click', (event) => {
  playRound(getComputerChoice(), event.target.innerHTML);
});
scissorsButton.addEventListener('click', (event) => {
  playRound(getComputerChoice(), event.target.innerHTML);
});

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
  const computerSelection = computerChoice;
  const humanSelection =
    humanChoice.at(0).toUpperCase() + humanChoice.substr(1).toLowerCase();

  function result(isHumanWinner) {
    if (isHumanWinner) {
      console.log(`You've won! ${humanSelection} beats ${computerSelection}.`);
      humanScore++;
    } else {
      console.log(`You've lost! ${computerSelection} beats ${humanSelection}.`);
      computerScore++;
    }
  }

  console.log(humanSelection);
  console.log(computerSelection);

  if (humanSelection === computerSelection) {
    console.log("Draw!");
  } else if (humanSelection === "Rock") {
    if (computerSelection === "Scissors") {
      result(true);
    } else {
      result(false);
    }
  } else if (humanSelection === "Paper") {
    if (computerSelection === "Rock") {
      result(true);
    } else {
      result(false);
    }
  } else if (humanSelection === "Scissors") {
    if (computerSelection === "Paper") {
      result(true);
    } else {
      result(false);
    }
  }
}
