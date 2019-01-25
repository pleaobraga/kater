import React from "react"
import { Link } from 'react-router-dom'


class CardCityList extends React.Component {

    constructor() {
        super()
        this.state = {
            open: false
        }

        this.myRef = React.createRef();
    }

    toggleDropdown() {

        let { open } = this.state;

        this.setState({open: !open});
    }

    render() {
        const { open } = this.state;
        const { card } = this.props;

        return (
            <div className="section-content">
                <div className="card-page">
    
                    <h4 className="card-page--title">
                        {card.title}
                    </h4>
    
                    <p className="card-page--text">
                        {card.content}
                    </p>
                   
    
                    <div className="custom-select">
                        <div className="custom-select--title" onClick={() => this.toggleDropdown()}  >
                            <span ref={this.myRef} >
                                {card.list.title}
                            </span>
                            <img src="/assets/images/icons/triangle-down.svg" alt="triangle icon"/>
                        </div>
                        <div className={`custom-select--items ${open ? "" : "hidden"}`}  >
                            {
                                card.list.cities.map((city, index) => {
                                    return(
                                        <Link 
                                            key={index}
                                            to={city.link} 
                                        >
                                            {city.name}
                                        </Link>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default CardCityList;