const termData = require('../../db/terms.json');

const getCategories = (req, res) => {
  const categories = termData.map((term) => term.category);

  const result = categories.filter((cat, i) => categories.indexOf(cat) === i);

  return res.json(result);
};

module.exports = { getCategories };
