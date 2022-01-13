import "./Banner.css";
import ZX9 from "../../images/home/desktop/image-speaker-zx9.png"

const Banner: React.FC = () => {
  return (
    <div className="banner">
      <div className="banner-left">
        <img src={ZX9} alt="zx9-speaker" className="banner-left-image" />
      </div>
      <div className="banner-right">
        <h1>ZX9 Speaker</h1>
        <p>
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <button>See Product</button>
        <div className="circle circle-small"></div>
        <div className="circle circle-medium"></div>
        <div className="circle circle-large"></div>
      </div>
    </div>
  );
};

export default Banner;
