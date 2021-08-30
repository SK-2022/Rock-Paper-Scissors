let play = ["rock", "paper", "scissors"];
let computerScore = 0;
let playerScore = 0;


function computerPlay(play) {
  return play[Math.floor(Math.random() * play.length)];
}

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase(); 
  prompt("Rock, Paper or Scissors?", playerSelection)
  if (playerSelection === "rock" && computerSelection === "scissors") {
    playerScore++;
    return "Rock beats scissors! You win! Here's a cookie!";
    
  } else if (playerSelection === "rock" && computerSelection === "rock") {
    return "Rock meets rock! Its a tie! Play again to decide the victor!";

  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore++;
    return "Rock is covered by paper! You have been defeated!Play again for revenge!";

  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore++;
    return "Paper beats rock, you win! Here's a cookie!"

  } else if (playerSelection === "paper" && computerSelection === "paper") {
    return "Paper meets paper! Its a tie! Play again to decide the victor!";

  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    computerScore++;
    return "Paper is sliced by scissors! You have been defeated! Play again for revenge";

  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    playerScore++;
    return "Scissors beats rock! You win! Here's a cookie!";

  } else if (
    playerSelection === "scissors" && computerSelection === "scissors") {
    return "Scissors meets scissors! Its a tie! Play again to decide the victor!";

  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    computerScore++;
    return "Scissors is smashed by rock! You have been defeated! Play again for revenge!";

  } else {
    return "Play only rock, paper or scissors please!";
  
  }

}

    const rockBtn = document.createElement("button");

    document.body.append(rockBtn);

    rockBtn.textContent = "Rock";

    rockBtn.setAttribute("id","rockButton")

    const rockButton = document.querySelector("#rockButton")

    rockButton.addEventListener('click', () => {
      
      return playRound("rock",computerPlay(play));
    
    }); 
    

    const paperBtn = document.createElement("button");
    document.body.append(paperBtn);
    paperBtn.textContent = "Paper";
    paperBtn.setAttribute("id","paperButton")
    const paperButton = document.querySelector("#paperButton")
    paperButton.addEventListener('click', () => {

        return playRound("paper",computerPlay(play));
  
  });

    const scissorsBtn = document.createElement("button");
    document.body.append(scissorsBtn);
    scissorsBtn.textContent = "Scissors";
    scissorsBtn.setAttribute("id","scissorsButton")
    const scissorsButton = document.querySelector("#scissorsButton")
    scissorsButton.addEventListener('click', () => {
      
      return playRound("scissors",computerPlay(play))

  })

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
