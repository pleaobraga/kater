import React from 'react';
import { SecondaryBanner, CardCityList } from '../components'
import { contract } from '../data/client.json';


const ContractPage = () => {
  return (
    <section className="section section-where where">
       <SecondaryBanner  banner={contract} />
        <CardCityList card={contract.card} />     
    </section>
  );
};

export default ContractPage;