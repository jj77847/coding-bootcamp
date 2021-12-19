const path = require('path');

const renderPage = (req, res) => {
  res.sendFile(path.join(__dirname, '../../../public/index.html'));
};

module.exports = {
  renderPage,
};
