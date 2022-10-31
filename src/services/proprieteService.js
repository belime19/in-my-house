import axios from 'axios';

export const addProperty = (propriete) =>{
    return axios.post(`https://in-my-house-back.herokuapp.com/api/proprietes`, propriete)
    .then(response => response)
    .catch(error => error);
}

export const searchProperties = (serachrequest) => {
    return axios.get(`https://in-my-house-back.herokuapp.com/api/proprietes?ville=${serachrequest.ville}&startDate=${serachrequest.startDate}&endDate=${serachrequest.endDate}`)
    .then(response => {console.log(response.data); return response.data})
    .catch(error => error);
}