import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import menus from "../../pages/menu";

import "./styles.scss";
// import logo from '../../assets/images/logo/logo.png'
import travel_logo from "../../assets/images/logo/logo_footer.png";
// import Button from '../button';
import "./home.css";

const Header = () => {
  const [scroll, setScroll] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 300);
    });
    return () => {
      setScroll({});
    };
  }, []);

  const [menuActive, setMenuActive] = useState(null);

  const handleMenuActive = () => {
    setMenuActive(!menuActive);
  };

  const [activeIndex, setActiveIndex] = useState(null);
  const handleDropdown = (index) => {
    setActiveIndex(index);
  };

  return (
    <header id="header_main" className={`header ${scroll ? "is-fixed" : ""}`}>
      <div className="container">
        <div id="site-header-inner">
          <div className="header__logo">
            {/* <NavLink to="/"> */}
            <NavLink to="/">
              <img src={travel_logo} alt="Crybox" width={150} />
            </NavLink>
            {/* </NavLink> */}
          </div>
          <nav
            id="main-nav"
            className={`main-nav ${menuActive ? "active" : ""}`}
          >
            <ul id="menu-primary-menu" className="menu">
              <li className="d-flex flex-lg-row flex-column justify-content-center ms-mg-5 ms-0">
                <NavLink to="/" className="py-lg-0 py-2 mx-auto">
                  Home
                </NavLink>

                <div className="header-line d-lg-none d-block "></div>
                <a
                  className="py-lg-0 py-2  mx-auto"
                  target="_blank"
                  rel="noreferrer"
                  href="https://travelerse.gitbook.io/travelerse/"
                >
                  whitepaper
                </a>
                <div className="header-line d-lg-none d-block "></div>

                <a
                  className="py-lg-0 py-2  mx-auto"
                  target="_blank"
                  rel="noreferrer"
                  href="https://app.travelerse.club/claim"
                >
                  Private sale
                </a>

                <div className="header-line d-lg-none d-block "></div>

                <Link className="py-lg-0 py-2  mx-auto" to="/Contact">
                  Contact
                </Link>
                <div className="header-line d-lg-none d-block "></div>

                {/* {
                                            data.namesub &&
                                            <ul className="sub-menu">
                                                {
                                                    data.namesub.map((submenu) => (
                                                        <li key={submenu.id} className="menu-item"><NavLink to={submenu.links}>{submenu.sub}</NavLink></li>
                                                    ))
                                                }
                                            </ul>
                                        }
                                         */}
              </li>
            </ul>
          </nav>

          {/* <Button title='join telegram' path='/contact' id='home-btn' /> */}

          <a
            href="https://t.me/Travelerse"
            target="_blank"
            rel="noreferrer"
            className="tf-button btn-effect home-btn d-sm-inline-block d-none text-nowrap"
          >
            Join telegram
          </a>

          <div
            className={`mobile-button ${menuActive ? "active" : ""}`}
            onClick={handleMenuActive}
          >
            <span></span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
