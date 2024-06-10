
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
      return "rock"
    } else if (randomNumber === 1) {
      return "paper";
    } else {
      return "scissors";
    }
  }
  
  function getHumanChoice(){
    let humanChoice = prompt("Choose your weapon: rock, paper or scissors?").toLocaleLowerCase();
    return humanChoice;
  }

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

console.log(humanSelection);
console.log(computerSelection);