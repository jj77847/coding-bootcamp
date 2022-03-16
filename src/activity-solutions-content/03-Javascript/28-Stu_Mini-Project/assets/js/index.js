const score = {
  wins: 0,
  losses: 0,
  ties: 0,
};

const choices = ['R', 'P', 'S'];

// get the user choice using prompt
const getUserChoice = function () {
  // prompt the user to enter choice
  const userChoice = prompt(
    'Please select Rock (R), Paper (P) or Scissors (S)'
  );

  if (!userChoice) {
    isGameInProgress = false;
  } else {
    // validate the choice
    // if not valid then present an alert
    if (userChoice === 'R' || userChoice === 'P' || userChoice === 'S') {
      return userChoice;
    } else {
      alert('Please select one of the following: R, P or S');
    }
  }
};

// get the random computer choice
const getComputerChoice = function () {
  // generate an index between 0 and 2
  const randomIndex = Math.floor(Math.random() * choices.length + 0);

  // use the random index to get the random choice
  return choices[randomIndex];
};

// for the 2 player choices check game logic
const gameLogic = function (player1, player2) {
  if (player1 === 'R' && player2 === 'P') {
    return 'lose';
  }

  if (player1 === 'R' && player2 === 'S') {
    return 'win';
  }

  if (player1 === 'P' && player2 === 'R') {
    return 'win';
  }

  if (player1 === 'P' && player2 === 'S') {
    return 'lose';
  }

  if (player1 === 'S' && player2 === 'R') {
    return 'lose';
  }

  if (player1 === 'S' && player2 === 'P') {
    return 'win';
  }

  return 'tie';
};

// update the player 1's scores depending on the game outcome
const updateScore = function (gameOutcome) {
  // update wins if win
  if (gameOutcome === 'win') {
    score.wins += 1;
  }
  // update losses if lose
  if (gameOutcome === 'lose') {
    score.losses += 1;
  }
  // update ties if tie
  if (gameOutcome === 'tie') {
    score.ties += 1;
  }
};

// display the score of player in the console logs
const displayScore = function (gameOutcome) {
  console.log('Game Outcome for player 1: ' + gameOutcome);
  // console log the score
  console.log(
    'Score: W - ' +
      score.wins +
      ' | L - ' +
      score.losses +
      ' | T - ' +
      score.ties
  );
};

const playGame = function () {
  // get the player 1 choice
  const player1Choice = getUserChoice();
  console.log('Player 1 plays: ' + player1Choice);

  // get the computer choice
  const computerChoice = getComputerChoice();
  console.log('Computer plays: ' + computerChoice);

  if (player1Choice && computerChoice) {
    // feed the player choice and computer choice to game logic
    const gameOutcome = gameLogic(player1Choice, computerChoice);

    // update the scores
    updateScore(gameOutcome);

    // display the scores
    displayScore(gameOutcome);
  }
};

// present the user with a confirm modal yes/no
const playAgain = function () {
  const isPlayAgain = confirm('Do you want to play again?');
  return isPlayAgain;
};

// declare a variable to track game in progress
let isGameInProgress = true;

while (isGameInProgress) {
  // start the game by calling this function
  playGame();

  if (isGameInProgress) {
    // ask the user if they want to continue
    const isPlayAgain = playAgain();

    // if isPlayAgain is false set isGameInProgress to false
    if (!isPlayAgain) {
      isGameInProgress = false;
    }
  }
}
