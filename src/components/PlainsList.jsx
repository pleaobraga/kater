import React from 'react'

const PlainsList = ({card, selectPlain}) => {

    return (
        <div className="plain-list">
        {
            card.typesPlain.map((typePlain, index) => {
                return(
                    <div className="plain-list--content" key={index} >
                        <h3 className="plain-list--title" >{typePlain.title}</h3>
                        {
                            typePlain.plainList.map((plain, index) => {
                                return (
                                    <div key={index} className="box-item" onClick={() => selectPlain(plain)}>
                                        <div className="box-item--title">
                                            <span className="box-item--type">{plain.type}</span>
                                            <h4 className="box-item--name">{plain.name}</h4>
                                        </div>
                                        <div className="box-item--speed">
                                            <img className="box-item--icon" src={process.env.PUBLIC_URL + '/assets/images/icons/icon-wifi.svg'} alt="wifi icon" />
                                            <strong className="box-item--value">{plain.speed}</strong>
                                        </div>
                                        <div className="box-item--price">
                                            <span className="box-item--price-format">R$</span>
                                            <span className="box-item--value">{plain.price}</span>
                                        </div>
                                    </div>
                                )
                            })
                        }
                    </div>
                )
            })
        }

        
        </div>
    )


}

export default PlainsList