import axios from 'axios';

export const reserveProperty = (request) => {
    return axios.post(`https://in-my-house-back.herokuapp.com/api/reservations`, request)
    .then(response => response)
    .catch(error => error);
}