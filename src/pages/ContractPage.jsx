import React from "react";
import { SecondaryBanner, CardCityList } from "../components";
import { contract } from "../data/contract.json";

class ContractPage extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <section
        className={`section section-where where ${this.props.classesName}`}
      >
        <SecondaryBanner banner={contract} />
        <CardCityList card={contract.card} />
      </section>
    );
  }
}

ContractPage.defaultProps = {
  classesName: "",
};

export default ContractPage;
