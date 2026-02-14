import React, { useState } from "react";
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
          <h1>BUGATTI</h1>
        </div>
        <div className={`navContent ${isMenuOpen ? "active" : ""}`}>
          <div className="leftNav">
            <ul>
              <li onClick={closeMenu}>LA MARQUE</li>
              <li onClick={closeMenu}>HYPER SPORTS CARS</li>
              <li onClick={closeMenu}>LIFESTYLE</li>
            </ul>
          </div>
          <div className="rightNav">
            <ul>
              <li onClick={closeMenu}>NewsRoom</li>
              <li onClick={closeMenu}>STORE</li>
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
