import "./ProductSpotlight.css";
import { Link } from "react-router-dom";
import { ProductsInterface } from "../../data";

interface props {
  product: ProductsInterface;
  index?: number;
}

const ProductSpotlight: React.FC<props> = ({ product, index }) => {
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
            <p>{product.description}</p>

            <Link to={`/item/${product.id}`}>
              <button>See Product</button>
            </Link>
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
