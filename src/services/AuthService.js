import axios from 'axios';
import { setItem, removeItem, getItem } from './LocalStorage';

export const hasAuthenticated = () => {
    const user = getItem('user');
    if(user) console.log(user);
    return user ? true : false;
}

export const login = (credentials) => {
    return axios
    .post('http://localhost:8080/api/utilisateurs/login', credentials)
    .then(response => response.data)
    .then(user => {
        setItem('userEmail',user.email);
        return user;
    });
}

export const signup = (userData) => {
    return axios
    .post('http://localhost:8080/api/utilisateurs/signup', userData)
    .then(response => {console.log(response); return response.data.message});
}

export const logout = () => {
    removeItem('user');
}