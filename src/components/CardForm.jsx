import React from "react"
import Form from './Form'
import CardBase from './CardBase'

const CardForm = ({card}) => {
    return (
        <CardBase card={card} >
            <Form form={card.form} />  
        </CardBase>
    )
}

export default CardForm;