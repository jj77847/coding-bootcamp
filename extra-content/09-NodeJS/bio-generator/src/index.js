// import inquirer
const inquirer = require('inquirer');
const util = require('./util');

// make a list of questions
const questions = [
  {
    type: 'input',
    name: 'firstName',
    message: 'What is your first name?',
  },
  {
    type: 'input',
    name: 'lastName',
    message: 'What is your last name?',
  },
  {
    type: 'number',
    name: 'age',
    message: 'What is your age?',
  },
  {
    type: 'confirm',
    name: 'hasPets',
    message: 'Do you have any pets?',
    default: false,
  },
];

// pet related questions
const petQuestions = [
  {
    type: 'list',
    name: 'species',
    message: 'Choose species of your pet:',
    // choices: ['Dogs', 'Cats', 'Snakes', 'Hamsters'],
    choices: [
      {
        name: 'Dogs',
        value: 'dog',
        short: 'D',
      },
      {
        name: 'Cats',
        value: 'cat',
        short: 'C',
      },
      {
        name: 'Snakes',
        value: 'snake',
        short: 'S',
      },
      {
        name: 'Hamsters',
        value: 'hamster',
        short: 'H',
      },
    ],
  },
  {
    type: 'input',
    name: 'petName',
    message: 'What is the name of your pet?',
  },
];

const generateContent = (bioAnswers, petAnswers) => {
  if (!petAnswers) {
    return `Full Name: ${bioAnswers.firstName} ${bioAnswers.lastName}
    Age: ${bioAnswers.age}
    `;
  }

  return `Full Name: ${bioAnswers.firstName} ${bioAnswers.lastName}
  Age: ${bioAnswers.age}
  Pet Name: ${petAnswers.petName} - ${petAnswers.species}
  `;
};

const start = async () => {
  // prompt questions and get answers
  const bioAnswers = await inquirer.prompt(questions);

  let petAnswers;

  if (bioAnswers.hasPets) {
    // ask pet questions
    petAnswers = await inquirer.prompt(petQuestions);
  }

  const dataToWrite = generateContent(bioAnswers, petAnswers);

  // write to file with data and path
  util.writeToFile('BIO.txt', dataToWrite);
};

start();
