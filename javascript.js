// Global variables
let humanScore = 0;
let computerScore = 0;

// Selectors
let roundOutcome = document.querySelector(".roundOutcome");
let roundExplanation = document.querySelector(".roundExplanation");
let playerChoiceBox = document.querySelector(".playerChoice");
let computerChoiceBox = document.querySelector(".computerChoice");

document.querySelectorAll('.btn').forEach(button => {
  button.addEventListener('click', () => {
      let humanSelection = button.value;
      playRound(humanSelection);

  });
});


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
      return "Rock"
    } else if (randomNumber === 1) {
      return "Paper";
    } else {
      return "Scissors";
    }
  }
  

function updateScore (humanScore, computerScore){
  console.log("Your score is: " + humanScore);
  console.log("Computer score is: " + computerScore);
}

function declareWinner(winner, humanSelection, computerSelection) {
  if (winner === "human") {
  roundOutcome.textContent = "You won!"
  roundExplanation.textContent = humanSelection + " beats " + computerSelection;
  } else if (winner === "tie") {
    roundOutcome.textContent = "It's a tie!"
    roundExplanation.textContent = humanSelection + " ties with " + computerSelection;
  } else {
    roundOutcome.textContent = "You lost!"
    roundExplanation.textContent = humanSelection + " is beaten by " + computerSelection;
  }
}

function UpdateChoiceBox(humanSelection, computerSelection){
  playerChoiceBox.textContent = humanSelection;
  computerChoiceBox.textContent = computerSelection;
}


function declareRound(round) {
  console.log("round is: " + round)
}

function playRound(humanSelection){
  let winner;
const computerSelection = getComputerChoice();
if (humanSelection === "Rock" && computerSelection === "Scissors" ||
    humanSelection === "Paper" && computerSelection === "Rock"     ||
    humanSelection === "Scissors" && computerSelection === "Paper") {
      winner = "human";
    humanScore++;
  } else if (humanSelection === computerSelection) {
    winner = "tie";
  } else {
  computerScore++;
    winner = "computer";
} 
  declareWinner(winner, humanSelection, computerSelection);
  UpdateChoiceBox(humanSelection, computerSelection);
  updateScore(humanScore, computerScore);
};


