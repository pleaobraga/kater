import React from 'react';
import { SecondaryBanner, CardCTA } from '../components'
import { about } from '../data/about.json';


const AboutPage = () => {
  return (
      <section className="section section-about about">
        <SecondaryBanner  banner={about} />
        <CardCTA card={about.card} />      
      </section>
  );
};

export default AboutPage;