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

//create a variabe asking for human's input
let humanInput = prompt(`${rock}? ${paper}? or ${scissors}?. Pls decide`)
//create a function for human's choice or selection
function humanPlay(rock, paper, scissors) {
    if (humanInput === null || humanInput === "") {
        return "Empty";
    } else if (humanInput.toLowerCase() === "rock") {
        return rock;
    } else if (humanInput.toLowerCase() === "paper") {
        return paper;
    } else if (humanInput.toLowerCase() === "scissors") {
        return scissors;
    } else {
        return "Invalid parameters";
    }
}

//create a function to compare human & computer selection
//decide the winner of the Round
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It is a tie";
    } else if (playerSelection === rock && computerSelection === paper) {
        return `You lose! ${paper} beats ${rock}.`;
    } else if (playerSelection === paper && computerSelection === rock) {
        return `You win! ${paper} beats ${rock}.`;
    } else if (playerSelection === rock && computerSelection === scissors) {
        return `You win! ${rock} beats ${scissors}.`;
    } else if (playerSelection === scissors && computerSelection === rock) {
       return `You lose! ${rock} beats ${scissors}.`;
    } else if (playerSelection === paper && computerSelection === scissors) {
        return `You lose! ${scissors} beats ${paper}.`;
    } else if (playerSelection === scissors && computerSelection === paper) {
        return `You win! ${scissors} beats ${paper}.`;
    }
}
const playerSelection = humanPlay(rock, paper, scissors);
const computerSelection = computerPlay(rock, paper, scissors);
console.log(computerSelection, playerSelection);


//create a loop for game rounds
