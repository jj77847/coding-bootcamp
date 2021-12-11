const getAllTodos = (req, res) => {
  res.json({ message: 'getAllTodos' });
};
const getTodoById = (req, res) => {
  res.json({ message: 'getTodoById' });
};

module.exports = {
  getAllTodos,
  getTodoById,
};
