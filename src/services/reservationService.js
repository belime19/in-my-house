import axios from 'axios';

export const reserveProperty = (request) => {
    return axios.post('http://localhost:8080/api/reservations', request)
    .then(response => response)
    .catch(error => error);
}