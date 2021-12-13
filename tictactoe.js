function randomInteger() {
  return Math.floor(Math.random() * (9 - 1 + 1) + 1);
}

function computerPlay() {
  let computerChoice = randomInteger();
  let computerPicked = "";
  if (computerChoice < 4) {
    computerPicked = "Rock";
  } else if (computerChoice < 7) {
    computerPicked = "Paper";
  } else computerPicked = "Scissors";

  return computerPicked;
}

// function playerPlay(input) {
//   if (input == 1) return "Rock";
//   if (input == 2) return "Paper";
//   if (input == 3) return "Scissors";
// }

function playRound(playerSelection, computerSelection) {
  roundDescription.textContent = "";
  if (playerSelection == "Rock" && computerSelection == "Scissors") {
    roundDescription.textContent =
      "You Win!" + playerSelection + " beats " + computerSelection;
    playerMatchesWon++;
  }
  if (playerSelection == "Rock" && computerSelection == "Rock") {
    roundDescription.textContent = "It's a Draw!!";
  }
  if (playerSelection == "Rock" && computerSelection == "Paper") {
    roundDescription.textContent =
      "You lose!" + computerSelection + " beats " + playerSelection;
    computerMatchesWon++;
  }
  if (playerSelection == "Paper" && computerSelection == "Rock") {
    roundDescription.textContent =
      "You Win!" + playerSelection + " beats " + computerSelection;
    playerMatchesWon++;
  }
  if (playerSelection == "Paper" && computerSelection == "Paper") {
    roundDescription.textContent = "It's a Draw!!";
  }
  if (playerSelection == "Paper" && computerSelection == "Scissors") {
    roundDescription.textContent =
      "You lose!" + computerSelection + " beats " + playerSelection;
    computerMatchesWon++;
  }
  if (playerSelection == "Scissors" && computerSelection == "Paper") {
    roundDescription.textContent =
      "You Win!" + playerSelection + " beats " + computerSelection;
    playerMatchesWon++;
  }
  if (playerSelection == "Scissors" && computerSelection == "Scissors") {
    roundDescription.textContent = "It's a Draw!!";
  }
  if (playerSelection == "Scissors" && computerSelection == "Rock") {
    roundDescription.textContent =
      "You lose!" + computerSelection + " beats " + playerSelection;
    computerMatchesWon++;
  }
  updateMatchStatistics();
  endGame();
  return "End Round";
}

// function game() {
//   for (totalGames = 0; totalGames < 5; totalGames++) {
//     let choice = prompt(
//       "Which do you choose? 1 = rock, 2 = paper, 3 = scissors"
//     );
//     playRound(playerPlay(choice), computerPlay());
//   }
// }

// game();

const rockButton = document.querySelector(".rockButton");
const paperButton = document.querySelector(".paperButton");
const scissorsButton = document.querySelector(".scissorsButton");

rockButton.addEventListener("click", () => playRound("Rock", computerPlay()));
paperButton.addEventListener("click", () => playRound("Paper", computerPlay()));
scissorsButton.addEventListener("click", () =>
  playRound("Scissors", computerPlay())
);
const roundDescription = document.querySelector(".roundDescription");
let remainingMatches = 5;
let playerMatchesWon = 0;
let computerMatchesWon = 0;
const matchesRemainingSpan = document.querySelector(".remainingMatches");
const playerScore = document.querySelector(".playerScore");
const computerScore = document.querySelector(".computerScore");
const gameOver = document.querySelector("#gameOver");
const allButtons = document.getElementById("allButtons");

function updateMatchStatistics() {
  remainingMatches--;
  matchesRemainingSpan.textContent = remainingMatches;
  playerScore.textContent = playerMatchesWon;
  computerScore.textContent = computerMatchesWon;
}

function endGame() {
  if (remainingMatches == 0) {
    let whoWon = "";
    allButtons.remove();
    playerMatchesWon > computerMatchesWon
      ? (whoWon = "You")
      : (whoWon = "The computer");
    gameOver.textContent = "Game over! " + whoWon + " won!";
  }
}
