import React, { Component } from 'react';
import { signUp } from './../services';
import MaskedInput from 'react-text-mask'
import { Feedback } from './../components';

class SignUp extends Component {

    constructor(props) {
        super(props);

        this.state = {
            feedback: {
                message: '',
                isVisible: false,
                status: ''
            },
            isLoading: false,
            terms: false
        }

    }

    handleSubmit = (event) => {
        this.setState({ isLoading: true });
        event.preventDefault();

        // validation
        if (!this.refs.inputEmail.value || !this.refs.inputName.value || !this.state.terms) {
            this.setState({
                feedback: {
                    message: 'Ops! Por favor, preencha os campos!',
                    isVisible: true,
                    status: 'error'
                },
                isLoading: false,
                terms: true
            })
            return;
        }

        if (!/(.+)@(.+){2,}\.(.+){2,}/.test(this.refs.inputEmail.value)) {
            this.setState({
                feedback: {
                    message: 'Preencha com um e-mail válido.',
                    isVisible: true,
                    status: 'error'
                },
                isLoading: false
            })
            return
        }

        /*signUp(event)
            .then(response => {
                if (response.status === 200) {
                    this.setState({
                        isLoading: false
                    });
                    return response.json();
                } else if (response.status === 201) {
                    this.setState({
                        feedback: {
                            message: 'Enviado com sucesso.',
                            isVisible: true,
                            status: 'success'
                        },
                        isLoading: false
                    })
                    return response.json();
                } else if (response.status === 403) {
                    return response.json().then(data => {
                        if (data) {
                            if (data[0]) {
                                this.setState({
                                    feedback: {
                                        message: data[0].message,
                                        status: 'error',
                                        isVisible: true
                                    },
                                    isLoading: false
                                })

                                throw new Error(data[0].message);

                            } else if (data.message) {
                                this.setState({
                                    feedback: {
                                        message: data.message,
                                        status: 'error',
                                        isVisible: true
                                    },
                                    isLoading: false
                                })

                                throw new Error(data.message);
                            } else {

                                this.setState({
                                    feedback: {
                                        message: 'Algo deu errado! Tente novamente mais tarde.',
                                        status: 'error',
                                        isVisible: true
                                    },
                                    isLoading: false
                                })
                                throw new Error('Algo deu errado! Tente novamente mais tarde.');
                            }
                        }
                    });
                } else {
                    throw new Error('Algo deu errado! Tente novamente mais tarde.');
                }
            })
            .then(data => {
                const signUpForm = document.querySelector('form');
                signUpForm.reset();
                this.setState({ messenger: { isVisible: false, message: '' } });
            })
            .catch(err => {
                this.setState({
                    feedback: {
                        message: err.message,
                        status: 'error',
                        isVisible: true
                    },
                    isLoading: false
                })
            });*/
    }

    closeMessage = () => {
        this.setState({
            feedback: {
                isVisible: false
            }
        });
    }

    handleCheckbox = (e) => {
        this.setState({ terms: !this.state.terms })
    }


    render() {
        return (
            <section className="section section--form form">
                <form action="" onSubmit={this.handleSubmit.bind(this)} noValidate>
                    <div>
                        <div className="form-group">
                            <label htmlFor="name" className="form-label form-label--block">
                                Nome
                            </label>
                            <input
                                ref="inputName"
                                type="text"
                                name="name"
                                id="name"
                                placeholder="Digite seu nome aqui"
                                maxLength={100}
                                required={true}
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email" className="form-label form-label--block">
                                E-mail
                            </label>
                            <input
                                ref="inputEmail"
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Digite seu e-mail aqui"
                                maxLength={100}
                                required={true}
                                className="form-input"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone" className="form-label form-label--block">
                                Telefone <span>(opcional)</span>
                            </label>
                            <MaskedInput
                                mask={(rawValue) => { return ['(', /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/] }}
                                maxLength={100}
                                className="form-input"
                                placeholder="(00) 00000-0000"
                                id="phone"

                            />
                        </div>

                        <div className="form-group">
                            <div>
                                <button type="submit" className="btn btn--submit">Enviar!</button>
                            </div>

                            <Feedback text={this.state.feedback.message}/>
                        </div>
                    </div>
                </form>
            </section>
        );
    }
}

export default SignUp;