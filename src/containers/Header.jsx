import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <div className="header-container">
                <div className="header-logo">
                    <img src={`${process.env.PUBLIC_URL ? process.env.PUBLIC_URL : ''}/assets/images/kater.jpg`} alt="" />
                </div>
                <nav className="header-nav">
                    <ul className="header-nav-list">
                        <li className="header-nav-item">
                            <Link to="/quem-somos" className="header-nav-link">Quem somos</Link>
                        </li>
                        <li className="header-nav-item">
                            <Link to="/onde-estamos" className="header-nav-link">Onde estamos</Link>
                        </li>
                        <li className="header-nav-item">
                            <Link to="/fale-conosco" className="header-nav-link">Fale Conosco</Link>
                        </li>
                        <li className="header-nav-item">
                            <Link to="/area-do-cliente" className="header-nav-link">Área do cliente</Link>
                        </li>
                    </ul>
                </nav>
                </div>
            </div>
        </header>
    );
};

export default Header;