import React from 'react';
import { SecondaryBanner, CardCityList } from '../components'
import { client } from '../data/client.json';


const ClientPage = () => {
  return (
    <section className="section section-where where">
       <SecondaryBanner  banner={client} />
        <CardCityList card={client.card} />     
    </section>
  );
};

export default ClientPage;