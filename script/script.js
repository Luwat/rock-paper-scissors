//Create variables for rock, paper, scissors
const rock = "Rock";
const paper = "Paper";
const scissors = "Scissors";
//create a function for computer to play
function computerPlay(rock, paper, scissors) {
let pick = [rock, paper, scissors];
let randomPick = Math.floor(Math.random() * pick.length);

return pick[randomPick]; 
}

//create a function to compare human & computer selection
function playRound(playerSelection, computerSelection) {
    
    if (playerSelection.toLowerCase() === "rock") {
        playerSelection = rock
        console.log(playerSelection);
        if (computerSelection === paper) {
            console.log(computerSelection);
            console.log(`You lose! ${paper} beats ${rock}.`);
            return `You lose! ${paper} beats ${rock}.`
        } else if (computerSelection === rock) {
            console.log(computerSelection);
            console.log(`It is a tie!`);
            return `It is a tie!`
        } else if (computerSelection === scissors) {
            console.log(computerSelection);
            console.log(`You win! ${rock} beats ${scissors}.`);
            return `You win! ${rock} beats ${scissors}.`
        }
    }  
}
const playerSelection = "rock";
const computerSelection = computerPlay(rock, paper, scissors);

//compare choice or selection and decide the winner
//create a loop for game rounds 

const game = function() {
    
    let compScore = 1;
    let userScore = 1;
    let score = `player ${userScore} vs computer ${compScore}`
    for (i = 0; i < 5; i++){
        
        if (prompt("you choose rock") === playerSelection) {
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
        console.log("Computer won the game!");
    } else if (userScore > compScore) {
        console.log("You won the game");
    } else {
        console.log("Draw! Try again.");
    }
}

game();