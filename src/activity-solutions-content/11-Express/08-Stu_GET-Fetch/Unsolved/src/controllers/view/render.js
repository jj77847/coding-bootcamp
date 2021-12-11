const path = require('path');

const renderHome = (req, res) => {
  res.sendFile(path.join(__dirname, '../../../public/index.html'));
};

module.exports = { renderHome };
