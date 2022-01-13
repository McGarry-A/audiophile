import "./BannerShort.css";
import ZX7 from "../../images/home/desktop/image-speaker-zx7.jpg";
const BannerShort: React.FC = () => {
  return (
    <div className="banner-short">
      <div className="banner-short-right">
        <img src={ZX7} alt="zx7" className="banner-right-image" />
      </div>
      <div className="banner-short-left">
        <h2>ZX7 Speaker</h2>
        <button>See Product</button>
      </div>
    </div>
  );
};

export default BannerShort;
