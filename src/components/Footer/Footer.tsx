import "./Footer.css";
import Logo from "../../images/shared/desktop/logo.svg";
import Facebook from "../../images/shared/desktop/icon-facebook.svg"
import Instagram from  "../../images/shared/desktop/icon-instagram.svg"
import Twitter from  "../../images/shared/desktop/icon-twitter.svg"

const Footer: React.FC = () => {
  return (
    <div className="footer">
      <div className="footer-col-1">
        <div className="footer-logo-container">
          <img src={Logo} alt="Logo" className="footer-logo" />
        </div>
        <div className="footer-text">
          <p>
            Audiophile is an all in one stop to fulfill your audio needs. We're
            a small team of music lovers and sound specialists who are devoted
            to helping you get the most out of personal audio. Come and visit
            our demo facility - we’re open 7 days a week.
          </p>
        </div>
        <div className="footer-copyright">
          <p>Copyright 2021. All Rights Reserved</p>
        </div>
      </div>
      <div className="footer-col-2">
        <nav>
          <ul className="footer-nav-list">
            <li className="footer-nav-item">Home</li>
            <li className="footer-nav-item">Headphones</li>
            <li className="footer-nav-item">Speakers</li>
            <li className="footer-nav-item">Earphones</li>
          </ul>
        </nav>

        <div className="footer-socials-container">
          <ul className="footer-socials-list">
            <li className="footer-socials-item"><img src={Facebook} alt="social-link"/></li>
            <li className="footer-socials-item"><img src={Instagram} alt="social-link"/></li>
            <li className="footer-socials-item"><img src={Twitter} alt="social-link"/></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
