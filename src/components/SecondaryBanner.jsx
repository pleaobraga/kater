import React from "react"


const SecondaryBanner = ({banner}) => {
    return (
        <div className="section-banner">
            <h1 className="section-title">
                {banner.title}
            </h1>
            <h2 className="section-subtitle">
                {banner.subtitle}
            </h2>
        </div>
    )
}

export default SecondaryBanner;