import React from "react";
import MaskedInput from "react-text-mask";

class Form extends React.Component {
  renderRightComponent(component) {
    switch (component.type) {
      case "input":
        return (
          <input
            id={component.id}
            type={component.inputType}
            className="form-input"
            required={component.required}
            placeholder={component.placeholder}
            ref={component.id}
            name={component.id}
            disabled={component.disabled ? component.disabled : false}
          />
        );

      case "phone":
        return (
          <MaskedInput
            mask={() => {
              return [
                "(",
                /\d/,
                /\d/,
                ")",
                " ",
                /\d/,
                " ",
                /\d/,
                /\d/,
                /\d/,
                /\d/,
                "-",
                /\d/,
                /\d/,
                /\d/,
                /\d/,
              ];
            }}
            className="form-input"
            placeholder="(00) 0 0000-0000"
            ref={component.id}
            name={component.id}
            required={component.required}
            id="phone"
          />
        );

      case "select":
        return (
          <select
            id={component.id}
            type={component.inputType}
            className="form-input"
            required={component.required}
            placeholder={component.placeholder}
            ref={component.id}
            name={component.id}
          >
            {component.options.map((item, index) => {
              return (
                <option key={index} value={item.text} className="form-input">
                  {item.text}
                </option>
              );
            })}
          </select>
        );

      case "textarea":
        return (
          <textarea
            id={component.id}
            className="form-input"
            required={component.required}
            placeholder={component.placeholder}
            ref={component.id}
            name={component.id}
            rows="10"
            cols="30"
          />
        );

      case "cep":
        return (
          <MaskedInput
            mask={() => {
              return [/\d/, /\d/, /\d/, /\d/, /\d/, "-", /\d/, /\d/, /\d/];
            }}
            className="form-input"
            placeholder="00000-000"
            ref={component.id}
            name={component.id}
            required={component.required}
          />
        );

      default:
        return null;
    }
  }

  renderFormComponents(formItens) {
    return formItens.map((component, index) => {
      return (
        <div key={index} className="form-group">
          <label
            htmlFor={component.id}
            className="form-label form-label--block"
          >
            {component.label}
          </label>
          {this.renderRightComponent(component)}
        </div>
      );
    });
  }

  submitForm = (event) => {
    event.preventDefault();

    console.log(this.props);

    const formfields = event.target.elements;
    let formatedData = {};

    for (let i = 0; i < formfields.length - 1; i++) {
      formatedData[formfields[i].id] = formfields[i].value;
    }

    if (this.props.plainData && this.props.plainData.name) {
      const { plainData } = this.props;

      for (let i in plainData) {
        formatedData[`plain-${i}`] = plainData[i];
      }
    }

    const templateID =
      window.location.pathname === "/quem-somos"
        ? "template_9kziNNxn"
        : "template_ccontratatr_servi_os";

    window.emailjs.send("gmail", templateID, formatedData).then(
      function(response) {
        console.log("SUCCESS!", response.status, response.text);
        window.location = "/";
      },
      function(error) {
        alert("FAILED...", error);
      },
    );
  };

  render() {
    const { itens: formItens, cta } = this.props.form;

    if (formItens && formItens.length > 0) {
      return (
        <form className="form" onSubmit={this.submitForm}>
          {this.renderFormComponents(formItens)}

          <div className="form-group">
            <button type="submit" className="btn btn--submit">
              {cta}
            </button>
          </div>
        </form>
      );
    }

    return null;
  }
}

Form.defaultProps = {
  plainData: {},
};

export default Form;
