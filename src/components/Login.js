import React, {useState} from 'react'
import './Login.css'
import Button from '@material-ui/core/Button';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { useEffect } from 'react';
import { useContext } from 'react';
import Auth from '../context/Auth';
import { useHistory } from "react-router-dom";
import { login } from '../services/AuthService';
import { setItem, removeItem, getItem } from '../services/LocalStorage';


function Login() {

    const {isAuthenticated, setIsAuthenticated} = useContext(Auth);
    const history = useHistory();
    const userFromLS = getItem('user');
    const [user, setUser] = useState({
        email:userFromLS ? userFromLS['email']:'',
        password:userFromLS ? userFromLS['motDePass']:''
      })
      
      const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const userData = await login(user);
          setIsAuthenticated(userData.accessToken !== undefined)
        } catch ({response}) {
          console.log(response);
          
        }
      }
    const onChange = (e) => {
        const { name, value } = e.target;
        setUser(prevUser => ({
                ...prevUser,
                [name]: value
        }))
    }

    useEffect(() => {
      if(isAuthenticated) {
        history.replace('/');
      }
    },[isAuthenticated,history])

  return (
    <div>
    <h2>Connexion</h2>
    <form  onSubmit={handleSubmit}>
        <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" name="email" type={"email"} onChange={onChange} autoComplete="email"  />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input id="password" type="password" onChange={onChange} name="password" autoComplete="password"  />
        </FormControl>
        <Button type="submit" fullWidth variant="contained" color="primary">
            Se connecter
        </Button>
        </form>
     </div>
  )
}

export default Login