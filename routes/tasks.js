const router = require('express').Router();

const {
  getAll,
  addTask,
} = require('../middlewares/tasks');

router.get('/', getAll);

router.post('/', addTask);

module.exports = router;