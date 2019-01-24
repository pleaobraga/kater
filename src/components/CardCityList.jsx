import React from "react"


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

                <div className="plans-choices">
                    <p className="plans-choices--question">
                        {card.list.title}
                    </p>

                    <ul className="plans-choices--list">
                        {
                            card.list.cities.map(city => {
                                return(
                                    <li className="plans-choices--item">
                                        <a href={city.link} className="plans-choices--link">
                                            {city.name}
                                        </a>
                                    </li>
                                )
                            })
                        }
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default CardCityList;