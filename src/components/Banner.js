import React, { useState } from 'react'
import './Banner.css'
import { Button } from "@material-ui/core";
import Search from './Search';
import { useHistory } from "react-router-dom";

function Banner() {
    const history = useHistory();
    const [showSearch, setShowSearch] = useState(false);

    return (
        <div className='banner'>
            <div className='banner__search'>
                {showSearch && <Search />}
                <Button onClick={() => setShowSearch(!showSearch)} className='banner__searchButton' variant='outlined'>
                    {showSearch ? "Masquer" : "Dates et invités"}
                </Button>
            </div>
            <div className='banner__info'>
                <h1>Sortez et faites travailler votre imagination</h1>
                <h5>
                 Organisez une escapade d'un autre genre pour découvrir les joyaux cachés près de chez vous.
                </h5>
                <Button onClick={() => history.push('/search')} variant='outlined'>Explorer près de chez moi</Button>
            </div>
        </div>
    )
}

export default Banner
