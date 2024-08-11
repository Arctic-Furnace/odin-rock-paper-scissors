console.log("Welcome to Rock, Paper, Scissors");

const gameMessage = document.querySelector('#gameMessage');
   
const buttonRock = document.querySelector('#rock');
const buttonPaper = document.querySelector('#paper');
const buttonScissors = document.querySelector('#scissors');

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

function removeButtons(){
    buttonRock.remove();
    buttonPaper.remove();
    buttonScissors.remove();
}

function checkWinner(playerScore, computerScore){
    if(playerScore == 5){
        gameMessage.textContent = "You Win the game!";
        removeButtons();
    }
    else if(computerScore == 5){
        gameMessage.textContent = "You Lose the game!";
        removeButtons();
    }
}

function playRound(playerSelection, computerSelection){
    const gameMessage = document.querySelector('#gameMessage');
    if(playerSelection.toLowerCase() === "rock" && computerSelection === "Scissors" || playerSelection.toLowerCase() === "paper" && computerSelection === "Rock"  || playerSelection.toLowerCase() === "scissors" && computerSelection === "Paper")
    {
        //console.log("You Win! " + playerSelection + " beats " + computerSelection)
        gameMessage.textContent = "You Win! " + playerSelection + " beats " + computerSelection;
        return "Win";
    }
    else if(playerSelection.toLowerCase() === "rock" && computerSelection === "Paper" || playerSelection.toLowerCase() === "paper" && computerSelection === "Scissors"  || playerSelection.toLowerCase() === "scissors" && computerSelection === "Rock")
    {
        //console.log("You Lose! " + computerSelection + " beats " + playerSelection)
        gameMessage.textContent = "You Lose! " + computerSelection + " beats " + playerSelection;
        return "Lose";
    }
    else if(playerSelection.toLowerCase() === "rock" && computerSelection === "Rock" || playerSelection.toLowerCase() === "paper" && computerSelection === "Paper"  || playerSelection.toLowerCase() === "scissors" && computerSelection === "Scissors")
    {
        //console.log("It's a draw");
        gameMessage.textContent = "It's a draw";
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
    const playerScoreSpan = document.querySelector('#playerScore');
    playerScoreSpan.textContent = playerScore;

    let computerScore = 0;
    const computerScoreSpan = document.querySelector('#computerScore');
    computerScoreSpan.textContent = computerScore;


    buttonRock.addEventListener('click', () => {
        playerSelection = "rock";
        let computerSelection = getComputerChoice();
        let outcome = playRound(playerSelection,computerSelection);
        if(outcome === "Win")
        {
            playerScore++;
            playerScoreSpan.textContent = playerScore;
        }
        else if(outcome === "Lose")
        {
            computerScore++;
            computerScoreSpan.textContent = computerScore;
        }
        checkWinner(playerScore, computerScore);
    });

    buttonPaper.addEventListener('click', () => {
        playerSelection = "paper";
        let computerSelection = getComputerChoice();
        let outcome = playRound(playerSelection,computerSelection);
        if(outcome === "Win")
        {
            playerScore++;
            playerScoreSpan.textContent = playerScore;
        }
        else if(outcome === "Lose")
        {
            computerScore++;
            computerScoreSpan.textContent = computerScore;
        }
        checkWinner(playerScore, computerScore);
    });

    buttonScissors.addEventListener('click', () => {
        playerSelection = "scissors";
        let computerSelection = getComputerChoice();
        let outcome = playRound(playerSelection,computerSelection);
        if(outcome === "Win")
        {
            playerScore++;
            playerScoreSpan.textContent = playerScore;
        }
        else if(outcome === "Lose")
        {
            computerScore++;
            computerScoreSpan.textContent = computerScore;
        }
        checkWinner(playerScore, computerScore);
    });
}

game();