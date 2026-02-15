import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../style/navbar.css";
const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <div>
      <div className="mainNav">
        <div className="brandName">
          <Link to="/" onClick={closeMenu}>
            <h1>BUGATTI</h1>
          </Link>
        </div>
        <div className={`navContent ${isMenuOpen ? "active" : ""}`}>
          <div className="leftNav">
            <ul>
              <li>
                <Link to="/discover" onClick={closeMenu}>
                  LA MARQUE
                </Link>
              </li>
              <li>
                <Link to="/tourbillon" onClick={closeMenu}>
                  HYPER SPORTS CARS
                </Link>
              </li>
              <li>
                <Link to="/art-of-living" onClick={closeMenu}>
                  LIFESTYLE
                </Link>
              </li>
            </ul>
          </div>
          <div className="rightNav">
            <ul>
              <li>
                <Link to="/newsroom" onClick={closeMenu}>
                  NewsRoom
                </Link>
              </li>
              <li>
                <Link to="/store" onClick={closeMenu}>
                  STORE
                </Link>
              </li>
              <li onClick={closeMenu}>EN</li>
              <li onClick={closeMenu}>FR</li>
            </ul>
          </div>
        </div>
        <div
          className={`hamburger ${isMenuOpen ? "active" : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      {isMenuOpen && <div className="menuOverlay" onClick={closeMenu}></div>}
    </div>
  );
};

export default Navbar;
