import React from 'react';
import { SecondaryBanner, CardForm} from '../components'
import { contactUs } from '../data/contactUs.json';
import  ContractPage  from './ContractPage';


class ContactUsPage extends React.Component {

  constructor() {
    super()
    this.state = { 
      width: window.innerWidth
    };
  }

  updateDimensions = () => {
    this.setState({
      width: window.innerWidth
    });
  }

  componentDidMount() {
    window.scrollTo(0, 0);
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }


  render() {
    const { width } = this.state

    return (
      <React.Fragment>
        <section className="section section-about about">
          <SecondaryBanner  banner={contactUs} />
          <CardForm card={contactUs.card} />      
        </section>
        {
          width < 768 && ( <ContractPage classesName={"fix-top"} /> )
        }
      </React.Fragment>
    );
  }
};

export default ContactUsPage;