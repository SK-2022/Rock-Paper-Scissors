function getComputerChoice() {
    let options = ['rock','paper','scissors']

    // Returns element at index 0, 1 or 2(rock, paper, or scissors) from the options array above randomly 
    return options[Math.floor(Math.random() * 3)]
}

let computerScore = 0
let playerScore = 0

const playerScoreCount = document.querySelector('.player-score')
const computerScoreCount = document.querySelector('.computer-score')
const matchResult = document.querySelector('.match-result')
const finalMatchResult = document.querySelector('.final-match-result')

function playRound (playerSelection, computerSelection){
    computerSelection = getComputerChoice()
    //Gets playerSelection and converts the input to lowercase.
    playerSelection = playerSelection.toLowerCase()
    

     //Logic to display winner/loser and game continuation as well as stop the function. 
     if(computerScore < 5 && playerScore < 5) {

        //The rules of rock paper scissors
        if (computerSelection === playerSelection){
            matchResult.innerText = "Heads lock! It's a tie!!"
        } else if(computerSelection === 'rock' && playerSelection === "paper"){
            playerScore++;
            matchResult.innerText = "Paper beats Rock! You win!"
        } else if(computerSelection === 'paper' && playerSelection === "scissors"){
            playerScore++;
            matchResult.innerText = "Scissors beats Paper! You win!"
        } else if(computerSelection === 'scissors' && playerSelection === 'rock'){
            playerScore++;
            matchResult.innerText = "Rock beats paper! You win"
        } else if(computerSelection === 'rock' && playerSelection === 'scissors') {
            computerScore++;
            matchResult.innerText = "You lose! Scissors beats Paper"
        } else if(computerSelection === 'paper' && playerSelection === 'rock'){
            computerScore++;
            matchResult.innerText = "You lose! Paper beats Rock"
        } else if(computerSelection === 'scissors' && playerSelection === 'paper') {
            computerScore++;
            matchResult.innerText = "You lose! Scissors beats paper"
        } else {
            matchResult.innerText = "Input Error"
        }
    }
    // Winner and loser of the entire game will be determined with these conditions
    if (playerScore === 5) {
        finalMatchResult.innerText = "JACKPOT BABY, YOU WON!"
    } else if(computerScore === 5) {
        finalMatchResult.innerText = "UNDER THE BRIDGE FOR YOU! YOU LOST!"
    } 

    //Displays scores on the DOM
    playerScoreCount.innerText = playerScore
    computerScoreCount.innerText = computerScore
}

//Selects the relevant class and gives the ability to make the playround function occur when the images are clicked.
const rock = document.querySelector('.rock-selection')

rock.addEventListener('click', () => {
    playRound('rock', getComputerChoice())
})

const paper = document.querySelector('.paper-selection')

paper.addEventListener('click', () => {
    playRound('paper', getComputerChoice())
})

const scissors = document.querySelector('.scissors-selection')
//The same as the above event listeners, simply with a slightly different syntax around the function.
scissors.addEventListener('click', function (e) {
    playRound('paper', getComputerChoice())
})


const playAgainButton = document.querySelector('.play-again-button')
playAgainButton.addEventListener('click', () => {
    window.location.reload()
})