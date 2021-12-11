const getAllUsers = (req, res) => {
  res.json({ message: 'getAllUsers' });
};

const getUserById = (req, res) => {
  // extract id from req
  // params /:id
  // query ?q=cars
  console.log(req.params);
  console.log(req.query);
  res.json({ message: 'getUserById' });
};

module.exports = { getAllUsers, getUserById };
