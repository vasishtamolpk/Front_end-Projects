function selectChoice(playerChoice) {
    const choices = ["rock", "paper", "scissors"];
    const computerChoice = choices[Math.floor(Math.random() * 3)];
  
    let outcome;
    if (playerChoice === computerChoice) {
      outcome = "It's a tie!";
    } else if (
      (playerChoice === "rock" && computerChoice === "scissors") ||
      (playerChoice === "paper" && computerChoice === "rock") ||
      (playerChoice === "scissors" && computerChoice === "paper")
    ) {
      outcome = "You win!";
    } else {
      outcome = "Computer wins!";
    }
  
    document.getElementById("message").innerText = `You chose ${playerChoice}. Computer chose ${computerChoice}.`;
    document.getElementById("outcome").innerText = outcome;
  }
  