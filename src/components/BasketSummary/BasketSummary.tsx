import { useContext } from "react";
import { BasketContext, BasketContextInterface } from "../..";
import "./BasketSummary.css";

const BasketSummary = () => {
  const basketState = useContext<BasketContextInterface>(BasketContext);
  const { basket, setBasket } = basketState;

  const basketLength: number = basket.length - 1;
  return (
    <div className="basket-summary-container">
      {basket.length > 1 && (
        <div>
          <div className="basket-summary-col-1">
            <div>
              <img src={basket[0].image} alt="product" />
              <div>
                <h3>{basket[0].name}</h3>
                <p>{basket[0].price}</p>
              </div>
              <p>{basket[0].quantity}</p>
            </div>
            <div>
              <p>And {basketLength} other items</p>
            </div>
          </div>
          <div className="basket-summary-col-2">
            <div>
              <h3>Grand Total</h3>
              <p></p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default BasketSummary;
