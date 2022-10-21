import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { setItem, removeItem, getItem } from './LocalStorage';

export const hasAuthenticated = () => {
    const token = getItem('inMyHouseToken');
    const tokenValid = token ? isTokenValid(token) : false;
    if(!tokenValid) removeItem(token);
    return tokenValid;
}

export const login = (credentials) => {
    return axios
    .post('http://localhost:80/api/auth/login', credentials)
    .then(response => response);
}

export const logout = () => {
    removeItem('inMyHouseToken');
}

const isTokenValid = (token) => {
    const {exp} = jwtDecode(token);
    if(exp * 1000 > new Date().getTime){
        return true;
    }
    return false;
}