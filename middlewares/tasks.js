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

module.exports = {
  getAll,
  addTask,
};
