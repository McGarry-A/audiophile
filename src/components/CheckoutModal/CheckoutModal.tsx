import ItemCard from "../ItemCard/ItemCard";
import "./CheckoutModal.css";
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { BasketContext } from "../..";

interface props {
  closeModal?: Function;
  editable: boolean;
  setCheckoutComplete?: React.Dispatch<React.SetStateAction<boolean>>
  checkoutComplete?: boolean
}
const CheckoutModal: React.FC<props> = ({ closeModal, editable, setCheckoutComplete, checkoutComplete }) => {
  const basketState = useContext(BasketContext);
  const { basket, setBasket } = basketState;

  const [totalPrice, setTotalPrice] = useState<string>("");
  const [vat, setVat] = useState<string>("");
  const [grandPrice, setGrandPrice] = useState<string>("");

  const checkoutButtonHandler = () => {
    closeModal && closeModal()
    if (setCheckoutComplete && basket.length >= 1) {
      setCheckoutComplete(true)
    }
  }
  const emptyBasket = () => {
    setBasket([]);
  };

  const calculateTotalPriceOfItems = ():void => {
    let runningTotal = 0;
    basket.forEach((el) => {
      let total = +el.price * el.quantity;
      runningTotal = runningTotal + total;
    });
    runningTotal = +runningTotal.toFixed(2);
    setTotalPrice(runningTotal.toString());
    return
  };

  const calculateVAT = (price: string):void => {
    let basketVat: number | string = +price * 0.2;
    setVat(basketVat.toFixed(2).toString());
    return
  };

  const calculateGrandPrice = (totalPrice: string, Vat: string) => {
    let grandTotal: string | number = +totalPrice + +Vat + 50
    grandTotal = grandTotal.toFixed(2).toString()
    setGrandPrice(grandTotal)
  };

  useEffect(() => {
    calculateTotalPriceOfItems()
    calculateVAT(totalPrice)
    calculateGrandPrice(totalPrice, vat)
  }, [vat, totalPrice, grandPrice])
  
  return (
    <div className="modal">
      <div className="modal-container">
        <div className="modal-header">
          {editable ? (
            <div className="modal-header">
              <h4>
                Cart ({basket.length > 0 ? basket.length : "Basket is empty"})
              </h4>
              <p onClick={emptyBasket}>Remove all</p>
            </div>
          ) : (
            <div>
              <h4>
                SUMMARY ({basket.length > 0 ? basket.length : "Basket is empty"}
                )
              </h4>
            </div>
          )}
        </div>
        <div className="modal-body-container">
          {basket.map((el, index) => {
            return (
              <ItemCard
                editable={editable}
                el={el}
                key={index}
                calculateTotalPriceOfItems={calculateTotalPriceOfItems}
              />
            );
          })}
        </div>
        {editable ? (
          <div className="modal-total-container">
            <p className="modal-total-text">Total</p>
            <p>£{totalPrice}</p>
          </div>
        ) : (
          <>
            <div className="modal-total-container">
              <p className="modal-total-text">Total</p>
              <p>£{totalPrice}</p>
            </div>
            <div className="modal-total-container">
              <p className="modal-total-text">Shipping</p>
              <p>£50</p>
            </div>
            <div className="modal-total-container">
              <p className="modal-total-text">VAT</p>
              <p>£{vat}</p>
            </div>
            <div className="modal-total-container">
              <p className="modal-total-text">Grand Total</p>
              <p>£{grandPrice}</p>
            </div>
          </>
        )}

        <NavLink to={basket.length >= 1 ? "/checkout" : "/"}>
          <button
            className="checkout-button"
            onClick={checkoutButtonHandler}
          >
            Checkout
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default CheckoutModal;
