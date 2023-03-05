let randomNumber = undefined;
let computerSelection = "";
let playerSelection = "";
let diff = undefined;
let results = "";
let compScore = 0;
let userScore = 0;

var userClickedOn = "";
var playerImg;
var computerImg;

const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");

const imgDisplay = document.getElementById("gmbrd");

const playerImgDisplay = document.getElementById("playerGame");
const computerImgDisplay = document.getElementById("computerGame");

const rock = document.getElementById("rockImg");
const paper = document.getElementById("paperImg");
const scissors = document.getElementById("scissorsImg");

const resultBoard = document.getElementById("resultBoard");

//below is game logic code

function getComputerChoice() {
  return new Promise((resolve) => {
    randomNumber = Math.round(Math.random() * 2);
    let compChoice = ["rock", "paper", "scissors"];
    computerSelection = compChoice[randomNumber];
    if (computerSelection.length > 0) {
      resolve();
    }
  });
}

async function getPlayerChoice() {
  // playerSelection = prompt("Rock? Paper? Scissors?").toLowerCase();
  await rpsEventListeners();
}

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

function roundResult() {
  if (computerSelection === playerSelection) {
    results = "Its a tie!";
    userScore += 1;
    compScore += 1;
    imgDisplay.style.backgroundColor = "black";
  } else if (diff === 1 || diff === -2) {
    results = "You win! " + playerSelection + " beats " + computerSelection;
    userScore += 1;
    imgDisplay.style.backgroundColor = "green";
  } else {
    results =
      "You lose ;__; " + computerSelection + " beats " + playerSelection;
    compScore += 1;
    imgDisplay.style.backgroundColor = "red";
  }
}

function rpsEventListeners() {
  return new Promise((resolve) => {
    rock.addEventListener("click", () => {
      userClickedOn = "rock";
      playerSelection = userClickedOn;
      console.log("Player chooses " + playerSelection);
      getComputerChoice();
      console.log("Computer chooses " + computerSelection);
      playRound(playerSelection, computerSelection);
      //count += 1;
      resolve();
    });

    paper.addEventListener("click", () => {
      userClickedOn = "paper";
      playerSelection = userClickedOn;
      console.log("Player chooses " + playerSelection);
      getComputerChoice();
      console.log("Computer chooses " + computerSelection);
      playRound(playerSelection, computerSelection);
      //count += 1;
      resolve();
    });

    scissors.addEventListener("click", () => {
      userClickedOn = "scissors";
      playerSelection = userClickedOn;
      console.log("Player chooses " + playerSelection);
      getComputerChoice();
      console.log("Computer chooses " + computerSelection);
      playRound(playerSelection, computerSelection);
      //count += 1;
      resolve();
    });
  });
}

async function playRound() {
  displayRPS(playerSelection, computerSelection);

  diff = checkDiff();

  roundResult();

  resultBoard.innerHTML = results;
  updateUserScore(userScore, compScore);

  // alert(results);

  if (userScore === 5 || compScore === 5) {
    return resultCondition();
  }

  return results;
}

function displayRPS(ps, cs) {
  playerImg.setAttribute("src", "assets/" + ps + ".png");
  computerImg.setAttribute("src", "assets/" + cs + ".png");
}

function updateUserScore(userScore, compScore) {
  playerScore.innerHTML = userScore;
  computerScore.innerHTML = compScore;
}

function createPlayerImg() {
  playerImg = document.createElement("img");
  playerImg.setAttribute("id", "playerGameImg");
  playerImg.setAttribute("src", "");
  playerImgDisplay.appendChild(playerImg);
  createComputerImg();
}

function createComputerImg() {
  computerImg = document.createElement("img");
  computerImg.setAttribute("id", "computerGameImg");
  computerImg.setAttribute("src", "");
  computerImgDisplay.appendChild(computerImg);
  gameExecution();
}

async function gameExecution() {
  await getPlayerChoice();

  console.log(results);
  console.log(" ");
}

function resultCondition() {
  if (userScore === compScore) {
    console.log(
      "It's a tie ( ͡° ͜ʖ ͡°) \n Final Score is " + userScore + " : " + compScore
    );
    resultBoard.innerHTML =
      "It's a tie ( ͡° ͜ʖ ͡°) !\n Final Score is " + userScore + " : " + compScore;
    imgDisplay.style.backgroundColor = "grey";
    endGame();
  } else if (userScore > compScore) {
    console.log("You won!\n Final Score is " + userScore + " : " + compScore);
    resultBoard.innerHTML =
      "You won!\n Final Score is " + userScore + " : " + compScore;
    imgDisplay.style.backgroundColor = "green";
    endGame();
  } else if (userScore < compScore) {
    console.log(
      "You lose ;__;\n Final Score is " + userScore + " : " + compScore
    );
    resultBoard.innerHTML =
      "You lose ;__; \n Final Score is " + userScore + " : " + compScore;
    imgDisplay.style.backgroundColor = "red";
    endGame();
  }
}

function endGame() {
  rock.style.pointerEvents = "none";
  paper.style.pointerEvents = "none";
  scissors.style.pointerEvents = "none";
}

function game() {
  createPlayerImg();
}

game(); //<=======  MAIN GAME FUNCTION

//                    rock   paper  scissor
//                      1      2       3
