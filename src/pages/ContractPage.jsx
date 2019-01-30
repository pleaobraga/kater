import React from 'react';
import { SecondaryBanner, CardCityList } from '../components'
import { contract } from '../data/contract.json';


const ContractPage = ({classesName}) => {
  return (
    <section className={`section section-where where ${classesName}`}>
       <SecondaryBanner  banner={contract} />
        <CardCityList card={contract.card} />     
    </section>
  );
};

ContractPage.defaultProps = {
  classesName: ""
}

export default ContractPage;