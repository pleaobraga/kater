import React from "react"

const CardBase = ({card, children}) => {
    return (
        <div className="section-content">
            <div className="card-page">
                <h4 className="card-page--title">
                    {card.title}
                </h4>
                <p className="card-page--text">
                    {card.content}
                </p>

                {children}

            </div>
        </div>
    )
}

export default CardBase;