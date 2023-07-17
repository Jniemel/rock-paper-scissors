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

function updateResult(buttonPressed) {
    let selection = buttonPressed;
    roundResult = playRound(selection, getComputerChoice())
    if (roundResult == 0) {
        alert("Draw!");
    } else if ( roundResult == 1) {
        playerPoints = playerPoints + 1;        
    } else if ( roundResult == -1) {
        computerPoints = computerPoints + 1;        
    }

    playerCount.textContent = 'Player score: ' + playerPoints;
    computerCount.textContent = 'Computer score: ' + computerPoints;

}

let playerPoints = 0;
let computerPoints = 0;
let pressed = '';

// Create references to buttons
const rockBtn = document.querySelector('#rock-btn');
const paperBtn = document.querySelector('#paper-btn');
const scissorsBtn = document.querySelector('#scissors-btn');
// Add eventlisteners
rockBtn.addEventListener('click', () => {
    pressed = 'rock';
    updateResult(pressed);
    if (playerPoints == 5 || computerPoints == 5) {
        if (playerPoints == 5) {
            alert('Game over! You win!!')
        } else if (computerPoints == 5) {
            alert('Game over! You lose!!!')
        }                
        playerPoints = 0;
        computerPoints = 0;
        playerCount.textContent = 'Player score: ' + playerPoints;
        computerCount.textContent = 'Computer score: ' + computerPoints;
    }
});

paperBtn.addEventListener('click', () => {
    pressed = 'paper';
    updateResult(pressed);
    if (playerPoints == 5 || computerPoints == 5) {
        if (playerPoints == 5) {
            alert('Game over! You win!!')
        } else if (computerPoints == 5) {
            alert('Game over! You lose!!!')
        }     
        playerPoints = 0;
        computerPoints = 0;
        playerCount.textContent = 'Player score: ' + playerPoints;
        computerCount.textContent = 'Computer score: ' + computerPoints;
    }
});

scissorsBtn.addEventListener('click', () => {
    pressed = 'scissors';
    updateResult(pressed);
    if (playerPoints == 5 || computerPoints == 5) {
        if (playerPoints == 5) {
            alert('Game over! You win!!')
        } else if (computerPoints == 5) {
            alert('Game over! You lose!!!')
        }     
        playerPoints = 0;
        computerPoints = 0;
        playerCount.textContent = 'Player score: ' + playerPoints;
        computerCount.textContent = 'Computer score: ' + computerPoints;
    }
});

// Create reference to results container
const results = document.querySelector('#results');
// Create new div and store it in 'resultContent'
const resultContent = document.createElement('div');
// Add class
resultContent.classList.add('result');
// Create lastRound div
const playerCount = document.createElement('div');
playerCount.classList.add('result-text');
playerCount.textContent = 'Player score: ' + playerPoints;
// Create runningCount
const computerCount = document.createElement('div');
computerCount.classList.add('result-text');
computerCount.textContent = 'Computer score: ' + computerPoints;

results.appendChild(resultContent);
resultContent.appendChild(playerCount);
resultContent.appendChild(computerCount);


// function game() {
//     let points = 0;
//     let result = 0;
//     let selection = "";    
//     for (let i = 0; i < 5; i++) {
//         selection = prompt("Rock, paper or scissors?");
//         result = playRound(selection, getComputerChoice())
//         if (result == -1) {
//             points = points - 1;
//             console.log("You lost! -1 point!");
//         } else if (result == 0) {
//             console.log("Draw! 0 points!")
//         } else if (result == 1) {
//             points = points + 1;
//             console.log("You win! +1 point!")
//         }        
//     }
//     if (points > 0) {
//         console.log("You won the game!")
//     } else if (points == 0) {
//         console.log("The game was draw!")
//     } else if ( points < 0) {
//         console.log("You lost the game!")
//     }
// }