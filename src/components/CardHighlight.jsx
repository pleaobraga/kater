import React from 'react';
import ListText from './ListText'
import Dropdown from './Dropdown'

class CardHighlight extends React.Component {

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

  renderLastContent(width, card) {
    if(width > 768 ){
        return (
          <div className="card-highlight--cta">
            <a href="" className="btn btn--primary">
              {card.cta}
            </a>
          </div>
        )
    } else if(card.responsive.type === "list") {
      return (
        <ListText listItens={card.responsive.content} />
      )
    }

    return (
      <Dropdown card={card.responsive} />
    )
    
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    const { card } = this.props;
    const { width } = this.state;

    return (
      <div className="card-highlight">
          <div className="card-highlight--item">
            
            <img className="card-highlight--image" src={ width > 768 ? "http://lorempixel.com/450/183/" : "http://lorempixel.com/768/183/"} alt="backgound image" />
            
            <div className="card-highlight--content">
              
              <p className="card-highlight--index">
                {card.title}
              </p>
              
              <h2 className="card-highlight--title">
                {card.titleContent}
              </h2>
              
              <p className="card-highlight--text">
                {card.content}          
              </p>

              {
                this.renderLastContent(width, card)
              }
                 
            </div>
          </div>
      </div>
    );
  }

};

export default CardHighlight;