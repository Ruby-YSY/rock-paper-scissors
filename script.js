function getComputerChoice() {
  // let array = ["Rock", "Paper", "Scissors"];    || A possible solution with using arrays
  // return array[Math.floor(Math.random() * 3)];

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
    humanChoice.at(0).toUpperCase() + humanChoice.substr(1);

  console.log(humanSelection);
  console.log(computerSelection);

  if (humanSelection === "Rock" && computerSelection === "Scissors") {
    console.log(`You've won! ${humanSelection} beats ${computerSelection}.`);
    humanScore++;
  } else if (humanSelection === "Rock" && computerSelection === "Paper") {
    console.log(`You've lost! ${computerSelection} beats ${humanSelection}.`);
    computerScore++;
  } else if (humanSelection === "Paper" && computerSelection === "Rock") {
    console.log(`You've won! ${humanSelection} beats ${computerSelection}.`);
    humanScore++;
  } else if (humanSelection === "Paper" && computerSelection === "Scissors") {
    console.log(`You've lost! ${computerSelection} beats ${humanSelection}.`);
    computerScore++;
  } else if (humanSelection === "Scissors" && computerSelection === "Paper") {
    console.log(`You've won! ${humanSelection} beats ${computerSelection}.`);
    humanScore++;
  } else if (humanSelection === "Scissors" && computerSelection === "Rock") {
    console.log(`You've lost! ${computerSelection} beats ${humanSelection}.`);
    computerScore++;
  } else {
    console.log("Draw!");
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
