import ItemCard from "../ItemCard/ItemCard";
import "./CheckoutModal.css"
const CheckoutModal = () => {
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
        <button className="checkout-button">Checkout</button>
      </div>
    </div>
  );
};

export default CheckoutModal;
