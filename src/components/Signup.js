import React from 'react'
import './Signup.css'
import Button from '@material-ui/core/Button';

import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';

import { useState } from 'react';
import { signup } from '../services/AuthService';
import { useHistory } from "react-router-dom";

function Signup() {

  const [user, setUser] = useState({
    prenom:'',
    nom : '',
    email:'',
    motDePass:''
  })
  const history = useHistory();
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const signupMessage = await signup(user);
      if(signupMessage === 'Utilisateur enregistré avec succès !'){
        history.replace('/login');
      }
    }
    catch ({signupMessage}) {
      console.log(signupMessage);
      
    }
  }
const onChange = (e) => {
    const { name, value } = e.target;
    setUser(prevUser => ({
            ...prevUser,
            [name]: value
    }))
    
}
  return (
    <div>
    <h2>Inscription</h2>
    <form  onSubmit={handleSubmit}>
        <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="firstName">Prénom</InputLabel>
            <Input id="firstName" name="prenom" onChange={onChange} autoComplete="firstName" autoFocus />
        </FormControl>
        <FormControl margin="normal" fullWidth>
            <InputLabel htmlFor="lastName">Nom</InputLabel>
            <Input id="lastName" name="nom" onChange={onChange} autoComplete="lastName"  />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" name="email" type={"email"} onChange={onChange} autoComplete="email"  />
        </FormControl>
        <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input id="password" type="password" onChange={onChange} name="motDePass" autoComplete="password"  />
        </FormControl>
        <Button type="submit" fullWidth variant="contained" color="primary">
            S'inscrire
        </Button>
        </form>
     </div>
  )
}

export default Signup