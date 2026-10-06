const db = require("../config/db");

exports.getAllTodosByUser = async (userId) => {
  try {
    return db("todos")
      .where({ user_id: userId })
      .select("id", "title", "description", "done");
  } catch (error) {
    console.error("[MODEL][getAllTodosByUser]", error.message);
    throw error;
  }
};

exports.createTodo = async (userId, title, description, done) => {
  try {
    const [id] = await db("todos").insert({
      user_id: userId,
      title,
      description,
      done,
    });
    return id;
  } catch (error) {
    console.error("[MODEL][createTodo]", error.message);
    throw error;
  }
};

exports.updateTodo = async (userId, id, updates) => {
  try {
    return db("todos").where({id, user_id: userId }).update(updates);
  } catch (error) {
    console.error("[MODEL][updateTodo]", error.message);
    throw error;
  }
};

exports.deleteTodo = async (userId, id) => {
  try {
    return db("todos")
      .where({ id, user_id: userId }) // ❌ column does not exist
      .del();
  } catch (error) {
    console.error("[MODEL][deleteTodo]", error.message);
    throw error;
  }
};
