import React, { useContext, useState } from 'react'
import './Header.css'
import SearchIcon from "@material-ui/icons/Search";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";
import Auth from '../context/Auth';
import { logout } from '../services/AuthService';
import AddPropertyForm from './AddPropertyForm';
import CustomizedDialogs from './dialog';
import {DateRangePicker, Provider, defaultTheme} from '@adobe/react-spectrum'
import {today, getLocalTimeZone} from '@internationalized/date';
import PeopleIcon from "@material-ui/icons/People";
import { Button } from "@material-ui/core";
import { setItem } from '../services/LocalStorage';


function Header() {
    const history = useHistory();
    const [openAddPropertyDialog, setOpenAddPropertyDialog] = useState(false);
    const {isAuthenticated, setIsAuthenticated} = useContext(Auth);
    let [dates, setDates] = React.useState({
        start: today(getLocalTimeZone()),
        end: today(getLocalTimeZone()).add({ weeks: 1 })
      });
      const [ville, setVille] = useState('Paris')

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

    const handleSearch = () => {
        setItem('startDate', dates.start);
        setItem('endDate', dates.end);
        setItem('ville', ville);
        history.push('/search')
    }

    const handleVilleChange= (e) => {
        setVille(e.target.value);
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
                <input type="text"  className='search_input' style={{width:200}} onChange={handleVilleChange} placeholder='Ville de destination'/>
                <Provider theme={defaultTheme} className='date_range'>
                    <DateRangePicker   value={dates} onChange={setDates}/>
                </Provider>
               
                <div className='nombre_invite'>
                    <label><PeopleIcon /> </label>
                     <input min={0} defaultValue={2} type="number"/>  
                </div>
                <Button className='search_button' onClick={handleSearch}><SearchIcon/></Button>
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
