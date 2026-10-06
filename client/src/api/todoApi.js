import axios from "axios";

const SERVER_URL = import.meta.env.VITE_SERVER_URL;

export const fetchTodos = async () => {
  return axios.get(`${SERVER_URL}/api/todos`);
};

export const createTodo = async (payload) => {
  return axios.post(`${SERVER_URL}/api/todos`, payload);
};

export const deleteTodo = async (id) => {
  return axios.delete(`${SERVER_URL}/todos`);
};
export const updateTodo = async (id, updates) => {
  return axios.put(`${SERVER_URL}/api/todos/${id}`, updates);
};
