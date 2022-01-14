import "./ImageGallery.css";
import { ProductsInterface } from "../../data";

interface props {
  product: ProductsInterface;
}
const ImageGallery: React.FC<props> = ({ product }) => {
  const images = product.images;
  return (
    <div className="image-gallery">
      <div className="image-gallery-col-1">
        <div>
          <img className="image-item" src={images[0]} alt="product"/>
        </div>
        <div>
          <img className="image-item" src={images[1]} alt="product"/>
        </div>
      </div>
      <div className="image-gallery-col-2">
        <div>
          <img className="image-item" src={images[2]} alt="product"/>
        </div>
      </div>
    </div>
  );
};

export default ImageGallery;
