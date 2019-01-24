import React from 'react'
import CardHighlight from './CardHighlight'

const ListCardHighlight = ({cardList}) => {
    return (
        <div className="container">
            <div className="container--content">
            {
                cardList.map((card, index) => {
                    return (
                        <CardHighlight key={index} card={card} />
                    )
                })
            }
            </div>
        </div>
    )
}

export default ListCardHighlight

