let play = ["rock", "paper", "scissors"];

function computerPlay(play) {
  return play[Math.floor(Math.random() * play.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase(); 
  if (playerSelection === "rock" && computerSelection === "scissors") {
    return "Rock beats scissors! You win! Here's a cookie!";

  } else if (playerSelection === "rock" && computerSelection === "rock") {
    return "Rock meets rock! Its a tie! Play again to decide the victor!";

  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "Rock is covered by paper! You have been defeated!Play again for revenge!";

  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "Paper beats rock, you win! Here's a cookie!"

  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "Paper meets paper! Its a tie! Play again to decide the victor!";

  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "Paper is sliced by scissors! You have been defeated! Play again for revenge";

  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "Scissors beats rock! You win! Here's a cookie!";

  } else if (
    playerSelection === "scissors" && computerSelection === "scissors") {
    return "Scissors meets scissors! Its a tie! Play again to decide the victor!";

  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "Scissors is smashed by rock! You have been defeated! Play again for revenge!";

  } else {
    return "Play only rock, paper or scissors please!";
  
  }

}

function game(playerSelection, numberOfRounds) {
  
  for (let i = 0; i < numberOfRounds; i++) {
    let playRoundFunction = playRound(playerSelection, computerPlay(play));
    console.log(playRoundFunction);
  } 
  return "Game over!"
}