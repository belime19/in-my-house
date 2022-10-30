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
                src="https://a0.muscache.com/im/pictures/miso/Hosting-27683528/original/52f664cb-e508-470d-875e-a7ad53e68fb5.jpeg?aki_policy=large"
                title="Expériences en ligne"
                description="Des activités uniques que nous pouvons faire ensemble, dirigées par un monde d'hôtes."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/8a0fc884-a442-4045-a13c-d69690ccaf9b.jpg?im_w=720"
                title="Séjours uniques"
                description="Des espaces qui sont plus qu'un simple endroit où dormir."
            />
            <Card
                src="https://a0.muscache.com/im/pictures/92352bf8-225a-41da-9b94-be931239ad46.jpg?im_w=720"
                title="Maisons entières"
                description="Des lieux privés confortables, avec de la place pour les amis ou la famille."
            />
            </div>
            <div className='home__section'>
            <Card
                src="https://a0.muscache.com/im/pictures/79754e26-429b-4ddc-b211-e0a94f605517.jpg?aki_policy=large"
                title="Appartement de 3 chambres à coucher à Nice"
                description="Super hôte avec une vue imprenable sur la plage de Sunny Bournemouth"
                price="€130/nuit"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/b93cf82e-0ca3-466a-ac39-b85007839535.jpg?aki_policy=large"
                title="Penthouse à Nantes"
                description="Profitez de la vue imprenable sur Nantes grâce à ce superbe penthouse."
                price="€350/nuit"
            />
            <Card
                src="https://a0.muscache.com/im/pictures/95bfe93f-45f9-4293-a184-04e0fcb92aa0.jpg?im_w=720"
                title="Appartement avec 1 chambre"
                description="Superhost avec de grands équipements et un fabuleux complexe commercial à proximité."
                price="€70/nuit"
            />
            </div>
        </div>
    )
}

export default Home
