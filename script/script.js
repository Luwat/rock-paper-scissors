//Create variables for rock, paper, scissors
const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";
//create a function for computer to play
const computerPlay = (rock, paper, scissors) => {
let pick = [rock, paper, scissors];
let randomPick = Math.floor(Math.random() * pick.length);

return pick[randomPick]; 
}

//create a function to compare human & computer selection
const playRound = (playerSelection, computerSelection) => {
    
    if (playerSelection.toLowerCase() === "rock" ) {
        playerSelection = rock;
        // console.log(playerSelection);
        if (computerSelection === paper) {
            // console.log(computerSelection);
            // console.log(`You lose! ${paper} beats ${rock}.`);
            return `You lose! ${paper} beats ${rock}.`
        } else if (computerSelection === rock) {
            // console.log(computerSelection);
            // console.log(`It is a tie!`);
            return `It is a tie!`;
        } else if (computerSelection === scissors) {
            // console.log(computerSelection);
            // console.log(`You win! ${rock} beats ${scissors}.`);
            return `You win! ${rock} beats ${scissors}.`;
        }
    } else if (playerSelection.toLowerCase() === "paper") {
        playerSelection = paper;
        // console.log(playerSelection);
        if (computerSelection === paper) {
            // console.log(computerSelection);
            // console.log(`It is a tie!`);
            return `It is a tie!`;
            
        } else if (computerSelection === rock) {
            // console.log(computerSelection);
            // console.log(`You win! ${paper} beats ${rock}.`);
            return `You win! ${paper} beats ${rock}.`
        } else if (computerSelection === scissors) {
            // console.log(computerSelection);
            // console.log(`You lose! ${scissors} beats ${paper}.`);
            return `You lose! ${scissors} beats ${paper}.`;
        }
    } else if (playerSelection.toLowerCase() === "scissors") {
        playerSelection = scissors;
        // console.log(playerSelection);
        if (computerSelection === scissors) {
            // console.log(computerSelection);
            // console.log(`It is a tie!`);
            return `It is a tie!`;
            
        } else if (computerSelection === rock) {
            // console.log(computerSelection);
            // console.log(`You lose! ${rock} beats ${scissors}.`);
            return `You lose! ${rock} beats ${scissors}.`
        } else if (computerSelection === paper) {
            // console.log(computerSelection);
            // console.log(`You win! ${scissors} beats ${paper}.`);
            return `You win! ${scissors} beats ${paper}.`;
        }
    }
} 
let playerSelection;
const computerSelection = computerPlay(rock, paper, scissors);

//compare choice or selection and decide the winner
//create a loop for game rounds 

const game = () => {
    
    let compScore = 0;
    let userScore = 0;
    let score = `player ${userScore} vs computer ${compScore}`;
    for (i = 1; i <= 5; i++){
        let input = prompt("you choose rock");
        playerSelection = input;
        if ( input === playerSelection) {
            playRound(playerSelection, computerSelection);
            if (playRound(playerSelection, computerSelection).includes("You win")) {
                score = `player ${userScore++} vs computer ${compScore}`
            } else if (playRound(playerSelection, computerSelection).includes("You lose")) {
                score = `player ${userScore} vs computer ${compScore++}`
            }else {
                score = `player ${userScore} vs computer ${compScore}`
            }
        }
        console.log(score);
    }
    if (compScore > userScore) {
        console.log(`The final score is ${score}.`);
        console.log("Computer won the game!");
    } else if (userScore > compScore) {
        console.log(`The final score is ${score}.`);
        console.log("You won the game");
    } else {
        console.log(`The final score is ${score}.`);
        console.log("Draw! Try again.");
    }
}

game();