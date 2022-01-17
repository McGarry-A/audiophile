import "./CheckedOut.css";
import { ImCheckmark } from "react-icons/im";
import { NavLink } from "react-router-dom";

const CheckedOut = () => {
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

        </div>
        <NavLink to={"/"}>
          <button>Back to Home</button>
        </NavLink>
      </div>
    </div>
  );
};

export default CheckedOut;
