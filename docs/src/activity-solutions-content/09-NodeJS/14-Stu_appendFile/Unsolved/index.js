const fs = require('fs');

const pathToOutputFile = 'log.txt';
const dataToWrite = 'hello world\n';
const options = 'utf8';
const callback = (err) => {
  if (err) {
    console.log(err);
  }
  console.log('Successfully appended to file!');
};

// append to file with callback
// fs.appendFile(pathToOutputFile, dataToWrite, options, callback);

// append to file with async (try/catch)
// try {
//   fs.appendFileSync(pathToOutputFile, dataToWrite, options);
//   console.log('Successfully appended to file!');
// } catch (error) {
//   console.log('Oops something went wrong');
// }

// console.log('something else');

const appendToFile = (path, data, options = 'utf8') => {
  try {
    fs.appendFileSync(path, data, options);
    console.log(`Successfully appended to ${path}!`);
  } catch (error) {
    console.log(`Failed to append to ${path}: ${error.message}`);
  }
};

appendToFile('err.log', 'error importing', 'foo');
