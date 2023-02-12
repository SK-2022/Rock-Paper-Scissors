function getComputerChoice() {
    let options = ['rock','paper','scissors']

    // Returns element at index 0, 1 or 2 from the options array randomly 
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

    if(computerSelection === playerSelection){
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
    //Displays scores on the DOM
    playerScoreCount.innerText = playerScore
    computerScoreCount.innerText = computerScore

    if(computerScore < 5 && playerScore < 5) {
        finalMatchResult.innerText = "No winner just yet...."
    } else if(playerScore === 5) {
        finalMatchResult.innerText = "JACKPOT BABY, YOU WON!"
    } else if(computerScore === 5) {
        finalMatchResult.innerText = "UNDER THE BRIDGE FOR YOU! YOU LOST!"
    } else {
        finalMatchResult.innerText = "The battle shall continue for eternity"
    }

}

const rock = document.querySelector('.rock-selection')

rock.addEventListener('click', () => {
    playRound(rock.innerText, getComputerChoice())
})

const paper = document.querySelector('.paper-selection')

paper.addEventListener('click', () => {
    playRound(paper.innerText, getComputerChoice())
})

const scissors = document.querySelector('.scissors-selection')
//Does the same as above, simply with a slightly different syntax
scissors.addEventListener('click', function (e) {
    playRound(scissors.innerText, getComputerChoice())
})