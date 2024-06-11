

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


function updateScore (humanScore, computerScore){
  console.log("Your score is: " + humanScore);
  console.log("Computer score is: " + computerScore);
}

function playRound(humanSelection, computerSelection,humanScore, computerScore){
if (humanSelection === "rock" && computerSelection === "scissors" ||
    humanSelection === "paper" && computerSelection === "rock"     ||
    humanSelection === "scissors" && computerSelection === "paper") {
      ++humanScore;
      console.log("You won! " + "your choice was " + humanSelection + " and computer's choice was " + computerSelection)
      updateScore (humanScore, computerScore)
    } else if (humanSelection === computerSelection) {
  console.log("It's a tie! " + "your choice was " + humanSelection + " and computer's choice was " + computerSelection)
  updateScore (humanScore, computerScore)
} else {
  ++computerScore;
    console.log("You lost! Your choice was " + humanSelection + " and computer's choice was " + computerSelection);
    updateScore (humanScore, computerScore);
}};



function playGame(){
let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection, humanScore, computerScore);
}

playGame();

// Re-work your previous functions or create more helper functions 
// if necessary. Specifically, you may want to change the return values to something more useful.
// If you already know about loops, you can use them. If not, don’t worry! Loops will be covered in the next lesson.