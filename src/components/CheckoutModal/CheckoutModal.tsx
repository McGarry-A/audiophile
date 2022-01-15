import ItemCard from "../ItemCard/ItemCard";
import "./CheckoutModal.css";
import { NavLink } from "react-router-dom";

interface props {
  closeModal?: Function;
}
const CheckoutModal: React.FC<props> = ({ closeModal }) => {
  return (
    <div className="modal">
      <div className="modal-container">
        <div className="modal-header">
          <h4>Cart (Number)</h4>
          <p>Remove all</p>
        </div>
        <div className="modal-body-container">
          <ItemCard />
        </div>
        <div className="modal-total-container">
          <p className="modal-total-text">Total</p>
          <p>£999.99</p>
        </div>
        <NavLink to="/checkout">
          <button className="checkout-button" onClick={() => closeModal && closeModal()}>
            Checkout
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default CheckoutModal;
