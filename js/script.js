function getComputerChoice(){
  const choices = ["rock","paper","scissors"];
  let randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex]
}

function play(playerChoice,computerChoice){
  if(playerChoice == "rock" && computerChoice == "rock"){
    return "Tie!";
  } else if(playerChoice == "paper" && computerChoice == "paper"){
    return "Tie!";
  } else if(playerChoice == "scissors" && computerChoice == "scissors"){
    return "Tie!";
  } else if(playerChoice == "rock" && computerChoice == "scissors"){
    return "Player wins! Rock beats Scissors";
  } else if(playerChoice == "paper" && computerChoice == "rock"){
    return "Player wins! Paper beats Rock";
  } else if(playerChoice == "scissors" && computerChoice == "paper"){
    return "Player wins! Scissors beat Paper";
  } else if(playerChoice == "rock" && computerChoice == "paper"){
    return "Computer wins! Paper beats Rock";
  } else if(playerChoice == "paper" && computerChoice == "scissors"){
    return "Computer wins! Scissors beat Paper";
  } else if(playerChoice == "scissors" && computerChoice == "rock"){
    return "Computer wins! Rock beats Scissors";
  }
}

let btnContainer = document.querySelector(".container");
let output = document.querySelector(".output");
let roundsPlayed = 0;
let playerScore = 0;
let computerScore = 0;

function clickHandler(e){
  let playerChoice = e.target.id;

  let resultElem = document.createElement("div");
  let resultText = play(playerChoice, getComputerChoice());
  resultElem.textContent = resultText;
  resultElem.className = "resultItem";
  output.appendChild(resultElem);

  updateScore(resultText);

  roundsPlayed += 1;
  if(roundsPlayed === 5){
    showTotalScore();
    btnContainer.removeEventListener("click",clickHandler);
  }
}

function updateScore(resultText){
  if(resultText.startsWith("Player wins")){
    playerScore++;
  } else if(resultText.startsWith("Computer wins")){
    computerScore++;
  }
}

function showTotalScore(){
  let resultText;
  playerScore > computerScore
  ? resultText = `Player wins!
  Player: ${playerScore}
  Computer: ${computerScore}`
  : resultText = `Computer wins!
  Player: ${playerScore}
  Computer: ${computerScore}`;

  let resultElem = document.createElement("div");
  resultElem.textContent = resultText;
  resultElem.className = "resultItem total"

  output.appendChild(resultElem)
}

btnContainer.addEventListener("click",clickHandler);