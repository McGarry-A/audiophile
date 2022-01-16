import { useContext, useState } from "react";
import { BasketContext, BasketInterface } from "../..";
import Stepper from "../Stepper/Stepper";
import "./ItemCard.css";

interface props {
  editable: boolean;
  el: BasketInterface
}
const ItemCard: React.FC<props> = ({ editable, el }) => {

  let [quantity, setQuantity] = useState<number>(el.quantity)
  
  const editQuantity = (operator:string) => {
    if (operator === "add") {
      setQuantity(quantity += 1)
    } else if (operator === `minus`) {
      setQuantity(quantity -= 1)
    }

    el.quantity = quantity
  }

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
          <Stepper count={quantity} changeQuantity={editQuantity} />
        </div>
      ) : (
        <div>x{quantity}</div>
      )}
    </div>
  );
};

export default ItemCard;
