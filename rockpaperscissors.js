console.log("Hello World!");

function getComputerChoice(){
    let randomNumber = Math.floor((Math.random() * 3) + 1);
    switch(randomNumber){
        case 1 : 
            return "Rock";
            break;
        case 2 :
            return "Paper";
            break;
        case 3 :
            return "Scissors";
            break;
    }
}

function playRound(playerSelection, computerSelection){
    if(playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors" || playerSelection.toLowerCase() === "paper" && computerSelection === "Rock"  || playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper")
    {
        return "You Win! " + playerSelection + " beats " + computerSelection;
    }
    else if(playerSelection.toLowerCase() === "rock" && computerSelection === "Paper" || playerSelection.toLowerCase() === "paper" && computerSelection === "Scissors"  || playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock")
    {
        return "You Lose! " + computerSelection + " beats " + playerSelection;
    }
    else
    {
        return "Its a draw";
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();

console.log(playRound(playerSelection, computerSelection));