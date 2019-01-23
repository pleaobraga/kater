import React from 'react'
import CardHighlight from './CardHighlight'

const ListCardHighlight = ({cardList}) => {
    return (
        <div className="container">
            <div className="row">
            {
                cardList.map(card => {
                    return (
                        <CardHighlight card={card} />
                    )
                })
            }
            </div>
        </div>
    )
}

export default ListCardHighlight

