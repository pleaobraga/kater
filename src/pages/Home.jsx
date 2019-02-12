import React from "react";
import { PrimaryBanner, ListCardHighlight } from "../components";
import { home } from "../data/home.json";

class Home extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return (
      <React.Fragment>
        <section className="section-banner">
          <PrimaryBanner banner={home} />
        </section>
        <section className="section-content">
          <ListCardHighlight cardList={home.cardList} />
        </section>
      </React.Fragment>
    );
  }
}

export default Home;
