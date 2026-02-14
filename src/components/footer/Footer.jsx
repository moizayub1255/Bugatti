import React from "react";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWeibo,
} from "react-icons/fa";
import "../../style/footer.css";

const Footer = ({ onFooterClick }) => {
  const handleClick = (page) => {
    if (onFooterClick) {
      onFooterClick(page);
    }
  };

  return (
    <footer className="bugatti-footer">
      <div className="footer-main">
        <div className="footer-logo-col">
          <div className="footer-logo">EB</div>
        </div>
        <div className="footer-links-col">
          <div>
            <div className="footer-col-title">LA MARQUE</div>
            <ul>
              <li onClick={() => handleClick("discover")}>Discover BUGATTI</li>
              <li onClick={() => handleClick("careers")}>Careers</li>
              <li onClick={() => handleClick("newsroom")}>Newsroom</li>
              <li onClick={() => handleClick("classics")}>Classic Icons</li>
              <li onClick={() => handleClick("contact")}>Contact</li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">HYPER SPORTS CARS</div>
            <ul>
              <li onClick={() => handleClick("tourbillon")}>TOURBILLON</li>
              <li onClick={() => handleClick("mistral")}>W16 MISTRAL</li>
              <li onClick={() => handleClick("bolide")}>BOLIDE</li>
              <li onClick={() => handleClick("chiron")}>CHIRON</li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">CUSTOMER SERVICE</div>
            <ul>
              <li onClick={() => handleClick("individual-service")}>
                Individual Service and Contact
              </li>
              <li onClick={() => handleClick("maintenance")}>Maintenance</li>
              <li onClick={() => handleClick("service-partner")}>
                Service Partner Network
              </li>
              <li onClick={() => handleClick("passport")}>
                Passport Tranquillité
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">LIFESTYLE</div>
            <ul>
              <li onClick={() => handleClick("art-of-living")}>
                Art of Living
              </li>
              <li onClick={() => handleClick("apparel")}>
                Apparel & Accessories
              </li>
              <li onClick={() => handleClick("watches")}>
                Watches & Jewellery
              </li>
              <li onClick={() => handleClick("collectibles")}>
                Collectibles & Model Cars
              </li>
              <li onClick={() => handleClick("store")}>Store</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
