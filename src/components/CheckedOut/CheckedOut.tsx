import "./CheckedOut.css";
import { ImCheckmark } from "react-icons/im";
import { NavLink } from "react-router-dom";
import React from "react";
import CheckoutSummary from "../CheckoutSummary/CheckoutSummary";

interface props {
    checkoutComplete: boolean,
    setCheckoutComplete: React.Dispatch<React.SetStateAction<boolean>>
}

const CheckedOut: React.FC<props> = (props) => {
  return (
    <div className="checked-out-wrapper">
      <div className="checked-out-modal">
        <div className="checked-out-checkmark-container">
          <ImCheckmark size={"4em"} fill="white" />
        </div>
        <div>
          <h1>Thank you for your order!</h1>
          <p className="checked-out-confirmation-email">
            You will recieve an email confirmation shortly.
          </p>
        </div>
        <div className="checked-out-item-list">
          <CheckoutSummary />
        </div>
        <NavLink to={"/"}>
          <button onClick={() => props.setCheckoutComplete(true)}>Back to Home</button>
        </NavLink>
      </div>
    </div>
  );
};

export default CheckedOut;
