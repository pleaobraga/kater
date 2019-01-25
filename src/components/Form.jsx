import React from 'react'
import MaskedInput from 'react-text-mask'

class Form extends React.Component {

    renderRightComponent(component) {
        switch(component.type) {
            case("input"): 
                return (
                    <input 
                        id={component.id} 
                        type={component.inputType} 
                        className="form-input"
                        required={component.required}
                        placeholder={component.placeholder}
                        ref={component.id}
                        name={component.id}
                    />
                )

            case("phone"): 
                return (
                    <MaskedInput
                        mask={() => { return ['(', /\d/, /\d/, ')', ' ', /\d/,' ', /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/] }}
                        className="form-input"
                        placeholder="(00) 0 0000-0000"
                        ref={component.id}
                        name={component.id}
                        required={component.required}
                    />
                )

            case("select"):
                return(
                    <select 
                        id={component.id} 
                        type={component.inputType} 
                        className="form-input"
                        required={component.required}
                        placeholder={component.placeholder}
                        ref={component.id}
                        name={component.id}
                    >
                        {
                            component.options.map((item, index) => {
                                return (
                                    <option 
                                        key={index}
                                        value={item.text}
                                        className="form-input"
                                    >
                                        {item.text}
                                    </option>
                                )
                            })
                        }
                    </select>
                )
            
            case("textarea"): {
                return(
                    <textarea 
                        id={component.id} 
                        className="form-input"
                        required={component.required}
                        placeholder={component.placeholder}
                        ref={component.id}
                        name={component.id}
                        rows="10" cols="30"
                    >
                    </textarea>
                )
            }
        }
    }

    renderFormComponents(formItens) {
        return formItens.map((component, index) => {
            return (
                <div key={index} className="form-group" >
                    <label htmlFor={component.id} className="form-label form-label--block">
                        {component.label}
                    </label>
                    { this.renderRightComponent(component)}
                </div>
            )
        })
    }

    render() {
        const {itens: formItens, cta} = this.props.form

        if(formItens && formItens.length > 0) {
            return(
                <form className="form" >
                    { this.renderFormComponents(formItens) }

                    <div className="form-group">
                        <button type="submit" className="btn btn--submit">{cta}</button>
                    </div>
                </form>
            )
        }


        return null
    }

}

export default Form
