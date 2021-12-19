const path = require('path');

const { readFromFile, uuid, readAndAppend } = require('../../helpers');

const getFeedbacks = (req, res) => {
  console.info(`${req.method} request received for feedback`);

  readFromFile(path.join(__dirname, '../../db/feedback.json')).then((data) =>
    res.json(JSON.parse(data))
  );
};

const createFeedback = (req, res) => {
  // Log that a POST request was received
  console.info(`${req.method} request received to submit feedback`);

  // Destructuring assignment for the items in req.body
  const { email, feedbackType, feedback } = req.body;

  // If all the required properties are present
  if (email && feedbackType && feedback) {
    // Variable for the object we will save
    const newFeedback = {
      email,
      feedbackType,
      feedback,
      feedback_id: uuid(),
    };

    readAndAppend(newFeedback, path.join(__dirname, '../../db/feedback.json'));

    const response = {
      status: 'success',
      body: newFeedback,
    };

    res.json(response);
  } else {
    res.json('Error in posting feedback');
  }
};

module.exports = {
  getFeedbacks,
  createFeedback,
};
