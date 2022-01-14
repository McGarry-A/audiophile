import "./ProductSectionBanner.css";

interface props {
  title: string;
}
const ProductSectionBanner: React.FC<props> = ({ title }) => {
  return (
    <div className="product-section-banner">
      <h3>{title}</h3>
    </div>
  );
};

export default ProductSectionBanner;
