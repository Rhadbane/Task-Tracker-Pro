import axios from 'axios';

const API_URL = 'http://localhost:5000/api/tasks'; // Adjust if your backend port is different

const getAuthHeader = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  if (user && user.token) {
    return { Authorization: `Bearer ${user.token}` };
  } else {
    return {};
  }
};

const createTask = async (taskData) => {
  const response = await axios.post(API_URL, taskData, { headers: getAuthHeader() });
  return response.data;
};

const getTasks = async () => {
  const response = await axios.get(API_URL, { headers: getAuthHeader() });
  return response.data;
};



const taskService = {
  createTask,
  getTasks,
  
};

export default taskService;
