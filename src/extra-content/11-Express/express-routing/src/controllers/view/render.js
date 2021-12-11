const renderUsers = (req, res) => {
  res.json({ message: 'renderUsers' });
};

const renderTodos = (req, res) => {
  res.json({ message: 'renderTodos' });
};

module.exports = {
  renderUsers,
  renderTodos,
};
