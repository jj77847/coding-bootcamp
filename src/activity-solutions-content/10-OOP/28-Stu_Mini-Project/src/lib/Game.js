const words = require('../words');
const Word = require('./Word');

class Game {
  constructor(username) {
    this.username = username;
    this.guessRemaining = 10;
  }

  async start() {
    console.log(`######## WORD GUESSING GAME ########`);
    console.log(`Welcome ${this.username}\n\n`);

    // generate random index
    const randomIndex = Math.floor(Math.random() * words.length);

    // get random word
    const randomWord = words[randomIndex];

    // create a new Word instance
    const word = new Word(randomWord);

    // display the word on console
    word.displayWord();

    while (!word.isComplete()) {
      console.log(`GUESSES REMAINING: ${this.guessRemaining}\n\n`);

      const isCorrect = await word.guessCharacter();

      if (!isCorrect) {
        // reduce remaining guesses
        this.guessRemaining -= 1;
      }

      word.displayWord();

      if (this.guessRemaining <= 0) {
        console.log(`######## YOU LOST GAME ########`);
        console.log(`-------------------------------\n\n`);
        break;
      }
    }

    console.log(`######## END OF GAME ########`);
    console.log(`-----------------------------\n\n`);
  }
}

module.exports = Game;
