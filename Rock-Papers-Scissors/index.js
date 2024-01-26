const computersChoice = document.querySelector("#computer-choice");
const userChoiceDisplay = document.querySelector("#users-choice");
const userResult = document.querySelector("#result");

const possibleChoices = document.querySelectorAll("button");

let userChoice;
let compChoice;
let result;

function getComputersChoice() {
  const choices = ["rock", "paper", "scissors"];
  compChoice = choices[Math.floor(Math.random() * 3)];
  computersChoice.innerHTML = compChoice;
}


function getResult() {
  if (userChoice === compChoice) {
    result = "Its a DRAW";
  }
  if (userChoice === "paper" && compChoice === "rock") {
    result = "You WIN";
  }
  if (userChoice === "scissors" && compChoice === "paper") {
    result = "You WIN";
  }
  if (userChoice === "rock" && compChoice === "scissors") {
    result = "You WIN";
  }
  if(userChoice === "scissors" && compChoice === "rock"){
    result = "You LOSE !"
  }
  if(userChoice === "rock" && compChoice === "paper"){
    result = "You LOSE !"
  }
  if(userChoice === "paper" && compChoice === "scissors"){
    result = "You LOSE !"
  }

  userResult.innerHTML = result;
}



possibleChoices.forEach((possibleChoice) =>
  possibleChoice.addEventListener("click", (e) => {
    userChoice = e.target.id;
    // console.log(userChoice);
    getComputersChoice();
    getResult()
    userChoiceDisplay.innerHTML = userChoice;
  })
);
