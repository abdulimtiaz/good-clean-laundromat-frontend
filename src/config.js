const axios = require('axios').default;

const API_BASE_URL = process.env.REACT_APP_BASE_URL || 'http://localhost:5000/api';

const axiosInstance = axios.create({
	baseURL: API_BASE_URL
});

module.exports = axiosInstance;
