// const imgArray = ["rock.jpg", "paper.jpg", "scissors.jpg"];
// const firstImage = document.querySelector("#imgOne");
// const secondImage = document.querySelector("#imgTwo");

// used https://css-tricks.com/snippets/javascript/select-random-item-array/
// for the random item code

let myArray = ["Rock", "Paper", "Scissors"];

let botScore = 0;
let playerScore = 0;

document.querySelector("#rock").addEventListener("click", playerThrowsRock);
document
  .querySelector("#scissors")
  .addEventListener("click", playerThrowsScissors);
document.querySelector("#paper").addEventListener("click", playerThrowsPaper);

// document.getElementById("rock").onclick = playerThrowsRock;
function playerThrowsRock() {
  let botsWeapon = myArray[Math.floor(Math.random() * myArray.length)];
  //   let botsWeapon = getRandomWeapon();
  console.log(botsWeapon);
  checkWhoWon(botsWeapon, "rock");
}
// document.getElementById("scissors").onclick = playerThrowsScissors;
function playerThrowsScissors() {
  let botsWeapon = myArray[Math.floor(Math.random() * myArray.length)];
  //   let botsWeapon = getRandomWeapon();
  console.log(botsWeapon);
  checkWhoWon(botsWeapon, "scissors");
}
// document.getElementById("paper").onclick = playerThrowsPaper;
function playerThrowsPaper() {
  let botsWeapon = myArray[Math.floor(Math.random() * myArray.length)];
  //   let botsWeapon = getRandomWeapon();
  console.log(botsWeapon);
  checkWhoWon(botsWeapon, "paper");
}

function displayCompleteMessage(msg) {
  document.getElementById("status").innerText = msg;
}

function checkWhoWon(botsWeapon, playersWeapon) {
  if (botsWeapon == playersWeapon) {
    displayCompleteMessage("There was tie");
  } else if (
    (botsWeapon == "Scissors" && playersWeapon == "paper") ||
    (botsWeapon == "Paper" && playersWeapon == "rock") ||
    (botsWeapon == "Rock" && playersWeapon == "scissors")
  ) {
    increaseBotScore();
  } else {
    increasePlayerScore();
  }
}
function increaseBotScore() {
  botScore += 1;
  document.getElementById("computerScore").innerText = botScore;
  displayCompleteMessage("Sorry, you're a loser");
}
function increasePlayerScore() {
  playerScore += 1;
  document.getElementById("humanScore").innerText = playerScore;
  displayCompleteMessage("You got the dub!");
}
