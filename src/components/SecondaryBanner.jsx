import React from "react"


const SecondaryBanner = ({banner}) => {
    return (
        <div className="section-banner_card">
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