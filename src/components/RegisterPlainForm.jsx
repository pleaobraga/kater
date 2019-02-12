import React from 'react'
import Form from './Form'

const RegisterPlainForm = ({form, plain}) => {

    return (
        <div className="select-plain-form" id="register">
            <h2 className="select-plain-form--title" >{form.title}</h2>

            <div className="select-plain-form--plain-info">
                <span className="select-plain-form--subtitle" >{form.selectPlainText}</span>
                <div className="box-item">
                    <div className="box-item--title">
                        <span className="box-item--type">{plain.type}</span>
                        <h4 className="box-item--name">{plain.name}</h4>
                    </div>
                    <div className="box-item--speed">
						<strong className="box-item--value">{plain.speed}</strong>
						<span className="box-item--wifi">{plain.wifi}</span>
                    </div>
                    <div className="box-item--price">
						<span className="box-item--price-format">R$/M&ecirc;s</span>
						<span className="box-item--value">{plain.price}</span>
                    </div>
                </div>
            </div>

            <div className="select-plain-form--register-form" >
                <Form form={form} plainData={plain} />
            </div>
        </div>
    )


}

export default RegisterPlainForm