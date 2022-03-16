class Character {
  constructor(name, strength, hitPoints) {
    this.name = name;
    this.strength = strength;
    this.hitPoints = hitPoints;
  }

  printStats() {
    console.log(`\n\nPlayer Name: ${this.name}`);
    console.log(`Strength: ${this.strength}`);
    console.log(`Hit Points: ${this.hitPoints}\n\n`);
  }

  isAlive() {
    return this.hitPoints > 0;
  }

  attack(opponent) {
    opponent.hitPoints -= this.strength;
  }
}

const startGame = () => {
  console.log('LET THE GAMES BEGIN');

  let isPlayerOne = true;

  // create player 1 and player 2
  const player1 = new Character('Bob', 20, 100);
  const player2 = new Character('Jane', 25, 150);

  // display initial stats
  player1.printStats();
  player2.printStats();

  const playGame = () => {
    // if player 1 or player 2 is dead clear interval
    if (!player1.isAlive() || !player2.isAlive()) {
      clearInterval(gameInterval);
      console.log('GAME OVER');
      if (player1.isAlive()) {
        console.log(`${player1.name} is the WINNER`);
      } else {
        console.log(`${player2.name} is the WINNER`);
      }
    } else if (isPlayerOne) {
      console.log('PLAYER 1 attacks PLAYER 2');
      // player 1 will attack player 2
      player1.attack(player2);

      // print stats of player 2
      player2.printStats();
    } else {
      console.log('PLAYER 2 attacks PLAYER 1');
      // player 2 will attack player 1
      player2.attack(player1);

      // print stats of player 1
      player1.printStats();
    }

    isPlayerOne = !isPlayerOne;
  };

  const gameInterval = setInterval(playGame, 2000);
};

startGame();
