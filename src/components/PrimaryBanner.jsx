import React from "react"


const PrimaryBanner = ({banner}) => {
    return (
        <section className="section section-hero hero">
            <div className="container">
                <h1 className="section-title">
                    {banner.title}
                </h1>
                <h2 className="section-subtitle">
                    {banner.subtitle}
                </h2>
            </div>
        </section>
    )
}


export default PrimaryBanner;