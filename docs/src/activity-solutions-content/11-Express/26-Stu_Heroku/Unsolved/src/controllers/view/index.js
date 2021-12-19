const path = require('path');

const renderTips = (req, res) => {
  res.sendFile(path.join(__dirname, '../../../public/index.html'));
};

const renderFeedback = (req, res) => {
  res.sendFile(path.join(__dirname, '../../../public/pages/feedback.html'));
};

module.exports = {
  renderTips,
  renderFeedback,
};
