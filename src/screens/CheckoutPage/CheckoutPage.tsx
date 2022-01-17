import Form from "../../components/Form/Form";
import "./CheckoutPage.css";
import CheckoutModal from "../../components/CheckoutModal/CheckoutModal";
import { useState } from "react";
import CheckedOut from "../../components/CheckedOut/CheckedOut";
const CheckoutPage = () => {
  const [checkoutComplete, setCheckoutComplete] = useState<boolean>(false);

  return (
    <div className="checkout-page">
      {checkoutComplete === true ? (
        <CheckedOut checkoutComplete={checkoutComplete} setCheckoutComplete={setCheckoutComplete}/>
      ) : (
        <div>
          <h2 className="checkout-title">Checkout</h2>
          <div className="checkout-body">
            <Form />
            <CheckoutModal editable={false} setCheckoutComplete={setCheckoutComplete} checkoutComplete={checkoutComplete}/>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
