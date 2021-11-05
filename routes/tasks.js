const router = require('express').Router();

const {
  getAll,
  addTask,
  deleteTask,
} = require('../middlewares/tasks');

router.get('/', getAll);

router.post('/', addTask);

router.delete('/:id', deleteTask);

module.exports = router;