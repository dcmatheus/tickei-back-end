const router = require('express').Router();

const {
  getAll,
  addTask,
  deleteTask,
  editTask,
} = require('../middlewares/tasks');

router.get('/', getAll);

router.post('/', addTask);

router.delete('/:id', deleteTask);

router.put('/:id', editTask);

module.exports = router;