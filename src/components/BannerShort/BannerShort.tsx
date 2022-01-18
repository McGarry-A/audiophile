import "./BannerShort.css";
import ZX7 from "../../images/home/desktop/image-speaker-zx7.jpg";
import { NavLink } from "react-router-dom";
const BannerShort: React.FC = () => {
  return (
    <div className="banner-short">
      <div className="banner-short-right">
        <img src={ZX7} alt="zx7" className="banner-right-image" />
      </div>
      <div className="banner-short-left">
        <h2>ZX7 Speaker</h2>
        <NavLink className="banner-short-nav-link" to="/item/s2">
          <button>See Product</button>
        </NavLink>
      </div>
    </div>
  );
};

export default BannerShort;
