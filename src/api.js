import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'http://localhost:8080/api/v1', 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default {
  getTasks() {
    return apiClient.get('/tasks');
  },
  createTask(task) {
    return apiClient.post('/tasks', task);
  },
  updateTask(id, updatedTask) {
    return apiClient.put(`/tasks/${id}`, updatedTask);
  },
  deleteTask(id) {
    return apiClient.delete(`/tasks/${id}`);
  },
};