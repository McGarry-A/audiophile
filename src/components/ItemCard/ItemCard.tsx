import { useState } from "react";
import { BasketInterface } from "../..";
import Stepper from "../Stepper/Stepper";
import "./ItemCard.css";
import Thumbnail from "../../images/product-xx99-mark-two-headphones/desktop/image-product.jpg";

interface props {
  editable: boolean;
  el: BasketInterface
}
const ItemCard: React.FC<props> = ({ editable, el }) => {
  const [count, setCount] = useState<number>(0);
  
  return (
    <div className="item-card">
      <div className="item-card-col-1">
        <img src={Thumbnail} alt="product-thumbnail" />
      </div>
      <div className="item-card-col-2">
        <h4>{el.name}</h4>
        <p>£{el.price}</p>
      </div>
      {editable === true ? (
        <div className="item-card-col-3">
          <Stepper count={count} setCount={setCount} />
        </div>
      ) : (
        <div>{el.quantity}</div>
      )}
    </div>
  );
};

export default ItemCard;
