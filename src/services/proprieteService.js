import axios from 'axios';

export const addProperty = (propriete) =>{
    return axios.post(`${process.env.IN_MY_HOUSE_BACKEND_URL}/api/proprietes`, propriete)
    .then(response => response)
    .catch(error => error);
}

export const searchProperties = (serachrequest) => {
    return axios.get(`${process.env.IN_MY_HOUSE_BACKEND_URL}/api/proprietes?ville=${serachrequest.ville}&startDate=${serachrequest.startDate}&endDate=${serachrequest.endDate}`)
    .then(response => {console.log(response.data); return response.data})
    .catch(error => error);
}