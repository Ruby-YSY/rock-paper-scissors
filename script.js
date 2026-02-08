function getComputerChoice() {
    // let array = ["Rock", "Paper", "Scissors"];    || A possible solution with using arrays
    // return array[Math.floor(Math.random() * 3)];
    
    switch(Math.floor(Math.random() * 3)) {
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


