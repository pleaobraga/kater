import React from 'react'
import { footer } from '../data/footer.json'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="container--content container--content_spread  container--content_center">
          <div className="text-content">
            <h4 className="text-content--title">{footer.title}</h4>
            <h5 className="text-content--subtitle">{footer.subTitle}</h5>
          </div>
          <div className="sodial-media">
            {
              footer.socialList.map((social, index) => {
                return(
                  <a key={index} className="social-media--link" href={social.link} target="blank" >
                    <img src={social.img} alt={`${social.name} logo`} className="social-media--logo"/>
                  </a>
                )
              })
            }
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;