import React, { useEffect, useState } from 'react';
import './SearchPage.css';
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";
import { searchProperties } from '../services/proprieteService';
import { getItem } from '../services/LocalStorage';
import { Item } from '@adobe/react-spectrum';

function SearchPage() {
    const [searchResults, setSearchResult] = useState();
    let startDate = getItem('startDate');
    let endDate = getItem('endDate');
    useEffect(() => {
        const fetchData = async () => {
            console.log(searchResults); 
            const response = await searchProperties({
                    ville: getItem('ville'), 
                    startDate: getItem('startDate'), 
                    endDate: getItem('endDate') });
            console.log(response);        
            setSearchResult(response);
            
        }
        if(searchResults === undefined){
            fetchData();
        }
        
        
        getPeriode();
    },[searchResults,startDate,endDate]);

    const getPeriode = () => {
        const start = new Date(getItem('startDate'));
        const end = new Date(getItem('endDate'));
        return ((end.getTime() - start.getTime())/(1000 * 3600 * 24));
    }
    if (!searchResults) {
        return <>Chargement ...</>;
    }
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p> {searchResults.length} séjours - {getItem('startDate')} au {getItem('endDate')}</p>
                <h1>Séjours à proximité</h1>
            </div>
            {searchResults.map((result, i) => {
                return <SearchResult
                key={i}
                idPropriete={result.idPropriete}
                img={result.image}
                location={result.adresse}
                title={result.titre}
                description={result.description}
                star={result.etoiles}
                price={result.prixUnitaire}
                total={(parseInt(result.prixUnitaire,10)) * getPeriode()}
            />
            })}
        </div>
    )
}

export default SearchPage
