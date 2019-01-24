import React from "react"


const PrimaryBanner = ({banner}) => {
    return (
        <div className="container">
            <h1 className="section-banner--title">
                {banner.title}
            </h1>
            <h2 className="section-banner--subtitle">
                {banner.subtitle}
            </h2>
        </div>
    )
}


export default PrimaryBanner;