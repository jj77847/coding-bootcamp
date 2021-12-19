const path = require('path');
const { v4: uuidv4 } = require('uuid');

const { readFromFile, readAndAppend } = require('../../helpers');

const TIPS_FILE_PATH = path.join(__dirname, '../../db/tips.json');

const getTips = (req, res) => {
  try {
    const tips = readFromFile(TIPS_FILE_PATH);

    return res.json(tips);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const createTip = (req, res) => {
  const { username, topic, tip } = req.body;

  if (username && topic && tip) {
    const newTip = {
      username,
      tip,
      topic,
      tip_id: uuidv4(),
    };

    readAndAppend(newTip, TIPS_FILE_PATH);
    return res.json({ success: false, message: `Tip added successfully 🚀` });
  } else {
    return res
      .status(500)
      .json({ success: false, message: 'Error in adding tip' });
  }
};

module.exports = {
  getTips,
  createTip,
};
