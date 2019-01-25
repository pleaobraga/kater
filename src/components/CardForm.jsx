import React from "react"
import { SignUp } from "../containers"

const CardForm = ({card}) => {
    return (
        <div className="section-content">
            <div className="card-page">
                <h4 className="card-page--title">
                    {card.title}
                </h4>
                <p className="card-page--text">
                    {card.content}
                </p>

                <SignUp />

            </div>
        </div>
    )
}

export default CardForm;