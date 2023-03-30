function getComputerChoice() {
    let picks = ["rock", "paper", "scissors"];
    let random = Math.floor((Math.random() * picks.length));
    let randomPick = picks[random];

    return randomPick; 
}

function playRound(playerSelection, computerSelection) {
   let pSelected = playerSelection.toLowerCase();
   
   if (pSelected == "rock" && computerSelection == "rock") {
    return "Draw! Rock against rock!";
   } else if ( pSelected == "rock" && computerSelection == "scissors") {
    return "You win! Rock beats scissors!";
   } else if ( pSelected == "rock" && computerSelection == "paper") {
    return "You lose! Rock loses against paper!";
   } else if ( pSelected == "paper" && computerSelection == "rock") {
    return "You win! Paper beats rock!";
   } else if ( pSelected == "paper" && computerSelection == "paper") {
    return "Draw! Paper agaisnt paper!";
   } else if ( pSelected == "paper" && computerSelection == "scissors") {
    return "You lose! Paper loses to scissors!";
   } else if ( pSelected == "scissors" && computerSelection == "rock") {
    return "You lose! Scissors lose to rock!";
   } else if ( pSelected == "scissors" && computerSelection == "scissors") {
    return "Draw! Scissors against scissors!";
   } else if ( pSelected == "scissors" && computerSelection == "paper") {
    return "You win! Scissors beat paper!";
   }

}

function game() {
    
}