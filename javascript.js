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
  
  // function getHumanChoice(){
  //   let humanChoice = prompt("Choose your weapon: rock, paper or scissors?").toLocaleLowerCase();
  //   while (humanChoice !== "rock"  &&
  //          humanChoice !== "paper" &&
  //          humanChoice !== "scissors"){
  //           humanChoice = prompt("Please correctly input: rock, paper or scissors?").toLocaleLowerCase();
  //       }
  //   return humanChoice;
  // }


function updateScore (humanScore, computerScore){
  console.log("Your score is: " + humanScore);
  console.log("Computer score is: " + computerScore);
}

function declareWinner(winner, humanSelection, computerSelection) {
  if (winner === "human") {
  roundOutcome.textContent = "You won!"
  } else if (winner === "tie") {
    roundOutcome.textContent = "It's a tie!"
  } else {
    roundOutcome.textContent = "You lost!"
  }
}

function UpdateChoiceBox(humanSelection, computerSelection){
  playerChoiceBox.textContent = humanSelection;
  computerChoiceBox.textContent = computerSelection;
}

function choiceExplanation(humanSelection, computerSelection) {
  roundExplanation.textContent = "Your choice: " + humanSelection + ", Computer's choice: " + computerSelection
}

// function declareWinner(winner, humanSelection, computerSelection) {
//   if (winner === "human") {
//       console.log("You won! Your choice was " + humanSelection + " and computer's choice was " + computerSelection);
//   } else if (winner === "tie") {
//       console.log("It's a tie! Your choice was " + humanSelection + " and computer's choice was " + computerSelection);
//   } else {
//       console.log("You lost! Your choice was " + humanSelection + " and computer's choice was " + computerSelection);
//   }
// }

function declareRound(round) {
  console.log("round is: " + round)
}

function playRound(humanSelection){
  let winner;
// const humanSelection = getHumanChoice();
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
  choiceExplanation(humanSelection, computerSelection);
  UpdateChoiceBox(humanSelection, computerSelection);
  updateScore(humanScore, computerScore);
};


// function playGame(){
// for (let round = 1; (round <= 5); round++) {
// playRound();  
// declareRound(round);
// }
// }

// playGame();


