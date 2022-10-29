import React, { useContext } from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Auth from '../context/Auth';
import { logout } from '../services/AuthService';
import AddPropertyForm from './AddPropertyForm';
import CustomizedDialogs from './dialog';

function Header() {
    const history = useHistory();
    const [openAddPropertyDialog, setOpenAddPropertyDialog] = React.useState(false);
    const {isAuthenticated, setIsAuthenticated} = useContext(Auth);
    const handleLogin = () => {
        history.push('/login');

    }
    const handleSignup = () => {
        history.push('/signup');
        
    }
    const handleLogout = () => {
        logout();
        setIsAuthenticated(false);
        history.push('/login')
    }

    const handleHote = () => {
        setOpenAddPropertyDialog(true);
        
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
            <CustomizedDialogs title="Ajoutez une propriété" open={openAddPropertyDialog} setOpen={setOpenAddPropertyDialog}>
                <AddPropertyForm />
            </CustomizedDialogs>
            
            <div className='header__right'>
            {(!isAuthenticated && (
                <>
                <button className='login_button' onClick={handleLogin}> Connexion </button>
                <button className='signup_button' onClick={handleSignup}> Inscription </button>
                </>
            )) || 
                <>
                <button className='login_button' onClick={handleLogout}> Déconnexion </button>
                <button className='hote_button' onClick={handleHote}> Devenez hôte </button>  
                </>
            }
            </div>
            
        </div>
    )
}

export default Header
