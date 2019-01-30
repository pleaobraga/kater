import React from "react"
import CardBase from './CardBase'
import PlainsList from './PlainsList'
import RegisterPlainForm from './RegisterPlainForm'


const CardPlains = ({card, selectPlain, form, plain}) => {
    return (
        <CardBase card={card} >
            <PlainsList card={card} selectPlain={selectPlain} />
            {
                 !Object.entries(plain).length && (
                    <RegisterPlainForm form={form} plain={plain} />
                )
            }
        </CardBase>
    )
}

export default CardPlains;