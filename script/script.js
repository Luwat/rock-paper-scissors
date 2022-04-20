//Create variables for rock, paper, scissors
const rock = 'Rock';
const paper = 'Paper';
const scissors = 'Scissors';

const buttons = document.querySelectorAll('.btn');




//create a function for computer to play
const computerPlay = (rock, paper, scissors) => {
    let pick = [rock, paper, scissors];
let randomPick = Math.floor(Math.random() * pick.length);

return pick[randomPick]; 
};

//create a function to compare human & computer selection
const playRound = (playerSelection, computerSelection) => {
    // playerSelection.target.innerText
    computerSelection = computerPlay(rock, paper, scissors);
    
    if (playerSelection.target.innerText ===  'Rock') {
        console.log(playerSelection.target.innerText);
        if (computerSelection === paper) {
            console.log(`You lose! ${paper} beats ${rock}.`);
            return `You lose! ${paper} beats ${rock}.`;
        } else if (computerSelection === rock) {
            console.log(`It is a tie!`);
            return `It is a tie!`;
        } else if (computerSelection === scissors) {
            console.log(`You win! ${rock} beats ${scissors}.`);
            return `You win! ${rock} beats ${scissors}.`;
        }
    } else if (playerSelection.target.innerText === 'Paper') {
        console.log(playerSelection.target.innerText);
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
        console.log(playerSelection.target.innerText);
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


buttons.forEach(button => button.addEventListener('click', playRound), this)
// rockBtn.addEventListener('click', playRound);
// paperBtn.addEventListener('click', playRound);
// scissorsBtn.addEventListener('click', playRound)
//compare choice or selection and decide the winner 

// const game = () => {
    
//     let compScore = 0;
//     let userScore = 0;
//     let score = `player ${userScore} vs computer ${compScore}`;
    
//     //create a loop for game rounds
//     for (i = 1; i <= 5; i++){

//         let input = prompt("Choose Rock, Paper or Scissors!");

//         if ( input === playerSelection) {
//             playRound(playerSelection, computerSelection);
//             if (playRound(playerSelection, computerSelection).includes("You win")) {
//                 score = `player ${userScore++} vs computer ${compScore}`
//             } else if (playRound(playerSelection, computerSelection).includes("You lose")) {
//                 score = `player ${userScore} vs computer ${compScore++}`
//             }else {
//                 score = `player ${userScore} vs computer ${compScore}`
//             }
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

// game();