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

function playerPlay(input) {
  if (input == 1) return "Rock";
  if (input == 2) return "Paper";
  if (input == 3) return "Scissors";
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection == "Rock" && computerSelection == "Scissors") {
    console.log("You Win!" + playerSelection + " beats " + computerSelection);
  }
  if (playerSelection == "Rock" && computerSelection == "Rock") {
    console.log("It's a Draw!!");
  }
  if (playerSelection == "Rock" && computerSelection == "Paper") {
    console.log("You lose!" + computerSelection + " beats " + playerSelection);
  }
  if (playerSelection == "Paper" && computerSelection == "Rock") {
    console.log("You Win!" + playerSelection + " beats " + computerSelection);
  }
  if (playerSelection == "Paper" && computerSelection == "Paper") {
    console.log("It's a Draw!!");
  }
  if (playerSelection == "Paper" && computerSelection == "Scissors") {
    console.log("You lose!" + computerSelection + " beats " + playerSelection);
  }
  if (playerSelection == "Scissors" && computerSelection == "Paper") {
    console.log("You Win!" + playerSelection + " beats " + computerSelection);
  }
  if (playerSelection == "Scissors" && computerSelection == "Scissors") {
    console.log("It's a Draw!!");
  }
  if (playerSelection == "Scissors" && computerSelection == "Rock") {
    console.log("You lose!" + computerSelection + " beats " + playerSelection);
  }
  return "End Round";
}

function game() {
  for (totalGames = 0; totalGames < 5; totalGames++) {
    let choice = prompt(
      "Which do you choose? 1 = rock, 2 = paper, 3 = scissors"
    );
    playRound(playerPlay(choice), computerPlay());
  }
}

game();
