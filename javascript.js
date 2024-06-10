// Global variables
let computerChoice;


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
      computerChoice = "rock"
      return computerChoice;
    } else if (randomNumber === 1) {
      computerChoice = "paper";
      return computerChoice;
    } else {
      computerChoice = "scissors";
      return computerChoice;
    }
  }
  