import React from "react"
import { Link } from "react-router-dom"
import ListText from "./ListText"

const CardCTA = ({card}) => {
    return (
        <div className="section-content">
            <div className="card-page">
                <h4 className="card-page--title">
                    {card.title}
                </h4>
                <p className="card-page--text">
                    {card.content}
                </p>

                <ListText listItens={card.listItens} />

                <div className="card-page--cta">
                    <Link to="/fale-conosco" className="btn btn--primary">
                        {card.cta}
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default CardCTA;