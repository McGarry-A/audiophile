import React, { ReactElement } from "react";
import RadioButton from "../FormComponents/RadioButton/RadioButton";
import SimpleInput from "../FormComponents/SimpleInput/SimpleInput";
import "./Form.css";

const Form: React.FC = (): ReactElement => {

  return (
    <div className="form">
      <div className="form-section">
        <h4 className="form-section-header">Billing Details</h4>
        <div className="form-section-body">
          <SimpleInput
            text="Name"
            placeholder="Ahmed McGarry"
            inputWidth="small"
          />
          <SimpleInput
            text="Email"
            placeholder="atomcgarry@gmail.com"
            inputWidth="small"
          />
          <SimpleInput
            text="Phone Number"
            placeholder="07907733824"
            inputWidth="small"
          />
        </div>
      </div>
      <div className="form-section">
        <h4 className="form-section-header">Shipping Info</h4>
        <div className="form-section-body">
          <SimpleInput
            text="Address"
            placeholder="103 Bawley Court"
            inputWidth="large"
          />
          <SimpleInput
            text="Postcode"
            placeholder="E16 2FU"
            inputWidth="small"
          />
          <SimpleInput text="City" placeholder="London" inputWidth="small" />
          <SimpleInput
            text="Country"
            placeholder="United Kingdom"
            inputWidth="small"
          />
        </div>
      </div>
      <div className="form-section">
        <h4 className="form-section-header">Shipping Info</h4>
        <div className="form-section-body">
          <div className="form-payment-container">
            <div className="form-payment-col-1">
              <p>Payment Method</p>
            </div>
            <div className="form-payment-col-2">
              <RadioButton name="payment" for="e-Money" />
              <RadioButton name="payment" for="Cash on Delivery" />
            </div>
          </div>
          <SimpleInput
            text="e-Money number"
            placeholder="193123812"
            inputWidth="small"
          />
          <SimpleInput
            text="e-Money PIN"
            placeholder="0161"
            inputWidth="small"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
