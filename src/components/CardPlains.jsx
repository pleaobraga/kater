import React from "react"
import CardBase from './CardBase'
import PlainsList from './PlainsList'


const CardPlains = ({card}) => {
    return (
        <CardBase card={card} >
            <PlainsList card={card} />
        </CardBase>
    )
}

export default CardPlains;