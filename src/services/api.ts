import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

// github api
export default api;
