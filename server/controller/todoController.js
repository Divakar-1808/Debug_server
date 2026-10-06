const Todo = require("../models/todoModel");
console.log("todos");
exports.getAllTodos = async (req, res) => {
  try {
    console.log("User_ID:", req.user.id);

    const todos = await Todo.getAllTodosByUser(req.user.id);
    return res.status(200).json(todos);
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
};

exports.createTodo = async (req, res) => {
  try {
    const { title, description, done } = req.body;
    if (!title || title.trim().length === 0) {
      return res.status(400).json({ message: "Title is required!" });
    }
    const id = await Todo.createTodo(
      req.user.id,
      title.trim(),
      description,
      done || false,
    );
    return res.status(201).json({ message: "Todo created successfully!", id });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: "Error creating todo!" });
  }
};

exports.updateTodo = async (req, res) => {
  try {
    const { id } = req.params;

    if (!id) {
      return res.status(404).json({ message: "id is undefined" });
    }
    const updates = req.body;

    const updated = await Todo.updateTodo(req.user.id, id, updates);

    if (!updated) {
      return res
        .status(404)
        .json({ message: "Todo not found or not owned by user!" });
    }

    return res.status(200).json({ message: "Todo updated successfully!" });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
};

exports.deleteTodo = async (req, res) => {
  try {
    const { id } = req.params;

    const deleted = await Todo.deleteTodo(req.user.id, id);

    if (!deleted) {
      return res
        .status(404)
        .json({ message: "Todo not found or not owned by user!" });
    }

    return res.status(200).json({ message: "Todo deleted successfully!" });
  } catch (error) {
    console.error(error.message);
    return res.status(500).json({ message: error.message });
  }
};
