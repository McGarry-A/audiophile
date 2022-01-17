import Form from "../../components/Form/Form";
import "./CheckoutPage.css";
import CheckoutModal from "../../components/CheckoutModal/CheckoutModal";
import { useState } from "react";
import CheckedOut from "../../components/CheckedOut/CheckedOut";
const CheckoutPage = () => {
  const [checkoutComplete, setCheckoutComplete] = useState<boolean>(true);

  return (
    <div className="checkout-page">
      {checkoutComplete === true ? (
        <CheckedOut />
      ) : (
        <div>
          <h2 className="checkout-title">Checkout</h2>
          <div className="checkout-body">
            <Form />
            <CheckoutModal editable={false} />
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
