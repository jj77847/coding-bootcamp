const fs = require('fs');
const path = require('path');

const readFromFile = (fileName) => {
  const filePath = path.join(__dirname, `db/${fileName}.json`);
  const fileData = fs.readFileSync(filePath, 'utf-8');
  const data = JSON.parse(fileData);

  return data;
};

module.exports = { readFromFile };
