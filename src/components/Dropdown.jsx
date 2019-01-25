import React from "react"
import { Link } from 'react-router-dom'


class Dropdown extends React.Component {

    constructor() {
        super()
        this.state = {
            open: false
        }
    }

    toggleDropdown() {

        let { open } = this.state;

        this.setState({open: !open});
    }

    render() {
        const { open } = this.state;
        const { card } = this.props;

        return (  
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
        )
    }
    
}

export default Dropdown;