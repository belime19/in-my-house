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

function Login() {

    const {isAuthenticated} = useContext(Auth);
    const history = useHistory();
    const [user, setUser] = useState({
        email:'',
        password:''
      })
      
      const handleSubmit = async (event) => {
        event.preventDefault();
        try {
          const response = await login(user);
          console.log(response);
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