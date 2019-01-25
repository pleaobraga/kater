import React from 'react';
import { SecondaryBanner, CardForm} from '../components'
import { contactUs } from '../data/contactUs.json';


const ContactUsPage = () => {
  return (
      <section className="section section-about about">
        <SecondaryBanner  banner={contactUs} />
        <CardForm card={contactUs.card} />      
      </section>
  );
};

export default ContactUsPage;