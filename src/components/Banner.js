import React, { useState } from 'react'
import './Banner.css'
import { Button } from "@material-ui/core";
import { useHistory } from "react-router-dom";

function Banner() {
    const history = useHistory();

    return (
        <div className='banner'>
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
