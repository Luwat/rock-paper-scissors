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
    } else if (humanInput === "Paper" || humanInput === "paper" || humanInput === "PAPER") {
        console.log(paper);
    } else if (humanInput === "Scissors" || humanInput === "scissors" || humanInput === "SCISSORS") {
        console.log(scissors);
    } else {
        console.log("nothing to show");
    }
}

humanPlay(rock, paper, scissors);
//compare choice or selection and decide the winner
//create a loop for game rounds 