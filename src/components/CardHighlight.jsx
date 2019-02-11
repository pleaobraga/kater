import React from "react";
import ListText from "./ListText";
import Dropdown from "./Dropdown";

class CardHighlight extends React.Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
    };
  }

  updateDimensions = () => {
    this.setState({
      width: window.innerWidth,
    });
  };

  renderTypeDeviceContent = (content, index) => {
    switch (content.type) {
      case "button":
        return (
          <div className="card-highlight--cta" key={index}>
            <a href="" className="btn btn--primary">
              {content.cta}
            </a>
          </div>
        );

      case "list":
        return <ListText listItens={content.content} key={index} />;

      case "dropdown":
        return <Dropdown card={content} key={index} />;

      default:
        return null;
    }
  };

  renderLastContent(width, card) {
    if (width > 768) {
      return card.desktop.map((content, index) => {
        return this.renderTypeDeviceContent(content, index);
      });
    } else {
      return card.responsive.map((content, index) => {
        return this.renderTypeDeviceContent(content, index);
      });
    }
  }

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    const { card } = this.props;
    const { width } = this.state;

    return (
      <div className="card-highlight">
        <div className="card-highlight--item">
          <img
            className="card-highlight--image"
            src={process.env.PUBLIC_URL + card.img}
            alt="backgound image"
          />

          <div className="card-highlight--content">
            <p className="card-highlight--index">{card.title}</p>

            <h2 className="card-highlight--title">{card.titleContent}</h2>

            <p
              className="card-highlight--text"
              dangerouslySetInnerHTML={{ __html: card.content }}
            />

            {this.renderLastContent(width, card)}
          </div>
        </div>
      </div>
    );
  }
}

export default CardHighlight;
