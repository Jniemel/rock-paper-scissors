function getComputerChoice() {
    let picks = ["rock", "paper", "scissors"];
    let random = Math.floor((Math.random() * picks.length));
    let randomPick = picks[random];

    return randomPick; 
}

function playRound(playerSelection, computerSelection) {
   let pSelected = playerSelection.toLowerCase();
   
   if (pSelected == "rock" && computerSelection == "rock") {
    return 0;
   } else if ( pSelected == "rock" && computerSelection == "scissors") {
    return 1;
   } else if ( pSelected == "rock" && computerSelection == "paper") {
    return -1;
   } else if ( pSelected == "paper" && computerSelection == "rock") {
    return 1;
   } else if ( pSelected == "paper" && computerSelection == "paper") {
    return 0
   } else if ( pSelected == "paper" && computerSelection == "scissors") {
    return -1;
   } else if ( pSelected == "scissors" && computerSelection == "rock") {
    return -1;
   } else if ( pSelected == "scissors" && computerSelection == "scissors") {
    return 0;
   } else if ( pSelected == "scissors" && computerSelection == "paper") {
    return 1;
   }

}

function game() {
    let points = 0;
    let result = 0;
    let selection = "";    
    for (let i = 0; i < 5; i++) {
        selection = prompt("Rock, paper or scissors?");
        result = playRound(selection, getComputerChoice())
        if (result == -1) {
            points = points - 1;
            console.log("You lost! -1 point!");
        } else if (result == 0) {
            console.log("Draw! 0 points!")
        } else if (result == 1) {
            points = points + 1;
            console.log("You win! +1 point!")
        }        
    }
    if (points > 0) {
        console.log("You won the game!")
    } else if (points == 0) {
        console.log("The game was draw!")
    } else if ( points < 0) {
        console.log("You lost the game!")
    }
}