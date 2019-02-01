import React from "react"

const CardBase = ({card, children}) => {

    const renderTitleArea = () => {
        if(card.subtitle !== undefined) {
            return (
                <div className="title-box" >
                    <h2 className="title-box--subtitle" >{card.subtitle}</h2>
                    <h1 className="title-box--title" id="title" >{card.title}</h1>
                </div>
            )
        }
    
        return (
            <h1 className="card-page--title" id="title" >
                {card.title}
            </h1>
        )
    }

    return (
        <div className="section-content">
            <div className="card-page">
                {renderTitleArea()}
                <p 
                    className="card-page--text" 
                    dangerouslySetInnerHTML={{ __html: card.content }}
                />

                {children}

            </div>
        </div>
    )


}

export default CardBase;