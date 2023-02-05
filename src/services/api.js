import axios from 'axios';

export const key = 'root';


const api = axios.create({
    baseURL: 'https://lucazportifolio.000webhostapp.com/agenda.php',
    Headers : 'Content-Type application/x-www-form-urlencoded',
})

export default api;