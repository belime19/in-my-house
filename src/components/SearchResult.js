import React from 'react';
import './SearchResult.css';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import StarIcon from "@material-ui/icons/Star";
import { Button } from '@material-ui/core';
import { reserveProperty } from '../services/reservationService';
import { getItem } from '../services/LocalStorage';
import { useHistory } from 'react-router-dom';

function SearchResult({
    idPropriete,
    img,
    location,
    title,
    description,
    star,
    price,
    total,
}) {
    const history = useHistory();
    const handleReserve = async () => {
        const response = await reserveProperty(
            {
                idPropriete: idPropriete, 
                emailLocataire: getItem('userEmail'),
                dateDebut:getItem('startDate'),
                dateFin: getItem('endDate')
            })
        if(response.status ===200){
            history.push('/reserved')
        }
        console.log(response);
        
    }
    return (
        <div className='searchResult'>
            <img src={img} alt="" />

            <div className='searchResult__info'>
                <div className="searchResult__infoTop">
                    <div></div>
                    <p>{location}</p>
                    <h3>{title}</h3>
                    <p>____</p>
                    <p>{description}</p>
                </div>

                <div className="searchResult__infoBottom">
                    <div className="searchResult__stars">
                        <StarIcon className="searchResult__star" />
                        <p>
                            <strong>{star}</strong>
                        </p>
                    </div>
                    <div className='searchResults__price'>
                        <h2>€{price}/nuit</h2>
                        <p>€{total} total</p>
                    </div>
                </div>
                <button className="reserveButton" onClick={handleReserve} > Réserver </button>
            </div>
            
           
        </div>
    )
}

export default SearchResult
