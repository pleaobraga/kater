import React from 'react'
import { Link } from 'react-router-dom'
import { header } from '../data/header.json'

const Header = () => {
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
                                            <a href={menuItem.link} target="blanlk" className="header-nav-link">{menuItem.name}</a>
                                        </li>
                                    ) : (
                                        <li key={index} className="header-nav-item">
                                            <Link to={menuItem.link} className="header-nav-link">{menuItem.name}</Link>
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
};

export default Header;