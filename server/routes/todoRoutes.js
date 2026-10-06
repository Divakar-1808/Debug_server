const express = require('express');
const router = express.Router();
const todoController = require('../controller/todoController');
const auth = require('../middleware//authMiddleware');
router.use(auth);
router.get('/', todoController.getAllTodos);
router.post('/', todoController.createTodo);
router.delete('/:id', todoController.deleteTodo);

router.put('/:id', todoController.updateTodo);

module.exports = router;
