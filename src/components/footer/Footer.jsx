import React from "react";
import { Link } from "react-router-dom";
import {
  FaLinkedinIn,
  FaInstagram,
  FaFacebookF,
  FaYoutube,
  FaWeibo,
} from "react-icons/fa";
import "../../style/footer.css";

const Footer = () => {
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
              <li>
                <Link to="/discover">Discover BUGATTI</Link>
              </li>
              <li>
                <Link to="/careers">Careers</Link>
              </li>
              <li>
                <Link to="/newsroom">Newsroom</Link>
              </li>
              <li>
                <Link to="/classics">Classic Icons</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">HYPER SPORTS CARS</div>
            <ul>
              <li>
                <Link to="/tourbillon">TOURBILLON</Link>
              </li>
              <li>
                <Link to="/mistral">W16 MISTRAL</Link>
              </li>
              <li>
                <Link to="/bolide">BOLIDE</Link>
              </li>
              <li>
                <Link to="/chiron">CHIRON</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">CUSTOMER SERVICE</div>
            <ul>
              <li>
                <Link to="/individual-service">
                  Individual Service and Contact
                </Link>
              </li>
              <li>
                <Link to="/maintenance">Maintenance</Link>
              </li>
              <li>
                <Link to="/service-partner">Service Partner Network</Link>
              </li>
              <li>
                <Link to="/passport">Passport Tranquillité</Link>
              </li>
            </ul>
          </div>
          <div>
            <div className="footer-col-title">LIFESTYLE</div>
            <ul>
              <li>
                <Link to="/art-of-living">Art of Living</Link>
              </li>
              <li>
                <Link to="/apparel">Apparel & Accessories</Link>
              </li>
              <li>
                <Link to="/watches">Watches & Jewellery</Link>
              </li>
              <li>
                <Link to="/collectibles">Collectibles & Model Cars</Link>
              </li>
              <li>
                <Link to="/store">Store</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
