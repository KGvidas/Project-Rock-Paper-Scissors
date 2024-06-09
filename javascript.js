function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
  
    randomNumber === 0 ? console.log("rock") :
    randomNumber === 1 ? console.log("paper") :
    console.log("scissors");
  }
  