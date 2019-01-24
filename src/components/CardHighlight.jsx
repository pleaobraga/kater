import React from 'react';

const CardHighlight = ({ card }) => {
  return (
    <div className="card-highlight">
        <div className="card-highlight--item">
          
          <div className="card-highlight--image"></div>
          
          <div className="card-highlight--content">
            
            <p className="card-highlight--index">
              {card.title}
            </p>
            
            <h2 className="card-highlight--title">
              {card.titleContent}
            </h2>
            
            <p className="card-highlight--text">
              {card.content}          
            </p>
            
            <div className="card-highlight--cta">
              <a href="" className="btn btn--primary">
                {card.cta}
              </a>
            </div>
          
          </div>
        </div>
    </div>
  );
};

export default CardHighlight;