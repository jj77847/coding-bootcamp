const getAll = (req, res) => {
  req.db
    .collection('authors')
    .find()
    .toArray((err, results) => {
      if (err) {
        return res.status(500).json({ message: 'Failed to get all' });
      }
      return res.json(results);
    });
};

module.exports = getAll;
