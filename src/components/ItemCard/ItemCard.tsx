import { useState } from "react";
import Stepper from "../Stepper/Stepper";
import "./ItemCard.css";
import Thumbnail from "../../images/product-xx99-mark-two-headphones/desktop/image-product.jpg"

const ItemCard = () => {
    const [count, setCount] = useState<number>(0)
  return (
    <div className="item-card">
      <div className="item-card-col-1">
          <img src={Thumbnail} alt="product-thumbnail"/>
      </div>
      <div className="item-card-col-2">
          <h4>XX99 MK II</h4>
          <p>£999.99</p>
      </div>
      <div className="item-card-col-3">
          <Stepper count={count} setCount={setCount}/>
      </div>
    </div>
  );
};

export default ItemCard;
