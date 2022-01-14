import "./ProductSpotlight.css";

interface props {
  product: ProductDetailsInterface;
  index: number;
}

interface ProductDetailsInterface {
  new: boolean;
  name: string;
  description: string;
  heroImage: string;
}

const ProductSpotlight: React.FC<props> = ({ product, index }) => {
  return (
    <div
      className="product-spotlight"
      style={{ flexDirection: index % 2 === 0 ? "row" : "row-reverse" }}
    >
      <div className="product-spotlight-col-1">
        <div className="product-spotlight-text-container">
          {product.new && <h4>New Product</h4>}
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <button>See Product</button>
        </div>
      </div>
      <div className="product-spotlight-col-2">
        <img src={product.heroImage} alt={product.name} />
      </div>
    </div>
  );
};

export default ProductSpotlight;
