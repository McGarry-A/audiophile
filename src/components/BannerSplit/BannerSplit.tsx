import YX1 from "../../images/home/desktop/image-earphones-yx1.jpg";
import "./BannerSplit.css"

const BannerSplit: React.FC = () => {
  return (
    <div className="banner-split">
      <div className="banner-split-left">
        <img src={YX1} alt="yx1 earphones" />
      </div>
      <div className="banner-split-right">
        <h2>YX1 Earphones</h2>
        <button>See Product</button>
      </div>
    </div>
  );
};

export default BannerSplit;
