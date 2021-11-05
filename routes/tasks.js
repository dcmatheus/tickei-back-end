const router = require('express').Router();

const {
  getAll,
} = require('../middlewares/tasks');

router.get('/', getAll);

module.exports = router;