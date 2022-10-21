import React, { useContext } from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Auth from '../context/Auth';
import { logout } from '../services/AuthService';

function Header() {
    const history = useHistory();
    const {isAuthenticated, setIsAuthenticated} = useContext(Auth);
    const handleLogin = () => {
        history.push('/login');

    }
    const handleSignup = () => {
        history.push('/signup');
        
    }
    const handleLogout = () => {
        setIsAuthenticated(false);
        history.push('/')
    }
    return (
        <div className='header'>
            <Link to='/'>
                <img
                    className="header__icon"
                    src="logo-orange.png"
                    alt=""
                />
            </Link>
           
            <div className='header__center'>
                <input type="text" />
                <SearchIcon />
            </div>
            
            <div className='header__right'>
            {(!isAuthenticated && (
                <>
                <button className='login_button' onClick={handleLogin}> Connexion </button>
                <button className='signup_button' onClick={handleSignup}> Inscription </button>
                </>
            )) || 
                <>
                <button className='login_button' onClick={handleLogout}> Déconnexion </button> 
                </>
            }
            </div>
          
            
        </div>
    )
}

export default Header
