const { readFromFile } = require('../../utils');

const getTerms = (req, res) => {
  // read from terms.json
  const terms = readFromFile('terms');

  // send response
  res.json(terms);
};

module.exports = {
  getTerms,
};
