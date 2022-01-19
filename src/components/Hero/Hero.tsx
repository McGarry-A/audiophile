import "./Hero.css";
import MarkTwo from "../../images/home/desktop/image-hero.jpg";
import { NavLink } from "react-router-dom";
const Hero: React.FC = () => {
  return (
    <div className="hero">
      <div className="hero-left">
        <p className="hero-new-prod">New Product</p>
        <h1>XX99 Mark ii Headphones</h1>
        <p className="hero-text">
          Experience natural, lifelike audio and exceptional build quality made
          for the passionate music enthusiast.
        </p>
        <NavLink to="/item/h1" className="hero-nav-link">
          <button>See Product</button>
        </NavLink>
      </div>
      <div className="hero-right">
        <img src={MarkTwo} alt="mark-two" className="hero-mark-two" />
      </div>
    </div>
  );
};

export default Hero;
