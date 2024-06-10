// Global variables
let computerChoice;
let humanChoice;


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
  
  function getHumanChoice(){
    let humanChoice = prompt("Choose your weapon: rock, paper or scissors?").toLocaleLowerCase();
    console.log(humanChoice)
  }