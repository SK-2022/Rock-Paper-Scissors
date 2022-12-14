const play = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;




function playRound(playerSelection) {
  playerSelection = playerSelection.toLowerCase(); 
  // prompt("Rock, Paper or Scissors?", playerSelection)
  function computerPlay(play) {
    return play[Math.floor(Math.random() * play.length)];
  }

  if(playerSelection === computerPlay(play)){  
    console.log("Immovable object meets unbending will! Its a tie!")
    
  } else if(playerSelection === "rock" && computerPlay(play) === "scissors") {
    playerScore++;
    console.log("Rock beats scissors! You win! Here's a cookie!")
    
  } else if (playerSelection === "rock" && computerPlay(play) === "paper") {
    computerScore++;
    console.log("Rock is covered by paper! You have been defeated!Play again for revenge!")

  } else if (playerSelection === "paper" && computerPlay(play) === "rock") {
    playerScore++;
    return "Paper beats rock, you win! Here's a cookie!"

  } else if (playerSelection === "paper" && computerPlay(play) === "scissors") {
    computerScore++;
    return "Paper is sliced by scissors! You have been defeated! Play again for revenge";

  } else if (playerSelection === "scissors" && computerPlay(play) === "paper") {
    playerScore++;
    return "Scissors beats rock! You win! Here's a cookie!";

  } else if (playerSelection === "scissors" && computerPlay(play) === "rock") {
    computerScore++;
    return "Scissors is smashed by rock! You have been defeated! Play again for revenge!";

  } else {
    return "Play only rock, paper or scissors please!";
  
  }

}
    const rockBtn = document.createElement("button");
    rockBtn.textContent = "Rock";
    document.body.append(rockBtn);

    const paperBtn = document.createElement("button");
    paperBtn.textContent = "Paper";
    document.body.append(paperBtn);

    const scissorsBtn = document.createElement("button");
    scissorsBtn.textContent = "Scissors";
    document.body.append(scissorsBtn);

// function game(playerSelection, numberOfRounds) {
//   for (let i = 0; i < numberOfRounds; i++) {
//     let playRoundFunction = playRound(playerSelection, computerPlay(play));
//     console.log(playRoundFunction);
//   } 
  
//   if (playerScore > computerScore) {
//     return "Player Wins! Congratulations!"

//   } else if (playerScore < computerScore) {
//     return "Computer Wins! Try again!"

//   } else if (playerScore === computerScore) {
//     return "Its a Tie!"
    
//   } else {
//     return "Whoops, something went wrong!"
//   }
// }

//This is a test. Its my first time pushing to a branch. 