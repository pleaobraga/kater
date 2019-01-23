import React from 'react';
import { CardHighlight } from './../components';

const HomeContent = () => {
  return (
    <section className="home-content">
      <div className="container">
          <div className="row">
            <CardHighlight/>
            <CardHighlight/>
            <CardHighlight/>
          </div>
      </div>
    </section>
  );
};

export default HomeContent;