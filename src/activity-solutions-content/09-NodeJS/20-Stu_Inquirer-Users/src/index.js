const fs = require('fs');
const inquirer = require('inquirer');

// const questions = [
//   {
//     type: 'input',
//     message: 'What is your username?',
//     name: 'username',
//   },
// ];

// inquirer
//   .prompt(questions)
//   .then((answers) => {
//     console.log(answers);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

const questions = [
  {
    type: 'input',
    message: 'What is your name?',
    name: 'name',
  },
  {
    type: 'checkbox',
    message: 'What languages do you know?',
    name: 'languages',
    choices: ['HTML', 'CSS', 'JavaScript', 'Python', 'Java', 'C#', 'C++'],
  },
  {
    type: 'list',
    message: 'What is your preferred method of communication?',
    name: 'communication',
    choices: ['Email', 'Call', 'Text', 'Post'],
  },
];

const inquirerAsync = async (questions) => {
  try {
    const answers = await inquirer.prompt(questions);
    return answers;
  } catch (error) {
    console.log(`Error: ${error.message}`);
    process.exit(0);
  }
};

const writeToFile = (path, data, options = 'utf8') => {
  try {
    fs.writeFileSync(path, data, options);
    console.log(`Successfully written to ${path}!`);
  } catch (error) {
    console.log(`Failed to write to ${path}: ${error.message}`);
  }
};

const start = async () => {
  const answers = await inquirerAsync(questions);

  writeToFile('output.json', JSON.stringify(answers));
};

start();
