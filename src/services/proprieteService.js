import axios from 'axios';

export const addProperty = async (propriete) =>{
    axios.post('http://localhost:8080/api/proprietes', propriete)
    .then(response => response.data)
    .catch(error => error);
}