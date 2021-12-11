const termData = require('../../db/terms.json');

const getTerm = (req, res) => {
  // url -> req.params
  const requestedTerm = req.params.term.toLowerCase();

  for (let i = 0; i < termData.length; i++) {
    if (requestedTerm === termData[i].term.toLowerCase()) {
      return res.json(termData[i]);
    }
  }

  return res.json('No term found');
};

module.exports = { getTerm };
