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
        playerSelection = rock;
        console.log(playerSelection);
        if (computerSelection === paper) {
            console.log(computerSelection);
            console.log(`You lose! ${paper} beats ${rock}.`);
        } else if (computerSelection === rock) {
            console.log(computerSelection);
            console.log(`It is a tie!`);
        } else if (computerSelection === scissors) {
            console.log(computerSelection);
            console.log(`You win! ${rock} beats ${scissors}.`);
        }
    } 
}
const playerSelection = "RoCk";
const computerSelection = computerPlay(rock, paper, scissors);

playRound(playerSelection, computerSelection);
//compare choice or selection and decide the winner
//create a loop for game rounds 