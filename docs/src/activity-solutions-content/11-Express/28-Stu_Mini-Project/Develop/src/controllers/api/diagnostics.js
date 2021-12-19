const path = require('path');
const moment = require('moment');
const { v4: uuidv4 } = require('uuid');

const { readFromFile, readAndAppend } = require('../../helpers');

const DIAGNOSTIC_FILE_PATH = path.join(__dirname, '../../db/diagnostics.json');

const getDiagnostics = (req, res) => {
  try {
    const diagnostics = readFromFile(DIAGNOSTIC_FILE_PATH);

    return res.json(diagnostics);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const postDiagnostics = (req, res) => {
  const { errors } = req.body;
  const diagnosticObject = {
    time: moment().unix(),
    error_id: uuidv4(),
    errors,
  };
  console.log(diagnosticObject);

  readAndAppend(diagnosticObject, DIAGNOSTIC_FILE_PATH);

  return res.json({ message: 'Logged invalid submission' });
};

module.exports = {
  getDiagnostics,
  postDiagnostics,
};
