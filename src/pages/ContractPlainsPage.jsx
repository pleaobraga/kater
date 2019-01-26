import React from 'react';
import { SecondaryBanner, CardPlains } from '../components'
import { cityList } from '../data/cityPlains.json'


const ContractPage = (props) => {

  const city = cityList[props.match.params.city]

  if(city != undefined || city != null) {
    return (
      <section className="section section-where where">
         <SecondaryBanner  banner={city.banner} />
          <CardPlains card={city.card} />     
      </section>
    );
  }

  return null
};

export default ContractPage;