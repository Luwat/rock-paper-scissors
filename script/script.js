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
    if (humanInput.toLowerCase() === "rock") {
        console.log(rock);
        return rock;
    } else if (humanInput.toLowerCase() === "paper") {
        console.log(paper);
        return paper;
    } else if (humanInput.toLowerCase() === "scissors") {
        console.log(scissors);
        return scissors;
    } else {
        console.log("nothing to show");
        return "nothing to show";
    }
}

//create a function to compare human & computer selection
function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It is a tie");
    } else if (playerSelection === rock && computerSelection === paper) {
        console.log(`You lose! ${paper} beats ${rock}.`);
    } else if (playerSelection === paper && computerSelection === rock) {
        console.log(`You win! ${paper} beats ${rock}.`);
    } else if (playerSelection === rock && computerSelection === scissors) {
        console.log(`You win! ${rock} beats ${scissors}.`);
    } else if (playerSelection === scissors && computerSelection === rock) {
        console.log(`You lose! ${rock} beats ${scissors}.`);
    } else if (playerSelection === paper && computerSelection === scissors) {
        console.log(`You lose! ${scissors} beats ${paper}.`);
    } else if (playerSelection === scissors && computerSelection === paper) {
        console.log(`You win! ${scissors} beats ${paper}.`);
    }
}
const playerSelection = humanPlay(rock, paper, scissors);
const computerSelection = computerPlay(rock, paper, scissors);
console.log(computerSelection);
console.log(playerSelection);

playRound(playerSelection, computerSelection);
//compare choice or selection and decide the winner
//create a loop for game rounds 