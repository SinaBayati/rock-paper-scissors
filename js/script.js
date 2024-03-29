function getComputerChoice(){
  let randomIndex = Math.floor(Math.random() * 3);
  return getChoices(randomIndex)
}

function getChoices(index){
  const choices = ["rock","paper","scissors"];
  return choices[index];
}

function getPlayerChoice(){
  let playerChoice = prompt("Rock/Paper/Scissors: ");
  playerChoice = playerChoice.trim().toLowerCase();
  return playerChoice;
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