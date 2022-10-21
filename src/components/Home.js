import React from 'react';
import './Home.css';
import Banner from './Banner'
import Card from './Card'

// ES7 snippets to do 'rfce'

function Home() {
    return (
        <div className='home'>
            <Banner />

            <div className='home__section'>
            <Card
                src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"
                title="Expériences en ligne"
                description="Des activités uniques que nous pouvons faire ensemble, dirigées par un monde d'hôtes."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720"
                title="Séjours uniques"
                description="Des espaces qui sont plus qu'un simple endroit où dormir."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?im_w=720"
                title="Maisons entières"
                description="Des lieux privés confortables, avec de la place pour les amis ou la famille."
            />
            </div>
            <div className='home__section'>
            <Card
                src="https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg"
                title="Appartement de 3 chambres à coucher à Nice"
                description="Super hôte avec une vue imprenable sur la plage de Sunny Bournemouth"
                price="€130/nuit"
            />
            <Card
                src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="Penthouse à Londres"
                description="Profitez de la vue imprenable sur Londres grâce à ce superbe penthouse."
                price="€350/nuit"
            />
            <Card
                src="https://media.nomadicmatt.com/2018/apartment.jpg"
                title="1 Bedroom apartment"
                description="Superhost with great amenities and a fabolous shopping complex nearby"
                price="€70/nuit"
            />
            </div>
        </div>
    )
}

export default Home
