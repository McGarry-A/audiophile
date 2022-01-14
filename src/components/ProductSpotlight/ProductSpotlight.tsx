import "./ProductSpotlight.css";
import { Link } from "react-router-dom";
import { ProductsInterface } from "../../data";
import { useState } from "react";
import Stepper from "../Stepper/Stepper";

interface props {
  product: ProductsInterface;
  buy: boolean;
  index?: number;
}

const ProductSpotlight: React.FC<props> = ({ product, buy, index }) => {
  
  let [count, setCount] = useState<number>(0);

  return (
    <>
      <div
        className="product-spotlight"
        style={{ flexDirection: index! % 2 === 0 ? "row" : "row-reverse" }}
      >
        <div className="product-spotlight-col-1">
          <div className="product-spotlight-text-container">
            {product.new && <h4>New Product</h4>}
            <h2>{product.name}</h2>
            <p className="product-spotlight-description">{product.description}</p>

            {buy ? (
              <div className="product-spotlight-actions-container">
                <p className="product-spotlight-price">£{product.price}</p>
                <div className="product-spotlight-actions">
                  <Stepper count={count} setCount={setCount}/>
                  <button className="product-spotlight-atc">Add to Cart</button>
                </div>
              </div>
            ) : (
              <Link to={`/item/${product.id}`}>
                <button className="see-product-button">See Product</button>
              </Link>
            )}
          </div>
        </div>
        <div className="product-spotlight-col-2">
          <img src={product.heroImage} alt={product.name} />
        </div>
      </div>
    </>
  );
};

export default ProductSpotlight;
