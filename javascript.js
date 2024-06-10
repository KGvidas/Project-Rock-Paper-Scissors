

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

function playRound(humanSelection, computerSelection){
if (humanSelection === "rock" && computerSelection === "scissors" ||
    humanSelection === "paper" && computerSelection === "rock"     ||
    humanSelection === "scissors" && computerSelection === "paper") {
      
      ++humanScore;
      console.log("You won! " + "your choice was " + humanSelection + " and computer's choice was " + computerSelection)
      console.log(humanScore);
      console.log(computerScore);
} else if (humanSelection === computerSelection) {
  console.log("It's a tie! " + "your choice was " + humanSelection + " and computer's choice was " + computerSelection)
} else {
  ++computerScore;
    console.log("You lost! Your choice was " + humanSelection + " and computer's choice was " + computerSelection);
    console.log("Human score: " + humanScore);
    console.log("Computer score: " + computerScore);
}};



function playGame(){
let humanScore = 0;
let computerScore = 0;


  playRound(humanSelection, computerSelection);
}