import React from 'react';
import { SecondaryBanner, CardCTA } from '../components'
import { where } from '../data/where.json';


const WherePage = () => {
  return (
      <section className="section section-where where">      
        <SecondaryBanner  banner={where} />
        <CardCTA card={where.card} />      
    </section>
  );
};


export default WherePage;