const fs = require('fs');

// read from file
const readFromFile = (filePath) => {
  try {
    const content = fs.readFileSync(filePath, 'utf8');
    return content;
  } catch (error) {
    // handle error
    console.log(error.message);
  }
};

const data1 = readFromFile('./foo.txt');
const data2 = readFromFile('./bar.txt');

console.log(data1);
console.log(data2);

// write to file
const writeToFile = (filePath, data) => {
  try {
    fs.writeFileSync(filePath, data);
  } catch (error) {
    console.log(error.message);
  }
};

writeToFile('file1.txt', 'This is file 1');
writeToFile('file2.txt', 'This is file 2');

// append to file
const appendToFile = (filePath, data) => {
  try {
    fs.appendFileSync(filePath, data);
  } catch (error) {
    console.log(error.message);
  }
};

appendToFile('file1.txt', '\nnew line text 1');
appendToFile('file2.txt', '\nnew line text 2');
