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
          <ul>
            {product.inTheBox.map((el) => {
              return <li>{el}</li>;
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Features;
