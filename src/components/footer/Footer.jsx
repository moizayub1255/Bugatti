import React from 'react';
import { FaLinkedinIn, FaInstagram, FaFacebookF, FaYoutube, FaWeibo } from 'react-icons/fa';
import '../../style/footer.css'
const Footer = () => (
  <footer className="bugatti-footer">
    <div className="footer-main">
      <div className="footer-logo-col">
        <div className="footer-logo">EB</div>
      </div>
      <div className="footer-links-col">
        <div>
          <div className="footer-col-title">LA MARQUE</div>
          <ul>
            <li>Discover BUGATTI</li>
            <li>Careers</li>
            <li>Newsroom</li>
            <li>Classic Icons</li>
            <li>Historic Models</li>
            <li>Racing Legends</li>
            <li>Les Patrons</li>
            <li>La Maison Pur Sang</li>
            <li>Dealer Finder</li>
            <li>Contact</li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">HYPER SPORTS CARS</div>
          <ul>
            <li>TOURBILLON</li>
            <li>W16 MISTRAL</li>
            <li>BOLIDE</li>
            <li>CHIRON</li>
            <li>LA VOITURE NOIRE</li>
            <li>DIVO</li>
            <li>CENTODIECI</li>
            <li>Sur Mesure</li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">CUSTOMER SERVICE</div>
          <ul>
            <li>Individual Service and Contact</li>
            <li>Maintenance</li>
            <li>Service Partner Network</li>
            <li>Passport Tranquillité</li>
            <li>Warranty</li>
            <li>Roadside Assistance</li>
            <li>Genuine Parts</li>
            <li>BUGATTI Accessories</li>
          </ul>
        </div>
        <div>
          <div className="footer-col-title">LIFESTYLE</div>
          <ul>
            <li>Art of Living</li>
            <li>Apparel & Accessories</li>
            <li>Watches & Jewellery</li>
            <li>Collectibles & Model Cars</li>
            <li>Store</li>
          </ul>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      <div className="footer-bottom-left">
        <span>© 2025 BUGATTI AUTOMOBILES S.A.S.</span>
        <div className="footer-links-row">
          <a href="#">Legal Notice</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Cookie Policy</a>
          <a href="#">Modern Slavery Statement</a>
          <a href="#">Gender Equality Index</a>
          <a href="#">Privacy Settings</a>
          <a href="#">Compliance & Whistleblower</a>
          <a href="#">Fuel Consumption</a>
        </div>
        <div className="footer-socials">
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaYoutube /></a>
          <a href="#"><FaWeibo /></a>
        </div>
      </div>
      <div className="footer-bottom-right">
        <div className="footer-lang-title">LANGUAGE</div>
        <div className="footer-langs">
          <span>English</span>
          <span>Français</span>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
