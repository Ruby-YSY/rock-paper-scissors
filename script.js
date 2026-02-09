function getComputerChoice() {
  switch (Math.floor(Math.random() * 3)) {
    case 0:
      return "Rock";
      break;

    case 1:
      return "Paper";
      break;

    case 2:
      return "Scissors";
      break;
  }
}

function getHumanChoice() {
  return prompt("Choose Rock, Paper or Scissors:");
}

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

function playGame() {
  while (humanScore != 5 && computerScore != 5) {
    playRound(getComputerChoice(), getHumanChoice());
    console.log("Score:");
    console.log(`Human: ${humanScore}`);
    console.log(`Computer: ${computerScore}`);
    console.log("-------------------------------------------");
  }

  if (humanScore === 5) {
    console.log("You're a winner!");
  } else {
    console.log("You've lost!");
  }
}

playGame();
