import "./Hero.css";
import MarkTwo from "../../images/home/desktop/image-hero.jpg"
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
        <button>See Product</button>
      </div>
      <div className="hero-right">
          <img src={MarkTwo} alt="mark-two" className="hero-mark-two"/>
      </div>
    </div>
  );
};

export default Hero;
