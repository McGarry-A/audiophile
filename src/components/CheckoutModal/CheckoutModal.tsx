import ItemCard from "../ItemCard/ItemCard";
import "./CheckoutModal.css";
import { NavLink } from "react-router-dom";

interface props {
  closeModal?: Function;
  editable?: boolean;
}
const CheckoutModal: React.FC<props> = ({ closeModal, editable }) => {
  return (
    <div className="modal">
      <div className="modal-container">
        <div className="modal-header">
          {editable ? (
            <div className="modal-header">
              <h4>Cart (Number)</h4>
              <p>Remove all</p>
            </div>
          ) : (
            <div>
              <h4>SUMMARY</h4>
            </div>
          )}
        </div>
        <div className="modal-body-container">
          <ItemCard />
        </div>
        {editable ? (
          <div className="modal-total-container">
            <p className="modal-total-text">Total</p>
            <p>£999.99</p>
          </div>
        ) : (
          <>
            <div className="modal-total-container">
              <p className="modal-total-text">Total</p>
              <p>£amount</p>
            </div>
            <div className="modal-total-container">
              <p className="modal-total-text">Shipping</p>
              <p>$50</p>
            </div>
            <div className="modal-total-container">
              <p className="modal-total-text">VAT (Included)</p>
              <p>£amount+vat</p>
            </div>
            <div className="modal-total-container">
              <p className="modal-total-text">Grand Total</p>
              <p>Total Amount</p>
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
