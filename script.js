var getPlayerChoice = function() {
  var playerChoice = prompt("Choose: Rock, Paper, or Scissors");

  // if player makes no selection, ask again
  while (playerChoice !== 'Rock' && playerChoice !== 'Paper' && playerChoice !== 'Scissors') {
    // if prompt is cancelled, the while loop stops
    if (playerChoice === null) {
      break;
    }
    playerChoice = prompt("Invalid input! Please choose rock, paper, or scissors");
  }
  return playerChoice;
}


var getComputerChoice = function () {
  // gets a random number, decimal
  var randomNum = Math.random();
  // convert random number into rock, paper, scissors
  if (randomNum < 0.3333) {
    return "Rock";
  } else if (randomNum > 0.3333 && randomNum < 0.6666) {
    return "Scissors";
  } else {
    return "Paper";
  }
};


var getWinner = function (playerChoice, computerChoice) {

  if (computerChoice === playerChoice) {
    return "Draw";
  } else if (computerChoice === "Paper") {
    if (playerChoice === "Scissors") {
      return "Player";
    } else if (playerChoice === "Rock") {
      return "Computer";
    }
  } else if (computerChoice === "Rock") {
    if (playerChoice === "Scissors") {
      return "Computer";
    } else if (playerChoice === "Paper") {
      return "Player";
    }
  } else if (computerChoice === "Scissors") {
    if (playerChoice === "Rock") {
      return "Player";
    } else if (playerChoice === "Paper") {
      return "C;omputer";
    }
  }
}


var singleGame = function () {
  var playerChoice = getPlayerChoice();
  if (playerChoice === null) {
    return;
  }

  var computerChoice = getComputerChoice();

  var winner = getWinner(playerChoice, computerChoice);

  var message = "You chose " + playerChoice + ": computer chose" + computerChoice; 
  if (getWinner === "Player") {
    alert (message + "\nYou won!");
  } else if (winner === "Computer") {
    alert(message + "\nYou Lost");
  } else {
    alert(message + "\nDraw")
  } 
  return winner;
}

var bestOfThree = function () {
  var playerWinCount = 0;
  var computerWinCount = 0;
  
  while (playerWinCount < 2 && computerWinCount < 2) {
    var winner = singleGame();
    if (winner === "Player") {
      playerWinCount++;
    } else if (winner === "Computer") {
      computerWinCount++;
    } alert('Player score: ' + playerWinCount + ' - Computer Score: ' + computerWinCount);
  }

  var message = "Player score: " + playerWinCount + " - Computer Score: " + computerWinCount;

  if (playerWinCount === 2) {
    alert(message + "\nYou won!");
  } else {
    alert(message + "\nComputer won.");
  }
}
