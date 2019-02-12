import React from "react";
import { SecondaryBanner, CardCTA } from "../components";
import { about } from "../data/about.json";
import ContractPage from "./ContractPage";

class AboutPage extends React.Component {
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

  componentDidMount() {
    window.scrollTo(0, 0);
    window.addEventListener("resize", this.updateDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  render() {
    const { width } = this.state;

    return (
      <React.Fragment>
        <section className="section section-about about">
          <SecondaryBanner banner={about} />
          <CardCTA card={about.card} />
        </section>
        {width < 768 && <ContractPage classesName={"fix-top"} />}
      </React.Fragment>
    );
  }
}

export default AboutPage;
