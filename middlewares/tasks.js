const tasks = require('../services/tasks');

const getAll = async (_req, res) => {
  const allProducts = await tasks.getAll();
  return res.status(200).json({ tasks: allProducts });
};

const addTask = async (req, res) => {
  const task = req.body;
  const newTask = await tasks.addTask(task);
  return res.status(201).json(newTask);
};

const deleteTask = async (req, res) => {
  const { id } = req.params;
  const deletedTask = await tasks.deleteTask(id);
  return res.status(200).json(deletedTask);
};

const editTask = async (req, res) => {
  const { id } = req.params;
  const task = req.body;
  const editedTask = await tasks.editTask(id, task);
  return res.status(200).json(editedTask);
};

module.exports = {
  getAll,
  addTask,
  deleteTask,
  editTask,
};
