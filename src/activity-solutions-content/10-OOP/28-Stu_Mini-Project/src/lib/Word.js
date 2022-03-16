const inquirer = require('inquirer');

const Letter = require('./Letter');
const { isRequired } = require('../validate');

class Word {
  constructor(word) {
    this.currentWord = word;
    this.letters = [...word].map((character) => {
      const letter = new Letter(character);

      return letter;
    });
    console.log(word);
  }

  displayWord() {
    const wordToDisplay = this.letters
      .map((letter) => letter.displayLetter())
      .join(' ');

    console.log(`${wordToDisplay}\n\n`);
  }

  async guessCharacter() {
    const question = {
      type: 'input',
      message: 'Please enter a character:',
      name: 'character',
      validate: isRequired,
    };

    // prompt the question to get character from user
    const { character } = await inquirer.prompt(question);

    if ([...this.currentWord.toLowerCase()].includes(character.toLowerCase())) {
      this.letters.forEach((letter) => {
        letter.verifyLetter(character);
      });

      console.log(`CORRECT - ${character}`);

      return true;
    } else {
      console.log(`INCORRECT - ${character}`);
      return false;
    }
  }

  isComplete() {
    return this.letters.every((letter) => letter.isVisible);
  }
}

module.exports = Word;
