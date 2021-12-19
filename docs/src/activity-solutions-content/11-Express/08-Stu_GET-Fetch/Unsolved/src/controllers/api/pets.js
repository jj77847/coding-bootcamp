const petData = require('../../db/animals.json');

const getPets = (req, res) => res.json(petData);

module.exports = { getPets };
