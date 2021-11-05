const tasks = require('../models/tasks');

const getAll = async () => {
  const allTasks = await tasks.getAll();
  return allTasks;
};

const addTask = async (task) => {
  const newTask = await tasks.addTask(task);
  return newTask;
};

module.exports = {
  getAll,
  addTask,
};
