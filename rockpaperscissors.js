console.log("Welcome to Rock, Paper, Scissors");

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
        console.log("You Win! " + playerSelection + " beats " + computerSelection)
        return "Win";
    }
    else if(playerSelection.toLowerCase() === "rock" && computerSelection === "Paper" || playerSelection.toLowerCase() === "paper" && computerSelection === "Scissors"  || playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock")
    {
        console.log("You Lose! " + computerSelection + " beats " + playerSelection)
        return "Lose";
    }
    else if(playerSelection.toLowerCase() === "rock" && computerSelection === "Rock" || playerSelection.toLowerCase() === "paper" && computerSelection === "Paper"  || playerSelection.toLowerCase() === "scissors" && computerSelection === "Scissors")
    {
        console.log("It's a draw");
        return "Draw";
    }
    else
    {
        console.log("That's not a valid option");
        return "Invalid";
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    for(let i = 1;i < 6;i++)
    {
        let playerSelection = prompt("Rock, Paper or Scissors?");
        let computerSelection = getComputerChoice();
        let outcome = playRound(playerSelection,computerSelection);
        if(outcome === "Win")
        {
            playerScore++;
        }
        else if(outcome === "Lose")
        {
            computerScore++;
        }
        else
        {
            i--;
        }
    }
    if(playerScore > computerScore){
        console.log("You Win!");
    }
    else{
        console.log("You Lose!");
    }
}

game();