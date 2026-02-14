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
          </ul>
        </div>
        <div>
          <div className="footer-col-title">CUSTOMER SERVICE</div>
          <ul>
            <li>Individual Service and Contact</li>
            <li>Maintenance</li>
            <li>Service Partner Network</li>
            <li>Passport Tranquillité</li>
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
    
  </footer>
);

export default Footer;
