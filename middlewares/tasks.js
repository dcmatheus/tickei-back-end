const tasks = require('../services/tasks');

const getAll = async (_req, res) => {
  const allProducts = await tasks.getAll();
  return res.status(200).json({ tasks: allProducts });
};

module.exports = {
  getAll,
};
