const termData = require('../../db/terms.json');
const { sortData } = require('../../sortData');

const sortHelper = (type) =>
  termData.sort(sortData('term', 'relevance', `${type}`));

const getTerms = (req, res) => {
  // query -> req.query
  const hasQuery = Object.keys(req.query).length > 0;

  if (hasQuery && req.query.sort === 'dsc') {
    return res.json(sortHelper('dsc'));
  }

  if (hasQuery && req.query.sort === 'asc') {
    return res.json(sortHelper('asc'));
  }

  return res.json(termData);
};

const getTermsByCategory = (req, res) => {
  const requestedCategory = req.params.category.toLowerCase();
  const result = [];

  for (let i = 0; i < termData.length; i++) {
    const currentTermCategory = termData[i].category;
    if (requestedCategory === currentTermCategory) {
      result.push(termData[i]);
    }
  }
  return res.json(result);
};

module.exports = { getTerms, getTermsByCategory };
