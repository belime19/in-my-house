import axios from 'axios';
import jwtDecode from 'jwt-decode';
import { setItem, removeItem, getItem } from './LocalStorage';

export const hasAuthenticated = () => {
    const user = getItem('user');
    if(user) console.log(user.accessToken);
    const tokenValid = user ? isTokenValid(user.accessToken) : false;
    if(!tokenValid) removeItem('user');
    return tokenValid;
}

export const login = (credentials) => {
    return axios
    .post('http://localhost:8080/api/auth/login', credentials)
    .then(response => response.data)
    .then(user => {
        setItem('user',user)
        return user;
    });
}

export const signup = (userData) => {
    return axios
    .post('http://localhost:8080/api/auth/signup', userData)
    .then(response => {console.log(response); return response.data.message});
}

export const logout = () => {
    removeItem('user');
}

const isTokenValid = (token) => {
    const {exp} = jwtDecode(token);
    if(exp * 1000 > new Date().getTime){
        return true;
    }
    return false;
}