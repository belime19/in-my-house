import React from 'react';
import './SearchPage.css';
import { Button } from "@material-ui/core";
import SearchResult from "./SearchResult";

function SearchPage() {
    return (
        <div className='searchPage'>
            <div className='searchPage__info'>
                <p>62 séjours - 26 août au 30 août - 2 invités</p>
                <h1>Séjours à proximité</h1>
            </div>
            <SearchResult
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQ_wbPYTxQPMcBh7SPzLFActXnP3uhifeVT_g&usqp=CAU"
                location="Paris"
                title="Séjournez dans cette spacieuse maison Haussmaniènne"
                description="1 invité - 1 chambre - 1 lit - 1,5 salle de bain commune - Wifi - Cuisine - Parking gratuit - Lave-linge"
                star={4.73}
                price="€30 / nuit"
                total="€117 total"
            />

            <SearchResult
                img="https://www.expatkings.com/wp-content/uploads/2018/10/Airbnb-rental-tips.-Hostmaker-1-620x349.jpg"
                location="Paris"
                title="Studio de luxe indépendant"
                description="2 invités - 3 chambres - 1 lit - 1,5 salle de bain commune - Wifi - Cuisine"
                star={4.3}
                price="€40 / nuit"
                total="€157 total"
            />

            <SearchResult
                img="https://www.smartertravel.com/uploads/2017/07/Untitled-design-8.jpg"
                location="Paris"
                title="Appartements de Paris"
                description="4 invités - 4 chambres - 4 lits - 2 salles de bain - Parking gratuit - Machine à laver"
                star={3.8}
                price="€35 / nuit"
                total="€207 total"
            />
            <SearchResult
                img="https://cdn.bisnow.net/fit?height=489&type=jpeg&url=https%3A%2F%2Fs3.amazonaws.com%2Fcdn.bisnow.net%2Fcontent%2Fimages%2F2017%2F05%2F59151d0978bbf_https_press_atairbnb_com_app_uploads_2016_12_midtown_4.jpeg&width=717&sign=FeltIPi9cOWA36nVIeDvZxwgtiCZrpUyMRdvyZviTUI"
                location="Paris"
                title="30 minutes de Roland Garros"
                description="1 invité - 1 chambre - 1 lit - 1,5 salle de bain commune - Wifi - Cuisine - Parking gratuit - Lave-linge"
                star={4.1}
                price="€55 / nuit"
                total="€320 total"
            />
            <SearchResult
                img="https://media.cntraveler.com/photos/5a8f258bd363c34048b35aac/master/w_2250,h_1500,c_limit/airbnb-plus-london.jpg"
                location="Paris"
                title="Chambre à coucher moderne, spacieuse et paisible"
                description="3 hôtes - 1 chambre - 1 lit - 1,5 salle de bains commune - Wifi - Parking gratuit - Nettoyage à sec"
                star={5.0}
                price="€60 / nuit"
                total="€450 total"
            />
            <SearchResult
                img="https://static.trip101.com/paragraph_media/pictures/001/676/061/large/969ae4bb-efd1-4fb9-a4e3-5cb3316dd3c9.jpg?1562227937"
                location="Paris"
                title="Le Salon bleu à Paris"
                description="2 invités - 1 chambre - 1 lit - 1,5 salle de bain commune - Wifi - Machine à laver"
                star={4.23}
                price="€65 / nuit"
                total="£€480 total"
            />
            <SearchResult
                img="https://image.insider.com/585029a0dd0895bc548b4b8b?width=750&format=jpeg&auto=webp"
                location="Paris"
                title="Appartement de luxe 5 étoiles"
                description="3 personnes - 1 chambre - 1 lit - 1,5 salle de bain commune - Wifi - Cuisine - Parking gratuit - Machine à laver"
                star={3.85}
                price="€90 / nuit"
                total="€650 total"
            />
        </div>
    )
}

export default SearchPage
