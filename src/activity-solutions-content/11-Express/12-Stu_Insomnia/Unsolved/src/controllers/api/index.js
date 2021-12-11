const fs = require('fs');
const path = require('path');

const getDataFromJSON = (req, res) => {
  const dataFromFile = fs.readFileSync(
    path.join(__dirname, '../../db/repos.json'),
    'utf-8'
  );
  const data = JSON.parse(dataFromFile);

  res.json(data);
};

module.exports = { getDataFromJSON };
