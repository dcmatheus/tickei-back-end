const tasks = require('../models/tasks');

const getAll = async () => {
  const allTasks = await tasks.getAll();
  return allTasks;
};

module.exports = {
  getAll,
};
