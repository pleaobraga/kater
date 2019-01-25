import React from "react"
import Dropdown from './Dropdown'

const CardCityList = ({card}) => {
    return (
        <div className="section-content">
            <div className="card-page">

                <h4 className="card-page--title">
                    {card.title}
                </h4>

                <p className="card-page--text">
                    {card.content}
                </p>
                
                <Dropdown card={card} />
                
            </div>
        </div>
    )
}

export default CardCityList;