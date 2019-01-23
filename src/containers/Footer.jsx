import React from 'react'
import { footer } from '../data/footer.json'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-10 col-md-offset-1">
            <div className="footer-container">
              {
                footer.list.cities.map(city => {

                  return(
                    <div className="footer-item">

                      <div className="footer-item-city">
                        { city.name }
                      </div>

                      <p className="footer-item-tel">
                        <a href="">
                        { city.phone }
                        </a>
                      </p>

                      <p className="footer-item-mail">
                        <a href={`mailto:${city.email}`}>
                        { city.email }
                        </a>
                      </p>

                    </div>
                  )
                })
              }

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;