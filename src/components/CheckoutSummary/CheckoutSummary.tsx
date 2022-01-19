import { useContext, useEffect } from "react";
import { BasketContext } from "../..";
import "./CheckoutSummary.css";

const CheckoutSummary = () => {
  const basketState = useContext(BasketContext);
  const { basket, setBasket } = basketState;
  const basketLength = basket.length - 1;

  const calculateBasketTotal = ():number => {
      let total:number = 0
      basket.forEach(el => {
        const itemPrice:number = +el.price * +el.quantity
        total = itemPrice + total
      })
      return total
  }

  console.log(basket);
  return (
    <div className="checkout-summary-container">
      <div className="checkout-summary-col-1">
        <div className="checkout-row-1">
          <div className="checkout-summary-1">
            <img src={basket[0].image} alt="product" />
          </div>
          <div className="checkout-summary-2">
            <h3>{basket[0].name}</h3>
            <p>£{basket[0].price}</p>
          </div>
          <div className="checkout-summary-3">
            <p>x{basket[0].quantity}</p>
          </div>
        </div>
        {basket.length > 1 && (
          <div className="checkout-summary-row-2">
            <p>and {basketLength} other item(s)</p>
          </div>
        )}
      </div>
      <div className="checkout-summary-col-2">
        <div className="checkout-summary-totals">
          <h4>Grand Total</h4>
          <p>£{calculateBasketTotal()}</p>
        </div>
      </div>
    </div>
  );
};

export default CheckoutSummary;
