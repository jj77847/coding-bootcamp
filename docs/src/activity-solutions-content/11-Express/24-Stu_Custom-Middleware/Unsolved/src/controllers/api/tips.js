const path = require('path');

const { readFromFile, readAndAppend, uuid } = require('../../helpers');

const getTips = (req, res) => {
  console.info(`${req.method} request received for tips`);
  readFromFile(path.join(__dirname, '../../db/tips.json')).then((data) =>
    res.json(JSON.parse(data))
  );
};

const createTip = (req, res) => {
  console.info(`${req.method} request received to add a tip`);

  const { username, topic, tip } = req.body;

  if (req.body) {
    const newTip = {
      username,
      tip,
      topic,
      tip_id: uuid(),
    };

    readAndAppend(newTip, path.join(__dirname, '../../db/tips.json'));
    res.json(`Tip added successfully 🚀`);
  } else {
    res.error('Error in adding tip');
  }
};

module.exports = {
  getTips,
  createTip,
};
