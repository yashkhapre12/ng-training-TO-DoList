import axios from 'axios';

const API_BASE_URL = 'http://localhost:8080/api';

export const getTasks = () => {
  return axios.get(`${API_BASE_URL}/tasks`);
};

export const addTask = (task) => {
  return axios.post(`${API_BASE_URL}/task`, task);
};

export const updateTask = (id, task) => {
  return axios.put(`${API_BASE_URL}/task/${id}`, task);
};

export const deleteTask = (id) => {
  return axios.delete(`${API_BASE_URL}/task/${id}`);
};
