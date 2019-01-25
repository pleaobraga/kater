import React from "react"
import CardBase from './CardBase'
import Dropdown from './Dropdown'

const CardCityList = ({card}) => {
    return (
        <CardBase card={card} >
            <Dropdown card={card} />
        </CardBase>
    )
}

export default CardCityList;