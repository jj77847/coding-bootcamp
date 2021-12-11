const path = require('path');

const renderFeedback = (req, res) => {
  res.sendFile(path.join(__dirname, '../../../public/pages/feedback.html'));
};

const renderHome = (req, res) => {
  res.sendFile(path.join(__dirname, '../../../public/index.html'));
};

const renderError = (req, res) => {
  res.sendFile(path.join(__dirname, '../../../public/pages/404.html'));
};

module.exports = {
  renderFeedback,
  renderHome,
  renderError,
};
