import React from 'react';
import { PrimaryBanner, ListCardHighlight } from '../components'
import { home } from '../data/home.json'


const Home = () =>  {
    return (
        <div>
            <PrimaryBanner banner={home} />
            <section className="home-content">
                <ListCardHighlight cardList={home.cardList} />
            </section>
        </div>
    )
}

export default Home;