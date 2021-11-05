const tasks = require('../models/tasks');

const getAll = async () => {
  const allTasks = await tasks.getAll();
  return allTasks;
};

const addTask = async (task) => {
  const newTask = await tasks.addTask(task);
  return newTask;
};

const deleteTask = async (id) => {
  const deletedTask = await tasks.deleteTask(id);
  return deletedTask;
};

const editTask = async (id) => {
  const editedTask = await tasks.editTask(id);
  return editedTask;
};

module.exports = {
  getAll,
  addTask,
  deleteTask,
  editTask,
};
