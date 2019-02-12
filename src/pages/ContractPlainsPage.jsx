import React from 'react';
import { SecondaryBanner, CardPlains } from '../components'
import { cityList, registerForm } from '../data/cityPlains.json'


class ContractPage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      selectedPlain: {}
    }
  }

  componentDidMount() {
    window.scrollTo(0, 0);
  }

  selectPlain = (plain) =>  {

    this.setState({selectedPlain: plain});

    setTimeout(() => {
      const cityName = cityList[this.props.match.params.city].name
      document.getElementById("cidade").value = cityName

      const elmnt = document.getElementById("register");
      elmnt.scrollIntoView(true);
      
    }, 100);
  }


  render() {

    const city = cityList[this.props.match.params.city]

    if(city !== undefined || city !== null) {
      return (
        <section className="section section-where where">
           <SecondaryBanner  banner={city.banner} />
            <CardPlains 
              card={city.card} 
              selectPlain={this.selectPlain} 
              form={registerForm} 
              plain={this.state.selectedPlain}
            />     
        </section>
      );
    }
  
    return null
    
  }

};

export default ContractPage;