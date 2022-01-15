import { ProductsInterface } from "../../data";
import "./Features.css";
interface Props {
  product: ProductsInterface;
}
const Features: React.FC<Props> = ({ product }) => {
  return (
    <div className="features-container">
      <div className="features-col-1">
        <div className="features-col-1-text">
          <h2>Features</h2>
          {product.features.map((el, index) => {
            return <p key={index}>{el}</p>;
          })}
        </div>
      </div>
      <div className="features-col-2">
        <div className="features-col-2-header">
          <h2>In The Box</h2>
        </div>
        <div className="features-col-2-list">
          {product.inTheBox.map((el, index) => {
            return (
              <div key={index} className="features-in-the-box">
                <div className="features-in-the-box-col-1">
                  <p>{el.BoxItemNumber}x</p>
                </div>
                <div className="features-in-the-box-col-2">
                  <p>{el.BoxItem}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Features;
