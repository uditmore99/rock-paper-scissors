function getComputerChoice() {
  randomNumber = Math.round(Math.random() * 2);
  let compChoice = ["rock", "paper", "scissors"];
  computerSelection = compChoice[randomNumber];
}

function getPlayerChoice() {
  playerSelection = prompt("Rock? Paper? Scissors?").toLowerCase();
}

//                    rock   paper  scissor
//                      1      2       3

function checkDiff() {
  let num1 = 0; //player
  let num2 = randomNumber + 1; //system
  if (playerSelection === "rock") {
    num1 = 1;
  } else if (playerSelection === "paper") {
    num1 = 2;
  } else if (playerSelection === "scissors") {
    num1 = 3;
  }

  return num1 - num2;
}

function playRound() {
  getPlayerChoice();
  console.log("Player chooses " + playerSelection);
  getComputerChoice();
  console.log("Computer chooses " + computerSelection);
  diff = checkDiff();

  if (computerSelection === playerSelection) {
    results = "Its a tie!";
    userScore += 1;
    compScore += 1;
  } else if (diff === 1 || diff === -2) {
    results = "You win! " + playerSelection + " beats " + computerSelection;
    userScore += 1;
  } else {
    results =
      "You lose ;__; " + computerSelection + " beats " + playerSelection;
    compScore += 1;
  }
  alert(results);
  return results;
}

let randomNumber = 0;
let computerSelection = "";
let playerSelection = "";
let diff = 0;
let results = "";
let compScore = 0;
let userScore = 0;

// console.log(playRound(playerSelection, computerSelection));

function game() {
  for (let i = 0; i < 3; i++) {
    console.log("Game: " + (i + 1));
    console.log(playRound(playerSelection, computerSelection));
    console.log(" ");
  }

  if (userScore > compScore) {
    alert("You won!\n Final Score is " + userScore + " : " + compScore);
  } else
    alert("You lose TT_TT\n Final Score is " + userScore + " : " + compScore);
}

game();
