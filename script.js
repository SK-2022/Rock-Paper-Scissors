function getComputerChoice() {
    let options = ['rock','paper','scissors']
    // Returns index 0, 1 or 2 from the options array randomly 
    return options[Math.floor(Math.random() * 3)]
}

let computerScore = 0
let playerScore = 0

function playRound (playerSelection, computerSelection){
    computerSelection = getComputerChoice()
    //Gets playerSelection from a prompt which converts the input to a lowercase string.
    playerSelection = prompt('Choose your weapon! Rock Paper Scissors').toLowerCase()

    if(computerSelection === playerSelection){
        console.log( "Heads lock! It's a tie!!")
    } else if(computerSelection === 'rock' && playerSelection === "paper"){
        playerScore++;
        console.log( "Paper beats Rock! You win!")
    } else if(computerSelection === 'paper' && playerSelection === "scissors"){
        playerScore++;
        console.log( "Scissors beats Paper! You win!")
    } else if(computerSelection === 'scissors' && playerSelection === 'rock'){
        playerScore++;
        console.log( "Rock beats paper! You win")
    } else if(computerSelection === 'rock' && playerSelection === 'scissors') {
        computerScore++;
        console.log( "You lose! Scissors beats Paper")
    } else if(computerSelection === 'paper' && playerSelection === 'rock'){
        computerScore++;
        console.log( "You lose! Paper beats Rock")
    } else if(computerSelection === 'scissors' && playerSelection === 'paper') {
        computerScore++;
        console.log( "You lose! Scissors beats paper")
    } else {
        console.log( "Input Error")
    }

}

function game(numberOfRounds){
    for (let i = 0; i < numberOfRounds; i++){
        playRound()
    }
    if(playerScore === computerScore) {
        console.log('OMG Its a tie!')
    } else if(playerScore > computerScore) {
        console.log('JACKPOT BABY, YOU WON!')
    } else if(playerScore < computerScore){
        console.log('UNDER THE BRIDGE FOR YOU. YOU LOST!')
    } else{
        console.log('This function is broken!')
    }
}

console.log(game(5))
