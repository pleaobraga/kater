import React from 'react';
import { PrimaryBanner,CardHighlight } from '../components'
import { home } from '../data/home.json'


const Home = () =>  {
    return (
        <div>
            <PrimaryBanner banner={home} />
            <section className="home-content">
                <div className="container">
                    <div className="row">
                    {
                        home.cardList.map(card => {
                            return (
                                <CardHighlight card={card} />
                            )
                        })
                    }
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home;