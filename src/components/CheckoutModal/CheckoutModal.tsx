import ItemCard from "../ItemCard/ItemCard";
import "./CheckoutModal.css";
import { NavLink } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
import { BasketContext } from "../..";

interface props {
  closeModal?: Function;
  editable: boolean;
}
const CheckoutModal: React.FC<props> = ({ closeModal, editable }) => {
  const basketState = useContext(BasketContext);
  const { basket, setBasket } = basketState;
  const [basketQuantity, setBasketQuantity] = useState<number>(0);
  
  const calculateTotalPriceOfItems = () => {
    let total = 0
    basket.forEach(el => {
      total = +el.price + total
    })
    return total.toString()
  }


  const emptyBasket = () => {
    setBasket([])
  }

  // useEffect(() => {
  //   calculateTotalPriceOfItems()

  // }, [totalItemPrice])

  // const calculateTotalPriceOfBasket = (
  //   calculateTotalPriceOfItems: Function,
  //   calculateVAT: Function
  // ) => {
  //   const items = +calculateTotalPriceOfItems;
  //   const vat = +calculateVAT;
  //   const shipping = 50;
  //   return items + vat + shipping;
  // };

  // const calculateVAT = (calculateTotalPriceOfItems: Function) => {
  //   const vat = +calculateTotalPriceOfItems.toString();
  //   return vat;
  // };

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
            return <ItemCard editable={editable} el={el} key={index} />;
          })}
        </div>
        {editable ? (
          <div className="modal-total-container">
            <p className="modal-total-text">Total</p>
            <p>£{calculateTotalPriceOfItems()}</p>
          </div>
        ) : (
          <>
            <div className="modal-total-container">
              <p className="modal-total-text">Total</p>
              <p>TOTAL PRICE OF ITEMS</p>
            </div>
            <div className="modal-total-container">
              <p className="modal-total-text">Shipping</p>
              <p>£50</p>
            </div>
            <div className="modal-total-container">
              <p className="modal-total-text">VAT</p>
              <p>£ TOTAL PRICE OF VAT</p>
            </div>
            <div className="modal-total-container">
              <p className="modal-total-text">Grand Total</p>
              <p>£ TOTAL PRICE OF BASKET</p>
            </div>
          </>
        )}

        <NavLink to="/checkout">
          <button
            className="checkout-button"
            onClick={() => closeModal && closeModal()}
          >
            Checkout
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default CheckoutModal;
