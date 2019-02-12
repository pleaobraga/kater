import React from "react";
import { Link } from "react-router-dom";
import { header } from "../data/header.json";

class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      width: window.innerWidth,
      openMenu: false,
    };
  }

  updateDimensions = () => {
    this.setState({
      height: window.innerHeight,
      width: window.innerWidth,
    });
  };

  handleMenu = (event) => {
    if (event.target.getAttribute("class") === "menu-icon") {
      this.state.openMenu === false ? this.openMenu() : this.closeMenu();
    } else if (this.state.openMenu === true) {
      this.closeMenu();
    }
  };

  closeMenu = () => {
    if (this.state.openMenu) {
      this.setState({ openMenu: false });
    }
  };

  openMenu = () => {
    this.setState({ openMenu: true });
  };

  componentDidMount() {
    window.addEventListener("resize", this.updateDimensions);
    window.addEventListener("click", this.handleMenu);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateDimensions);
  }

  renderMobileVersion() {
    return (
      <header className="header-mobile" id="header">
        <div className="container--content container--content_spread container--content_center">
          <Link className="header-mobile--logo" to="/">
            <img
              src={process.env.PUBLIC_URL + "/assets/images/logo-cmdnet.jpg"}
              alt="Logo"
            />
          </Link>
          <div className="menu">
            <a
              href={header.static.link}
              target="blank"
              className="header-nav-mobile--link"
            >
              {header.static.name}
            </a>
            <button className="menu-button">
              <img
                src={
                  process.env.PUBLIC_URL +
                  "/assets/images/icons/hamburguer-icon.svg"
                }
                alt="Menu Button"
                className="menu-icon"
              />
            </button>
          </div>
        </div>
        <nav
          className={`header-nav-mobile ${this.state.openMenu ? "" : "hidden"}`}
        >
          <ul className="header-nav-mobile--list">
            {header.menuList.map((menuItem, index) => {
              return menuItem.externalLink ? (
                <li key={index} className="header-nav-mobile--item">
                  <a
                    href={menuItem.link}
                    target="blank"
                    className="header-nav-mobile--link"
                  >
                    {menuItem.name}
                  </a>
                </li>
              ) : (
                <li key={index} className="header-nav-mobile--item">
                  <Link to={menuItem.link} className="header-nav-mobile--link">
                    {menuItem.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </header>
    );
  }

  renderDesktopVersion() {
    return (
      <header className="header" id="header">
        <div className="container">
          <div className="container--content container--content_spread">
            <Link className="header-logo" to="/">
              <img
                src={process.env.PUBLIC_URL + "/assets/images/logo-cmdnet.jpg"}
                alt="Logo"
              />
            </Link>
            <nav className="header-nav">
              <ul className="header-nav-list">
                {header.menuList.map((menuItem, index) => {
                  return menuItem.externalLink ? (
                    <li key={index} className="header-nav-item">
                      <a
                        href={menuItem.link}
                        target="blank"
                        className="header-nav-mobile--link"
                      >
                        {menuItem.name}
                      </a>
                    </li>
                  ) : (
                    <li key={index} className="header-nav-item">
                      <Link
                        to={menuItem.link}
                        className="header-nav-mobile--link"
                      >
                        {menuItem.name}
                      </Link>
                    </li>
                  );
                })}
                <li className="header-nav-item">
                  <a
                    href={header.static.link}
                    target="blank"
                    className="header-nav-link"
                  >
                    {header.static.name}
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    );
  }

  render() {
    const { width } = this.state;

    return (
      <React.Fragment>
        {width > 991 ? this.renderDesktopVersion() : this.renderMobileVersion()}
      </React.Fragment>
    );
  }
}

export default Header;
