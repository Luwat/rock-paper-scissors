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

console.log(computerPlay(rock, paper, scissors));

//create a variabe asking for human's input
let humanInput = prompt(`${rock}? ${paper}? or ${scissors}?. Pls decide`)

//create a function for human's choice or selection
function humanPlay(rock, paper, scissors) {
    if (humanInput === "Rock" || humanInput === "rock" || humanInput === "ROCK") {
        console.log(rock);
        return rock;
    } else if (humanInput === "Paper" || humanInput === "paper" || humanInput === "PAPER") {
        console.log(paper);
        return paper;
    } else if (humanInput === "Scissors" || humanInput === "scissors" || humanInput === "SCISSORS") {
        console.log(scissors);
        return scissors;
    } else {
        console.log("nothing to show");
    }
}

//create a function to compare human & computer selection
function playRound(playerSelection, computerSelection) {
    if (playerSelection == computerSelection) {
        console.log("it is a tie!");
        return "it is a tie";
    }
}
const playerSelection = humanPlay(rock, paper, scissors);
const computerSelection = computerPlay(rock, paper, scissors);

playRound(playerSelection, computerSelection);
//compare choice or selection and decide the winner
//create a loop for game rounds 