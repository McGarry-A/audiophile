import { useState } from "react";
import { BasketInterface } from "../..";
import Stepper from "../Stepper/Stepper";
import "./ItemCard.css";

interface props {
  editable: boolean;
  el: BasketInterface
}
const ItemCard: React.FC<props> = ({ editable, el }) => {
  const [count, setCount] = useState<number>(0);
  
  return (
    <div className="item-card">
      <div className="item-card-col-1">
        <img src={el.image} alt="product-thumbnail" />
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
        <div>x{el.quantity}</div>
      )}
    </div>
  );
};

export default ItemCard;
