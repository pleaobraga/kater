import React from 'react'
import { Link } from 'react-router-dom'
import { header } from '../data/header.json'

class Header extends React.Component {


    renderMobileVersion() {
        return (
            <header className="header-mobile">
                 <div className="container--content container--content_spread container--content_center">
                        <Link className="header-mobile--logo" to="/" >
                            <img src="/assets/images/kater.jpg" alt="Logo" />
                        </Link>
                        <button className="menu-button" >
                            <img src="/assets/images/icons/hamburguer-icon.svg" alt="Menu Button" className="menu-icon"/>
                        </button>
                    </div>
                    <nav className="header-nav-mobile">
                        <ul className="header-nav-mobile--list">
                            {
                                header.menuList.map((menuItem, index) => {
                                    return menuItem.externalLink ?
                                    (
                                        <li key={index}  className="header-nav-mobile--item">
                                            <a href={menuItem.link} target="blank" className="header-nav-mobile--link">{menuItem.name}</a>
                                        </li>
                                    ) : (
                                        <li key={index} className="header-nav-mobile--item">
                                            <Link to={menuItem.link} className="header-nav-mobile--link">{menuItem.name}</Link>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </nav> 
            </header>
        )
    }


    renderDesktopVersion() {
        return (
            <header className="header">
                <div className="container">
                    <div className="container--content container--content_spread">
                        <Link className="header-logo" to="/" >
                            <img src="/assets/images/kater.jpg" alt="Logo" />
                        </Link>
                        <nav className="header-nav">
                            <ul className="header-nav-list">
                                {
                                    header.menuList.map((menuItem, index) => {
                                        return menuItem.externalLink ?
                                        (
                                            <li key={index}  className="header-nav-item">
                                                <a href={menuItem.link} target="blank" className="header-nav-link">{menuItem.name}</a>
                                            </li>
                                        ) : (
                                            <li key={index} className="header-nav-item">
                                                <Link to={menuItem.link} className="header-nav-mobile--link">{menuItem.name}</Link>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </nav>
                    </div>
    
                </div>
            </header>
        );

    }

    render() {
        return (
            <React.Fragment>
                {this.renderMobileVersion()}
            </React.Fragment>
        );
    }
};

export default Header;