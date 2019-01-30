import React from 'react';
import { SecondaryBanner, CardCTA } from '../components'
import { where } from '../data/where.json';
import  ContractPage  from './ContractPage';


class WherePage extends React.Component {

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
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }


  render() {
    const { width } = this.state

    return (
      <React.Fragment>
        <section className="section section-where where">      
          <SecondaryBanner  banner={where} />
          <CardCTA card={where.card} />      
        </section>
        {
          width < 768 && ( <ContractPage classesName={"fix-top"} /> )
        }
      </React.Fragment>
    );
  }
};

export default WherePage;