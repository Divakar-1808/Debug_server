import React, { useState } from "react";
import { createTodo } from "../api/todoApi";
import "./AddTodo.css";

const AddTodo = ({ onTodoAdded }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleAdd = async () => {
    if (!title.trim()) {
      alert("Title is required");
      return;
    }

    await createTodo({ title, description, done: false });

    setTitle("");
    setDescription("");
    if (typeof onTodoAdded === "function") {
  onTodoAdded();
}

  };

  return (
    <div className="add-todo">
      <h3>Add Todo</h3>

      <div className="form-group">
        <label htmlFor="title">Title</label>
        <input
          id="title"
          type="text"
          placeholder="Enter todo title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
          placeholder="Enter description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>

      <button onClick={handleAdd}>Add Todo</button>
    </div>
  );
};

export default AddTodo;
