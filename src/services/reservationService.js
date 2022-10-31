import axios from 'axios';

export const reserveProperty = (request) => {
    return axios.post(`${process.env.IN_MY_HOUSE_BACKEND_URL}/api/reservations`, request)
    .then(response => response)
    .catch(error => error);
}