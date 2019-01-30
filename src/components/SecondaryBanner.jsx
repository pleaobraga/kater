import React from "react"


const SecondaryBanner = ({banner}) => {
    const pStyle = {
        background: `url(${process.env.PUBLIC_URL + banner.img}) no-repeat scroll 0 0 transparent`
      };

    return (
        <div className="section-banner_card" style={pStyle} >
            <h1 className="section-banner--title">
                {banner.title}
            </h1>
            <h2 className="section-banner--subtitle">
                {banner.subtitle}
            </h2>
        </div>
    )
}

export default SecondaryBanner;