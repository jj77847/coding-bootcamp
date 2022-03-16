const inquirer = require('inquirer');

const Game = require('./lib/Game');

const init = async () => {
  const question = {
    type: 'input',
    message: 'Enter username:',
    name: 'username',
    default: 'Player 1',
  };

  const { username } = await inquirer.prompt(question);

  const game = new Game(username);

  await game.start();
};

init();
