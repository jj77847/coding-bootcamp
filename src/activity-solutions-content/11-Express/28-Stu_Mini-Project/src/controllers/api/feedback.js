const path = require('path');
const { v4: uuidv4 } = require('uuid');

const { readFromFile, readAndAppend } = require('../../helpers');

const FEEDBACK_FILE_PATH = path.join(__dirname, '../../db/feedback.json');

const getFeedbacks = (req, res) => {
  try {
    const feedbacks = readFromFile(FEEDBACK_FILE_PATH);

    return res.json(feedbacks);
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const createFeedback = (req, res) => {
  const { email, feedbackType, feedback } = req.body;

  if (email && feedbackType && feedback) {
    const newFeedback = {
      email,
      feedbackType,
      feedback,
      feedback_id: uuidv4(),
    };

    readAndAppend(newFeedback, FEEDBACK_FILE_PATH);

    return res.json({
      status: 'success',
      body: newFeedback,
    });
  } else {
    return res
      .status(500)
      .json({ success: false, message: 'Error in adding feedback' });
  }
};

module.exports = {
  getFeedbacks,
  createFeedback,
};
