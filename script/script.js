//Create variables for rock, paper, scissors
const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';
let score = document.querySelector('.score');
let playerScore = document.querySelector('.playerscore');
let compScore = document.querySelector('.compscore');
let playerWin = document.querySelector('.play-result');
let computerWin = document.querySelector('.play-result');
let draw = document.querySelector('.play-result');


const buttons = document.querySelectorAll('.btn');




//create a function for computer to play
const computerPlay = (rock, paper, scissors) => {
    let pick = [rock, paper, scissors];
let randomPick = Math.floor(Math.random() * pick.length);

return pick[randomPick]; 
};

//create a function to compare human & computer selection
const playRound = (playerSelection, computerSelection) => {
    playerSelection.target.innerText;
    computerSelection = computerPlay(rock, paper, scissors);
    
    if (playerSelection.target.innerText ===  'Rock') {
        if (computerSelection === paper) {
            
            
            return computerWin.textContent = `You lose! ${paper} beats ${rock}.`;
        } else if (computerSelection === rock) {
                        
            return draw.textContent = `It is a tie!`;
        } else if (computerSelection === scissors) {
            
            
            return playerWin.textContent = `You win! ${rock} beats ${scissors}.`;
        }
    } else if (playerSelection.target.innerText === 'Paper') {
        if (computerSelection === paper) {
            console.log(`It is a tie!`);
            return `It is a tie!`;
            
        } else if (computerSelection === rock) {
            console.log(`You win! ${paper} beats ${rock}.`);
            return `You win! ${paper} beats ${rock}.`
        } else if (computerSelection === scissors) {
            console.log(`You lose! ${scissors} beats ${paper}.`);
            return `You lose! ${scissors} beats ${paper}.`;
        }
    } else if (playerSelection.target.innerText === 'Scissors') {
        if (computerSelection === scissors) {
            console.log(`It is a tie!`);
            return `It is a tie!`;
            
        } else if (computerSelection === rock) {
            console.log(`You lose! ${rock} beats ${scissors}.`);
            return `You lose! ${rock} beats ${scissors}.`
        } else if (computerSelection === paper) {
            console.log(`You win! ${scissors} beats ${paper}.`);
            return `You win! ${scissors} beats ${paper}.`;
        }
    }
};


//compare choice or selection and decide the winner 

// const game = (playerSelection, computerSelection) => {
    
//     let compScore = 0;
//     let userScore = 0;
//     let score = `player ${userScore} vs computer ${compScore}`;
//     playerSelection.target.innerText
//     //create a loop for game rounds
//     for (i = 1; i <= 5; i++){

        
        
//         if (playRound(playerSelection, computerSelection).includes("You win")) {
//             score += `player ${userScore++} vs computer ${compScore}`
//         } else if (playRound(playerSelection, computerSelection).includes("You lose")) {
//             score += `player ${userScore} vs computer ${compScore++}`
//         }else {
//             score += `player ${userScore} vs computer ${compScore}`
//         }
//         console.log(score);
//     }
//     if (compScore > userScore) {
//         console.log(`The final score is ${score}.`);
//         console.log("Computer won the game!");
//     } else if (userScore > compScore) {
//         console.log(`The final score is ${score}.`);
//         console.log("You won the game");
//     } else {
//         console.log(`The final score is ${score}.`);
//         console.log("Draw! Try again.");
//     }
// };

buttons.forEach(button => button.addEventListener('click', playRound))
// game();