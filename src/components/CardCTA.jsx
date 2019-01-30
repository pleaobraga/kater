import React from "react"
import CardBase from './CardBase'
import { Link } from "react-router-dom"
import ListText from "./ListText"


const CardCTA = ({card}) => {
    return (
        <CardBase card={card} >
            <ListText listItens={card.listItens} />
            <div className="card-page--cta">
                <Link to={card.linkCta} className="btn btn--primary">
                    {card.cta}
                </Link>
            </div>
        </CardBase>
    )
}

export default CardCTA;