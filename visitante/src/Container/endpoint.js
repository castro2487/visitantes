import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.iunigo.com/api',
    /*baseURL: 'http://localhost:8080/api',*/
timeout: 3000,
});

export default instance;