import Form from "../../components/Form/Form";
import "./CheckoutPage.css";
import CheckoutModal from "../../components/CheckoutModal/CheckoutModal";
const CheckoutPage = () => {
  return (
    <div className="checkout-page">
      <h2 className="checkout-title">Checkout</h2>
      <div className="checkout-body">
        <Form />
        <CheckoutModal />
      </div>
    </div>
  );
};

export default CheckoutPage;
