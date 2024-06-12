
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

function declareWinner(winner, humanSelection, computerSelection) {
  if (winner === "human") {
      console.log("You won! Your choice was " + humanSelection + " and computer's choice was " + computerSelection);
  } else if (winner === "tie") {
      console.log("It's a tie! Your choice was " + humanSelection + " and computer's choice was " + computerSelection);
  } else {
      console.log("You lost! Your choice was " + humanSelection + " and computer's choice was " + computerSelection);
  }
}


function playRound(humanSelection, computerSelection,humanScore, computerScore){
  let winner;
if (humanSelection === "rock" && computerSelection === "scissors" ||
    humanSelection === "paper" && computerSelection === "rock"     ||
    humanSelection === "scissors" && computerSelection === "paper") {
      winner = "human";
    ++humanScore;
  } else if (humanSelection === computerSelection) {
    winner = "tie";
  } else {
  ++computerScore;
    winner = "computer";
} 
  declareWinner(winner, humanSelection, computerSelection);
  updateScore(humanScore, computerScore);
  return { humanScore, computerScore }; 
};



function playGame(){
let humanScore = 0;
let computerScore = 0;
const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound(humanSelection, computerSelection, humanScore, computerScore);
}

playGame();

// If you already know about loops, you can use them. If not, don’t worry! Loops will be covered in the next lesson.