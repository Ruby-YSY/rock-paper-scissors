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

  if (humanChoice === "Rock" && computerChoice === "Scissors") {
    alert(`You've won! ${humanChoice} beats ${computerChoice}.`);
    humanScore++;
  } else if (humanChoice === "Rock" && computerChoice === "Paper") {
    alert(`You've lost! ${computerChoice} beats ${humanChoice}.`);
    computerScore++;
  } else if (humanChoice === "Paper" && computerChoice === "Rock") {
    alert(`You've won! ${humanChoice} beats ${computerChoice}.`);
    humanScore++;
  } else if (humanChoice === "Paper" && computerChoice === "Scissors") {
    alert(`You've lost! ${computerChoice} beats ${humanChoice}.`);
    computerScore++;
  } else if (humanChoice === "Scissors" && computerChoice === "Paper") {
    alert(`You've won! ${humanChoice} beats ${computerChoice}.`);
    humanScore++;
  } else if (humanChoice === "Scissors" && computerChoice === "Rock") {
    alert(`You've lost! ${computerChoice} beats ${humanChoice}.`);
    computerScore++;
  } else {
    alert("Draw!");
  }
}
