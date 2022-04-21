//Create variables for rock, paper, scissors
const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';
let score = document.querySelector('.score');
let playerScore = document.querySelector('.player-score');
let compScore = document.querySelector('.computer-score');
let playerWin = document.querySelector('.play-result');
let computerWin = document.querySelector('.play-result');
let draw = document.querySelector('.play-result');
let winner = document.querySelector('.winner')


const buttons = document.querySelectorAll('.btn');




//create a function for computer to play
const computerPlay = (rock, paper, scissors) => {
    let pick = [rock, paper, scissors];
let randomPick = Math.floor(Math.random() * pick.length);

return pick[randomPick]; 
};

const declareWinner = (playerSelection, computerSelection) => {
    for (let i= 1; i <= 5; i++) {
        if (playerScore.innerText == 5) {
            winner.textContent = `Congratulations! You won the game.`   
        } else if (compScore.innerText == 5) {
            winner.textContent = `Oops! Computer won the game.`
        }
    }
};

//create a function to compare human & computer selection
const playRound = (playerSelection, computerSelection) => {
    playerSelection.target.innerText;
    computerSelection = computerPlay(rock, paper, scissors);
    if (playerSelection.target.innerText ===  'Rock') {
        if (computerSelection === paper) {
            compScore.innerText++;
            return computerWin.textContent = `You lose! ${paper} beats ${rock}.`;
        } else if (computerSelection === rock) {
            return draw.textContent = `It is a tie!`;
        } else if (computerSelection === scissors) {
            playerScore.innerText++
            return playerWin.textContent = `You win! ${rock} beats ${scissors}.`;
        }
    } else if (playerSelection.target.innerText === 'Paper') {
        if (computerSelection === paper) {
            return draw.textContent = `It is a tie!`;
        } else if (computerSelection === rock) {
            playerScore.innerText++
            return playerWin.textContent = `You win! ${paper} beats ${rock}.`
        } else if (computerSelection === scissors) {
            compScore.innerText++;
            return computerWin.textContent = `You lose! ${scissors} beats ${paper}.`;
        }
    } else if (playerSelection.target.innerText === 'Scissors') {
        if (computerSelection === scissors) {
            return draw.textContent = `It is a tie!`;
        } else if (computerSelection === rock) {
            compScore.innerText++;
            return computerWin.textContent = `You lose! ${rock} beats ${scissors}.`
        } else if (computerSelection === paper) {
            playerScore.innerText++
            return playerWin.textContent = `You win! ${scissors} beats ${paper}.`;  
        }
    }
};



buttons.forEach(button => button.addEventListener('click', playRound))
buttons.forEach(button => button.addEventListener('click', declareWinner))