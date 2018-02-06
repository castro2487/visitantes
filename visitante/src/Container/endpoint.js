import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://restcountries.eu/rest/v2',
    /*baseURL: 'http://localhost:8080/api',*/
timeout: 3000,
});

export default instance;